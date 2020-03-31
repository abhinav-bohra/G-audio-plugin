chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	//Step 1 : Check whether we have reached takeout page (logged in)
	function checkURL(createExport)
	{  
		dateAtStartOfExecution = Date.now();
		while(flag == 0)
		{
			if( window.location.href == "https://takeout.google.com/takeout")
			{
				flag=1;
			}

			if (Date.now() > dateAtStartOfExecution + 300000) //If takes moew than 5 minutes than we exit
			{	
				alert("Taking too much time....Killing");
				return;
			}
		}
	}
	//Step 2: Create Export (Deselect All -> Select Voice activity -> Click on create export)
	function createExport()
	{
		if(flag == 1)
		{
			var i;
			for (i = 0; i < 44; i++)
			{
				document.getElementsByClassName("VfPpkd-muHVFf-bMcfAe")[i].click();	//Deselect all
			}

			document.getElementsByClassName("VfPpkd-muHVFf-bMcfAe")[32].click(); // Select 'Voice Activity'
			document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ nCP5yc AjY5Oe DuMIQc aMLfv")[0].click(); // Click on create export
			//sendResponse();   //Somehow tell popup.js that its done
		}

		else
		{
			alert("Please login to your Google Account and then click on Create Export.")
		}
	}
	//---------------------------------------------------------------------------------------------------------------------------------------
	//Execution starts from here
	var flag=0;
	checkURL(createExport);
}
