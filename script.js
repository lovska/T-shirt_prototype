function print_contact() {
	var sk = "skype: helper"
	var tg = "telegram: @helper"
	var tel = "tel:8995345235"
	alert(sk + '\n' + tg + '\n' + tel)
}


function gift() {
	var text = "Ты получил подарок напиши нам в тг"
	var tg = "telegram: @helper"
	alert(text + '\n' + tg)
}

function applyPromotion() {
    alert("Поздравляем! Вы получаете 3 футболку в подарок за покупку 2 футболок.");
}

function calc() {
	var a = +prompt("Введите кол-во футболок: ");
	var b = +prompt("Введите цену 1 футболки: ");
	var t = a * b;

	alert('Цена футболок: ' + t + ' руб.');
}


