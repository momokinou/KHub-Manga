const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({width: 800, height: 600})    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/KHub-Manga/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

app.on('ready', onReady);