/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'javierlm';
const collection = 'transactions';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.getCollection(collection).insertMany(
    [
        {
            "Id": 100,
            "Name": "John",
            "TransactionId": "tran1",
          "Transaction": [
            {
            "ItemId":"a100",
            "price": 200
            },
            {
            "ItemId":"a110",
            "price": 200  
            }
          ],
          "Subscriber": true,
          "Payment": {
            "Type": "Credit-Card",
            "Total": 400,
            "Success": true
          },
          "Note": "1st Complete Record"
        },
        {
            "Id": 101,
            "Name": "Tom",
            "TransactionId": "tran2",
          "Transaction": [
            {
            "ItemId":"a100",
            "price": 200
            },
            {
            "ItemId":"a110",
            "price": 200  
            }
          ],
          "Subscriber": true,
          "Payment": {
            "Type": "Debit-Card",
            "Total": 400,
            "Success": true
          },
          "Note":null
        },
        {
            "Id": 102,
            "Name": "Margaret",
            "TransactionId": "tran3",
          "Transaction": [
            {
            "ItemId":"a100",
            "price": 200
            },
            {
            "ItemId":"a110",
            "price": 200  
            }
          ],
          "Subscriber": true,
          "Payment": {
            "Type": "Credit-Card",
            "Total": 400,
            "Success": true
          }
        },
        {
            "Id": 103,
            "Name": "Dylan",
            "TransactionId": "tran4",
          "Transaction": [
            {
            "ItemId":"a100",
            "price": 200
            },
            {
            "ItemId":"a110",
            "price": 200  
            }
          ],
          "Subscriber": true,
          "Payment": null,
           "Note": "Payment is Null"
        }
        ]
);

db.getCollection('transactions')
  .find(
    {
      "Name":"Tom"
    }
   );

db.getCollection('transactions')
   .find(
     {
       "Payment.Total":400
     }
    );

db.getCollection('transactions')
  .find(
    {
      "Note":null
    }
   );


   