// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

console.log(invOne, invTwo);
// in this example we just permit invoices is filled by invoices object.
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "yoshi";
invTwo.amount = 2000;

console.log("changed data:", invOne, invTwo);

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// input
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
