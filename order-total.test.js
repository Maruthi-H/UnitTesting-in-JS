const orderTotal = require('./order-total')

it("works", () => {
	expect(1).toBe(1);
})

it("order total with quantity", () => {
	expect(orderTotal({
    items: [{
      name: "abc",
      price: 8,
      quantity: 1,
      shipping: true
     }, {
      name: "abc",
      price: 800,
      quantity: 1
    }]
  })).toBe(808)
})

it("order total without quantity", () => {
	expect(orderTotal({
    items: [{
      name: "abc",
      price: 8,
      shipping: true
     }, {
      name: "abc",
      price: 800
    }]
  })).toBe(808)
})


it("single order", () => {
	expect(orderTotal({
    items: [{
      name: "abc",
      price: 8,
      quantity:3,
      shipping: true
     }]
  })).toBe(24)
})