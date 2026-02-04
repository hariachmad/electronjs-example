import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url';
import { io } from "socket.io-client";
import { pages } from '../constants/pages.js';
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.commandLine.appendSwitch("enable-features", "UseOzonePlatform");
app.commandLine.appendSwitch("ozone-platform", "wayland");

dotenv.config({ path: path.join(__dirname,'..','..', '.env') })

let win;
let flag = "INCREASE"

const createWindow = () => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  win.once("ready-to-show", () => {
  });
};


const socket = io(process.env.SOCKET_IO_SERVER, {
  auth: {
    userId: "frontend"
  }
});

console.log("SOCKET_IO_SERVER : ", process.env.SOCKET_IO_SERVER);

socket.on("connect", () => {
  console.log("✅ Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

//VOLUME
socket.on("INCREASE_VOLUME", (msg) => {
  console.log("INCREASE_VOLUME : ", msg);
  flag = "INCREASE"
  socket.emit("VOLUME_GET", msg)
});

socket.on("DECREASE_VOLUME", (msg) => {
  console.log("DECREASE_VOLUME : ", msg);
  flag = "DECREASE"
  socket.emit("VOLUME_GET", msg)
});

socket.on("VOLUME_GET", (msg) => {
  let result;
  if (flag === "INCREASE") {
    result = increaseValue(msg);
  } else {
    result = decreaseValue(msg);
  }

  win.webContents.send("volume-change", result);
  socket.emit("VOLUME_SET", result, (ackFromClient) => {
    const result2 = { volume: ackFromClient }
    console.log("ACK INCREASE VOLUME FROM RASPBERRY : ", result2);
  });
})


//BRIGHTNESS
socket.on("INCREASE_BRIGHTNESS", (msg) => {
  console.log("INCREASE_BRIGHTNESS : ", msg);
  flag = "INCREASE"
  socket.emit("BRIGHTNESS_GET", msg)
});

socket.on("DECREASE_BRIGHTNESS", (msg) => {
  console.log("DECREASE_BRIGHTNESS : ", msg);
  flag = "DECREASE"
  socket.emit("BRIGHTNESS_GET", msg)
});

socket.on("BRIGHTNESS_GET", (msg) => {
  let result;
  if (flag === "INCREASE") {
    result = increaseValue(msg);
  } else {
    result = decreaseValue(msg);
  }

  win.webContents.send("brightness-change", result);
  socket.emit("BRIGHTNESS_SET", result);
})

socket.on("BRIGHTNESS_SET", (msg) => {
  console.log("BRIGHTNESS_SET : ", msg);
  socket.emit("BRIGHTNESS_SET", msg);
});

pages.map((page, index) => {
  socket.on(page, (msg) => {
    console.log("Navigating to:", page);
    const blacklistPath = ["/fall", "/help", "/i-am-ok"];
    if (blacklistPath.includes(page)) return;
    if (win) {
      win.webContents.send("navigate-page", "/" + page);
    }
  });
})

ipcMain.on('volume-change', (event, volume) => {
  socket.emit("VOLUME_SET", volume, (ackFromClient) => {
    const result = { volume: ackFromClient }
    console.log("ackFromClient :", result);
  });
})

ipcMain.on('brightness-change', (event, level) => {
  socket.emit("BRIGHTNESS_SET", level, (ackFromClient) => {
    const result = { level: ackFromClient.level }
    console.log("ackFromClient :", result);
  });
})

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('message-from-renderer', (event, data) => {
  event.reply('reply-from-main', 'Halo dari main process!');
});


const increaseValue = (value) => value + 10;

const decreaseValue = (value) => value - 10;