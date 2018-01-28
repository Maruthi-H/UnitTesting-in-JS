const orderTotal = (order) => order.items.reduce((prev, cur) => prev + (cur.price * (cur.quantity || 1)), 0)

module.exports = orderTotal;