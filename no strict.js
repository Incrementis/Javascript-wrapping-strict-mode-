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