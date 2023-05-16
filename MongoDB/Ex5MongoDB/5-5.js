use('javierlm');

db.getCollection('orders').find({
   "cost.currency":"NOK"
}
);