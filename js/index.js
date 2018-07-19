function addLine(father,index,length) {
	var ul = $("<ul>");
	console.log(index);
	
	father.append(ul);
	for (var i = 0; i < length; i++) {
		var li = $("<li>");
		li.appendTo(ul);

	}
	ul.css({
		bottom:index * $("li").height()
	});
	move(ul,father);	
}

function move(tag,father) {
	tag.animate({
		left:father.width() - tag.width()
	},1000,function () {
		tag.animate({
			left:0
		},1000,function () {
			move(tag,father)
		});
	});
}

function remove(before, current) {
	var before_left = before.position().left;
	var current_left = current.position().left;
	var difference = current_left - before_left;
	var direction_left = true;
	if (difference > 0 ) {
		direction_left = false;
	}
	var value = Math.abs(difference);
	var num = parseInt(value / 10);
	for (var i = 0; i < num; i++) {
		var li = current.children()[0];
		

		// $(current.children()[0]).animate({
		// 	background:'red'
		// },100,function () {
		// 	console.log(123);
		// 	console.log(li)
		// 	li.remove();
		// 	console.log(456)
		// })


		li.remove();
		
		if (direction_left) {
			console.log(direction_left);
			current.css({
				left:current.position().left + 10
			});
		}
		
	}
	// current.css({
	// 		left:before_left
	// 	});
}