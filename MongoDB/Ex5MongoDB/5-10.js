use('javierlm');

db.getCollection('orders').find({},{"order":1, "year":1,"_id":0});