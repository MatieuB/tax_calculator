module.exports = {

   calcTax: function(num) {
     var tax = 0;
     if(num > 0 && num <= 10) {
       tax = (num * 0.1);
       return Number(tax.toFixed(2));
      }
     if (num > 10 && num <= 20) {
       tax = 1 + ((num-10) * 0.07);
       return Number(tax.toFixed(2));
      }
     if (num > 20 && num <= 30) {
       tax = 1.7 + ((num-20) * 0.05);
       return Number(tax.toFixed(2));
      }
     if (num > 30) {
       tax = 2.2 + ((num-30) * 0.03);
       return Number(tax.toFixed(2));
      }
     if(num < 0) {
       return "Looks more like a refund to me.";
      }
    }

  };
