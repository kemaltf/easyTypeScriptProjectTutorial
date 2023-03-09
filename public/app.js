import { Invoice } from "./classes/Invoice.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Invoice("mario", "plumbing work", 200);
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
// in this example we just permit invoices is filled by invoices object.
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// readonly cannot re-assign but can read inside or outside the class
// invOne.client = "yoshi";
invTwo.amount = 2000;
console.log("changed data:", invOne, invTwo);
invoices.forEach((inv) => {
    // private only can read inside the class
    // console.log(inv.client, inv.details, inv.amount, inv.format());
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
console.log(form.children);
// input
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
