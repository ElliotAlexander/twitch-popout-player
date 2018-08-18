const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
   // squirrel event handled and app will exit in 1000ms, so don't do anything else
   return;
}


const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const MenuItem = electron.MenuItem
const Menu = electron.Menu
const ipcMain = electron.ipcMain

var win = BrowserWindow.getFocusedWindow();
var alwaysontop = true


app.on('ready', function() {
    createWindow ();


    const ctxMenu = new Menu();
    ctxMenu.append(new MenuItem({
        label: "Close",
        click : function(){
            win.close();
        }
    }))

    ctxMenu.append(new MenuItem({
        label: "Open stream",
        click : function() {
            win.webContents.send('ping', "ping received!");
        }
    }))

    ctxMenu.append(new MenuItem({
        label: "Toggle always on top",
        click : function() {
            if(alwaysontop==true){
                win.setAlwaysOnTop(false)
                alwaysontop = false
            } else {
                win.setAlwaysOnTop(true)
                alwaysontop = true
            }
        },
        type: "checkbox",
        checked : true
    }))

    win.webContents.on('context-menu', function(e, params){
        ctxMenu.popup(win, params.x, params.y);
    })


});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


function createWindow () {
    win = new BrowserWindow({
        width: 640,
        height: 480,
        frame: false,
        alwaysOnTop: true,
        "webPreferences":{
            "webSecurity":false
          }
        })
    win.setMenu(null);
    win.loadFile('index.html')
    win.on('closed', () => {
      win = null
    })
  }
  
  