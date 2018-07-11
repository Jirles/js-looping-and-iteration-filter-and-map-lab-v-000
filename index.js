// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(driver => driver.revenue > num);
};

function driverNamesWithRevenueOver(collection, num){
  const drivers = collection.filter(function (driver){ if (driver.revenue > num) {return driver.name } } );
  return drivers.map(driver => driver.name);
};

function exactMatch(collection, attr_hash){
  const key = attr_hash.keys()[0]
};
