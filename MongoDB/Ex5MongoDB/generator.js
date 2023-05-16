use('javierlm');

db.getCollection('orders').drop();
db.createCollection('orders');

db.getCollection('orders').insertMany([{
    "order": "o1",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 40,
        "currency": "NOK"
    },
    "items": [{
        "product": "p1",
        "colours": ["blue", "black"],
        "quantity": 15
    }],
    "delivery_days": 5
},
{
    "order": "o2",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 15,
        "currency": "EUR"
    },
    "items": [{
            "product": "p2",
            "colours": ["white"],
            "quantity": 4
        },
        {
            "product": "p3",
            "colours": ["white", "black"],
            "quantity": 1
        }
    ],
    "delivery_days": 4
},
{
    "order": "o3",
    "year": 2020,
    "paid": "N",
    "cost": {
        "price": 35,
        "currency": "EUR"
    },
    "items": [{
        "product": "p3",
        "colours": ["blue", "black"],
        "quantity": 4
    }],
    "delivery_days": 4
},
{
    "order": "o4",
    "year": 2019,
    "paid": "Y",
    "cost": {
        "price": 18,
        "currency": "NOK"
    },
    "items": [{
            "product": "p2",
            "colours": ["pink", "black"],
            "quantity": 14
        },
        {
            "product": "p4",
            "colours": ["white"],
            "quantity": 1
        }
    ],
    "delivery_days": 2
},
{
    "order": "o5",
    "year": 2022,
    "paid": "Y",
    "cost": {
        "price": 25,
        "currency": "NOK"
    },
    "items": [{
        "product": "p1",
        "quantity": 15
    }],
    "delivery_days": 3
}
]);