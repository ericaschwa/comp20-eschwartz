// Your JavaScript goes here...

var request = new XMLHttpRequest();
function parse() {
	request.open("GET", "data.json", true);
	request.send(); 
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			var data = request.responseText;
			data = JSON.parse(data);
			elem = document.getElementById("messages");
			var content = ""
			for (var i = 0; i < data.length; i++) {
				content += "<p><span class='content'>" + data[i]['content'] + "</span><br>" + data[i]['username'] + "</p>";
			}
			elem.innerHTML = content;
		}
	}
}