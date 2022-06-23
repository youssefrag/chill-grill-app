const pg = require('pg')

const Client = pg.Client;

const client = new Client({
  user: 'youssefragab',
  password: 'postgres',
  host: 'localhost',
  database: 'chillgrilldb',
});

client.connect()
.then(() => {
  console.log('db connected')
})
.catch((error) => {
  console.log(`Error connecting to DB: ${error}`)
})

client.query(
  `
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS menu CASCADE;
    DROP TABLE IF EXISTS orders CASCADE;
    DROP TABLE IF EXISTS order_items CASCADE;
    
    CREATE TABLE menu (
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      photo_url VARCHAR(255) NOT NULL,
      price INTEGER
    );
    
    CREATE TABLE orders (
      id SERIAL PRIMARY KEY NOT NULL,
      order_placed BOOLEAN DEFAULT false,
      order_ready BOOLEAN DEFAULT false,
    );
    
    CREATE TABLE order_items (
      id SERIAL PRIMARY KEY NOT NULL,
      order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
      menu_id INTEGER REFERENCES menu(id) ON DELETE CASCADE
    );
  `
)

client.query(
  `
    INSERT INTO menu (name, photo_url, price)
    VALUES ('Cheeseburger', '/menu-pictures/cheeseburger.jpeg', 9), ('Double Cheeseburger', '/menu-pictures/double-cheeseburger.jpeg', 11), ('Hot Dog', '/menu-pictures/hot-dog.jpeg', 7), ('Fries', '/menu-pictures/fries.jpeg', 5), ('Coke', '/menu-pictures/coke.jpeg', 3);
  `
)
.then(() => {
  client.end()
})