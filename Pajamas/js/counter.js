// Price counter script
$('.count-minus').click(function(){

	var iid = $(this).attr("iid");

	$.ajax({
		type: "POST",
		url: "count-minus.php",
		data: "id="+iid,
		dataType: "html",
		cache: false,
		success: function(data) {
			$("#input-id"+iid).val(data);
			loadcart();

			// переменная с ценой продукта
			var priceproduct = $("#tovar"+iid+" > p").attr("price");
			// цена умножается на количество
			result_total = Number(priceproduct) * Number(data);

			$("#tovar"+iid+" > p").html(fun_group_price(result_total)+" грн");
			$("#tovar"+iid+" > h5 > .span-count").html(data);

			itog_price();
		}
	});
}

$('.count-plus').click(function(){

	var iid = $(this).attr("iid");

	$.ajax({
		type: "POST",
		url: "count-plus.php",
		data: "id="+iid,
		dataType: "html",
		cache: false,
		success: function(data) {
			$("#input-id"+iid).val(data);
			loadcart();

			// переменная с ценой продукта
			var priceproduct = $("#tovar"+iid+" > p").attr("price");
			// цена умножается на количество
			result_total = Number(priceproduct) * Number(data);

			$("#tovar"+iid+" > p").html(fun_group_price(result_total)+" грн");
			$("#tovar"+iid+" > h5 > .span-count").html(data);

			itog_price();
		}
	});
}

$('.count-input').keypress(function(e){

	if (e.keyCode==13) {

		var iid = $(this).attr("iid");
		var incount = $("#input-id"+iid).val();

		$.ajax({
			type: "POST",
			url: "count-input.php",
			data: "id="+iid+"&count="+incount,
			dataType: "html",
			cache: false,
			success: function(data) {
				$("#input-id"+iid).val(data);
				loadcart();

				// переменная с ценой продукта
				var priceproduct = $("#tovar"+iid+" > p").attr("price");
				// цена умножается на количество
				result_total = Number(priceproduct) * Number(data);

				$("#tovar"+iid+" > p").html(fun_group_price(result_total)+" грн");
				$("#tovar"+iid+" > h5 > .span-count").html(data);

				itog_price();
			}
		});
	}
}

function loadcart() {
	$.ajax({
		type: "POST",
		url: "loadcart.php",
		dataType: "html",
		cache: false,
		success: function(data) {
			if (data == "0"){
				$("#block-basket > 0").html("Корзина пуста :(");
			} else {
				$("#block-basket > a").html(data);
			}
		}
	});
}

function itog_price() {
	$.ajax({
		type: "POST",
		url: "itog_price.php",
		dataType: "html",
		cache: false,
		success: function(data) {
			$(".itog-price > strong").html(data);
		}
	});
}