const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (pesan) => ipcRenderer.send('message-from-renderer', pesan),
  sendVolumeChange: (volume) =>
    ipcRenderer.send("volume-change", volume),

  sendBrightnessChange: (brightness) => {
    ipcRenderer.send("brightness-change", brightness)
  },

  onReply: (callback) => ipcRenderer.on('reply-from-main', (event, data) => callback(data)),
  onNavigate: (callback) =>
    ipcRenderer.on("navigate-page", (event, page) => callback(page)),
  onVolumeChange: (callback) => ipcRenderer.on("volume-change", (event, volume) => callback(volume)),
  onBrightnessChange: (callback) => {
    ipcRenderer.on("brightness-change", (event, level) => {
      callback(level);
    }
    )
  }
});

contextBridge.exposeInMainWorld('env', {
  SOCKET_IO_SERVER: process.env.SOCKET_IO_SERVER
})