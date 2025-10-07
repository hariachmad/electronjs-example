import { app, BrowserWindow } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  if (!app.isPackaged) {
    win.loadURL('http://localhost:5173');
  } else {
    // Saat build, load dari file hasil build React
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow()
})