main = function() {
	document.write("<center>");
	document.write("<h1>九九の表</h1>");
	document.write("<table border>");

	for (var $col = 1; $col < 10; $col++) {
		document.write("<tr style='text-align: right;'>");

		for (var $row = 1; $row < 10; $row++) {
			var $val = $col * $row;
			document.write("<td style='width: 30px;'>", $val, "</td>");
		}

		document.write("</tr>");
	}

	document.write("</table>");
	document.write("</center>");
}
