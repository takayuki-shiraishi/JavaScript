main = function() {
	var $target = $('#main');

	for (var $col = 1; $col < 10; $col++) {
		var $tpl1 = $('<tr id="'+ $col +'" style="text-align: right;"></tr>');

		for (var $row = 1; $row < 10; $row++) {
			var $val = $col * $row;
			var $tpl2 = $('<td style="width: 30px;">'+ $val +'</td>');

			var $color = (($col * 9 + $row) % 2) ? "#ffffff" : "#cccccc";
			$tpl1.append($tpl2).children().eq($row - 1).css({"background-color": $color});
		}

		$target.append($tpl1);
	}
}
