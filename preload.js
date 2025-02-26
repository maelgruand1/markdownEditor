// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    convertMarkdown: (markdownText) => ipcRenderer.invoke('convertMarkdown', markdownText)
});
