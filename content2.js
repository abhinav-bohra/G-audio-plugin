chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//Step 1 : Check whether we have reached Download page (logged in)
	function checkURL( getDownload_link)
	{  
		dateAtStartOfExecution = Date.now();
		while(flag == 0)
		{
			if( window.location.href == "https://takeout.google.com/takeout/download")
			{
				flag=1;
			}

			if (Date.now() > dateAtStartOfExecution + 300000) //If takes moew than 5 minutes than we exit
			{	
				alert("Taking too much time...Killing");
				return;
			}
		}
	}
	//Step 2: Get Download link
	function getDownload_link()
	{
		var x = document.getElementsByClassName("WpHeLc")[0].href;
		//Now send it to server using xml http request
	}
	//---------------------------------------------------------------------------------------------------------------------------------------

	var flag=0;
	checkURL(getDownload_link);
}
