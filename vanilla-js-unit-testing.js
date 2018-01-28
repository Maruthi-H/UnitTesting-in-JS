const orderTotal = (order) => order.items.reduce((prev, cur) => prev + (cur.price * (cur.quantity || 1)), 0)

if (orderTotal({
    items: [{
      name: "abc",
      price: 8,
      shipping: true
     
    }, {
      name: "abc",
      price: 800
     
    }]
  }) !== 808) {
  throw new Error("check fail (1) without qunatity")
}

if (orderTotal({
    items: [{
      name: "abc",
      price: 8,
      shipping: true,
      quantity: 1
    }, {
      name: "abc",
      price: 8,
      quantity: 1
    }]
  }) !== 16) {
  throw new Error("check fail (2) with quantity");
}

if(orderTotal({
  items: [
    {name: "abc", price: 2, quantity: 3}
  ]
}) !== 6 ){
  throw new Error("check fail (3)")
}
