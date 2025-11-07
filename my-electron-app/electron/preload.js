const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (pesan) => ipcRenderer.send('message-from-renderer', pesan),
  onReply: (callback) => ipcRenderer.on('reply-from-main', (event, data) => callback(data)),
  onNavigate: (callback) =>
    ipcRenderer.on("navigate-page", (event, page) => callback(page))
});
