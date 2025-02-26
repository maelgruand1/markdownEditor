// main.js (ou fichier principal Electron)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Assurez-vous que 'preload.js' est bien présent
            nodeIntegration: false, // Désactive nodeIntegration pour la sécurité
            contextIsolation: true // Isoler le contexte pour plus de sécurité
        }
    });

    mainWindow.loadURL('your-local-or-remote-url.html');
}

// Exposez l'API via preload.js
app.whenReady().then(createWindow);

ipcMain.handle('convertMarkdown', (event, markdownText) => {
    // Votre logique de conversion du markdown ici
    return convertMarkdownToHTML(markdownText); // Implémentez la logique de conversion
});

// Assurez-vous que l'application est prête avant de quitter
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
