"use strict";
const form = document.getElementById("order-form");
const itemNameInput = document.getElementById("item-name");
const itemPriceInput = document.getElementById("item-price");
const quantityInput = document.getElementById("quantity");
const taxInput = document.getElementById("tax");
const discountInput = document.getElementById("discount");
function calculateTotal() {
    let orderItem = {
        itemName: itemNameInput.value.trim(),
        itemPrice: Number(itemPriceInput.value),
        quantity: Number(quantityInput.value),
        tax: Number(taxInput.value),
        discount: Number(discountInput.value),
    };
    if (!orderItem.itemName) {
        alert("Item name is required");
        return;
    }
    if (isNaN(orderItem.itemPrice) ||
        isNaN(orderItem.quantity) ||
        isNaN(orderItem.tax) ||
        isNaN(orderItem.discount)) {
        alert("Enter valid numeric values");
        return;
    }
    if (orderItem.itemPrice <= 0) {
        alert("Item price must be greater than 0");
        return;
    }
    if (orderItem.quantity <= 0) {
        alert("Quantity must be greater than 0");
        return;
    }
    let itemName = document.getElementById("itemName");
    itemName.textContent = `${orderItem.itemName} (${orderItem.quantity})`;
    let subTotalAmount = orderItem.itemPrice * orderItem.quantity;
    let subtotal = document.getElementById("subtotal");
    subtotal.textContent = `Rs. ${subTotalAmount}`;
    let taxAmount = (orderItem.tax / 100) * subTotalAmount;
    let tax = document.getElementById("tax-amount");
    tax.textContent = `Rs. ${taxAmount}`;
    let discountAmount = (orderItem.discount / 100) * subTotalAmount;
    let discount = document.getElementById("discount-amount");
    discount.textContent = `Rs. ${discountAmount}`;
    let totalAmount = subTotalAmount + taxAmount - discountAmount;
    let total = document.getElementById("total");
    total.textContent = `Rs. ${totalAmount}`;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateTotal();
    form.reset();
});
