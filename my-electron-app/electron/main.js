import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url';
import io from "socket.io-client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;

const createWindow = () => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173');
  } else {
    // Saat build, load dari file hasil build React
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("✅ Connected to Socket.IO server");
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

socket.on("navigateCommand", (page) => {
  console.log("Receive navigate command:", page);
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