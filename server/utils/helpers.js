// const mockCart = {1: 2, 2: 4, 3: 2, 4: 4, 5: 2}

const createOrderQuery = (cart, orderId) => {
  let query = `INSERT INTO order_items (order_id, menu_id) VALUES`
  for (let itemId in cart) {
    const itemQuantity = cart[itemId]
    for (let i = 1; i <= itemQuantity; i++) {
      query += ` (${orderId}, ${itemId}),`
    }
  }
  query = query.slice(0, -1)
  query += `;`
  return query
}

// createOrderQuery(mockCart, 1)

module.exports = { createOrderQuery }