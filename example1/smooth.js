//Wrapping the function into a function
(function()
{
	function forbidden()
	{
		alert("forbiden works");
		var arguments = [];
	}
	
	forbidden();
	
})();
//Wrapping the function into a function
(function()
{
	//Activating strict mode
	"use strict";

	//The function is not really needed. Its purpose is only to fill the file.
	function do_something()
	{
		alert("do_something works!");		
	}
	
	do_something();
})();

