// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(driver => driver.revenue > num);
};

function driverNamesWithRevenueOver(collection, num){
  return collection.map(function (driver){ if (driver.revenue > num) { return driver.name } } );
};
