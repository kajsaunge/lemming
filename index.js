
var handlebarsTemplate = require("./lemmings.handlebars");

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = handlebarsTemplate({
		heading: "Hello dear Lemmings!"
	});
	document.body.appendChild(div);
});
