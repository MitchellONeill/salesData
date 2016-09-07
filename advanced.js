var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, salesTaxRates) {
  var totals = {};
  var salesSum = 0;
  var taxRate = 0;
  for (idx in salesData) {
    salesSum = salesData[idx].sales.reduce((a, b) => a + b, 0);
    taxRate = salesTaxRates[salesData[idx].province];
    var compName = salesData[idx].name;
    if (totals[compName] === undefined) {
      totals[compName] = {};
      totals[compName].totalSales = salesSum;
      totals[compName].totalTax = salesSum * taxRate;
    } else {
      totals[compName].totalSales += salesSum;
      totals[compName].totalTax += salesSum * taxRate;
    }
  }
  return totals;
  }


calculateSalesTax(companySalesData, taxRates);