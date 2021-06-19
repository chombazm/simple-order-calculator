console.log("https://chomba.live");



function calculateOrder(e) {
	e.preventDefault();
	
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;
	var discount = document.getElementById("discount").value;

	

	var total = quantity * price;
	total -= discount;
 
	document.getElementById("displayTotal").value = total;
	// console.log(quantity,price,tax,discount, total);
}


document.getElementById("calculateButton").addEventListener("click", calculateOrder);