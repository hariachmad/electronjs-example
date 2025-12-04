import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url';
import io from "socket.io-client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.commandLine.appendSwitch("enable-features", "UseOzonePlatform");
app.commandLine.appendSwitch("ozone-platform", "wayland");

let win;

const createWindow = () => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen : false,
        frame : false,
        autoHideMenuBar : true,
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
    win.maximize();          // tampil dulu (aman di Wayland)
    win.setFullScreen(true); // baru fullscreen
  });
};
const socket = io("http://192.168.1.100:3000");

socket.on("connect", () => {
  console.log("✅ Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

socket.on("navigateCommand", (page) => {
  console.log("Receive navigate command:", page);
  const blacklistPath = ["/fall", "/help","/i-am-ok"];
  if (blacklistPath.includes(page)) return;
  if (win) {
    win.webContents.send("navigate-page", page);
  }
});

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('message-from-renderer', (event, data) => {
  event.reply('reply-from-main', 'Halo dari main process!');
});