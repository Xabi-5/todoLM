use('javierlm');

db.getCollection('dance').drop();
db.createCollection('dance');

db.getCollection('dance').insertMany(
  [
        {
          "name": "Tango",
          "price": 27,
          "places": 20,
          "start_date": "1/01/2022",
          "end_date": "1/12/2022",
          "teacher": "Roberto Garcia",
          "hall": 1
        },
        {
          "name": "Cha-cha-cha",
          "price": 80,
          "places": 18,
          "start_date": "1/07/2022",
          "end_date": "1/10/2022",
          "teacher": "Miriam Gutiérrez",
          "hall": 1
        },
        {
          "name": "Rock",
          "price": 30,
          "places": 15,
          "start_date": "1/01/2022",
          "end_date": "1/12/2022",
          "teacher": "Laura Mendiola",
          "hall": 1
        },
        {
          "name": "Merengue",
          "price": 75,
          "places": 12,
          "start_date": "1/01/2022",
          "end_date": "1/12/2022",
          "teacher": "Jesús Lozano",
          "hall": 2
        },
        {
          "name": "Salsa",
          "price": 32,
          "places": 10,
          "start_date": "1/01/2022",
          "end_date": "1/12/2022",
          "teacher": "Jesús Lozano",
          "hall": 2
        },
        {
          "name": "Pasodoble",
          "price": 3200,
          "places": 8,
          "start_date": "1/01/2022",
          "end_date": "1/12/2022",
          "teacher": "Miriam Gutierrez",
          "hall": 2
        }
      ]
);

db.getCollection('dance').find(
    {}
);

db.getCollection('dance').find(
  {"price" : {$gt:20}}
);

db.getCollection('dance').find().sort()

db.getCollection('dance').find(
  {"name" : "Pasodoble"}
);