/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'javierlm';
const collection = 'customers';

// The current database to use.
use(database);

db.customers.insertOne({"phone":"032345432134",
"BusinessType": ["Sell", "Sugar", "Drinks"],
"Reference":100,
"Company":"Coca-Cola"})