use('javierlm');

db.getCollection('orders').find({"year":2022},{"order":1,"year":1,"delivery_days":1,"_id":0});