var string1 = "안녕하세요";
var string2 = "반갑습니다";
var greeting = `${string1} ${string2}`;
// var greeting = string1 + " " + string2;
var product = { name: "도서", price: "4200원" };
var message = "제품" + product.name + "의 가격은 " + product.price + " 입니다.";
var multiLine = "문자열1\n문자열2";
var value1 = 1;
var value2 = 2;
var boolValue = true;
var operator1 = "곱셈값은 " + value1 * value2 + "입니다.";
var operator2 = "불리언 값은 " + (boolValue ? "참" : "거짓") + "입니다.";

var cart = { name: "도서", price: 1500 };

var getTotal = function (cart) {
  return `${cart.price} 원`;
};

var myCart = `장바구니에 ${cart.name} 가 있습니다. 총 금액은 ${getTotal(
  cart
)} 입니다.`;

var array1 = ["one", "two"];
var array2 = ["three", "four"];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1, array2);
var three = array1[2] || "empty"; // || 연산자오 ㅏ조합하면 추출할 배열 요소가 없을때 기본값을 지정할 수 있다.
function func() {
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1, args.length);
}

var a = "tset";
