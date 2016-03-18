$(".flex-direction").change(function(){
	var v = $(this).val();
	$("#container").css("flex-direction", v);
});
$(".flex-wrap").change(function(){
	var v = $(this).val();
	$("#container").css("flex-wrap", v);
});
$(".justify-content").change(function(){
	var v = $(this).val();
	$("#container").css("justify-content", v);
});
$(".align-items").change(function(){
	var v = $(this).val();
	$("#container").css("align-items", v);
});
$(".align-content").change(function(){
	var v = $(this).val();
	$("#container").css("align-content", v);
})


$(".item1 button").click(function(){
	var name = $(this).parent().attr("class");
	var v = $(this).prev().val();
	$(".item1").css(name, v)
})
$(".align-self").change(function(){
	var v = $(this).val();
	$(".item1").css("align-self", v);
})


$(".item2 button").click(function(){
	var name = $(this).parent().attr("class");
	var v = $(this).prev().val();
	$(".item2").css(name, v)
})