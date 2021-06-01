$.getJSON("https://github.com/Louis-Lcq/testGitHubAPI/blob/master/docs/assets/data/gama.json", function(data) {
   var labels = data.customers[0].amounts.map(function(e) {
      return e[0];
   });
   var data = data.customers[0].amounts.map(function(e) {
      return e[1];
   });

   var ctx = document.getElementById('myChart').getContext('2d');
   var chart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: labels,
         datasets: [{
            borderColor: 'red',
            data: data
         }]
      },
      options: {
         responsive: 'true',
      }
   });
});
