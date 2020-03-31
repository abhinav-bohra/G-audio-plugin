document.addEventListener('DOMContentLoaded', function () {
	
	document.querySelector('button').addEventListener('click',onclick,false)

	function onclick(){
		window.open("https://takeout.google.com/takeout/download"); //Loads Google Takeout Download Page
		setTimeout(geURL,10000); //Waits for 10 seconds
	
	}
	function getURL(){
		chrome.tabs.query( {currentWindow: true, active: true} , function(tabs){chrome.tabs.sendMessage(tabs[0].id,'hi'); });
	}

}, false)
