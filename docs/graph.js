$.getJSON("https://github.com/Louis-Lcq/testGitHubAPI/blob/master/docs/assets/data/gama.json", function(data) {
   var labels = [Date()]
   });
   var data = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400,2500]

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
