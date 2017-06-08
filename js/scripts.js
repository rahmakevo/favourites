-$(document).ready(function() {
	$("#blanks form").submit(function(event) {
		var blanks = ["car", "meal", "animal", "fruit"];
		var cloneArray = blanks;
    //
    // cloneArray.push([1]);
    // cloneArray.push([0]);
    // cloneArray.push([3]);
    // cloneArray.push([2]);
    // cloneArray;
    // 
		cloneArray.forEach(function(blank) {
			var userInput = $("input#" + blank).val();
			$("." + blank).text(userInput);
		});
		$("#story").show();
		event.preventDefault();
	});
});
