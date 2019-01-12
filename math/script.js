var inputField;

function submit(){
	var s = inputField.latex(), t = "";
	for(var i = 0; i < s.length; i++)
		if(s[i] != '\\') t += s[i];
	
	$.get("request.php",
		{ type: "asdf", data : t },
		function(data){ console.log(data); }
	);
}

$(document).ready(function(){
	var MQ = MathQuill.getInterface(2);

	var p = document.getElementById('prompt');
	MQ.StaticMath(p);

	var input = document.getElementById('input');
	inputField = MQ.MathField(input);

	$('#submit').click(submit);
	$(document).keydown(function(e){
		if(e.which == 13) submit();
	});
});
