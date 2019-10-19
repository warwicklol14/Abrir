import { app, BrowserWindow } from 'electron';
 
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    show:false,
    maximizable:false
  });
 
  // and load the index.html of the app.
  win.loadFile('index.html');
  win.maximize();
  win.show();
}
 
app.on('ready', createWindow);