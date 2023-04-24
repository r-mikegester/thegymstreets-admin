<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <canvas id="myChart" width="400" height="200" >
    <p>Hello Fallback World</p>
</canvas>
 
</div>
</template>
<script>
import Chart from 'chart.js/auto';
import backend from '../config/axios'
 export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    async mounted(){
        const result = await backend.get('/v1/admin/analytics')
        console.log(result)
        console.log("component mounted.")
        const ctx = document.getElementById('myChart');
        Chart.defaults.color = '#fff';
     const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: result.data.data.labels,
                datasets: [{
                    label: 'No. of Clients Each Month',
                    data: result.data.data.clientValues,
                    backgroundColor: 'rgba(255, 238, 0, 0.50)',
                    borderColor: 'rgba(255, 238, 0, 100)',
                    color:'#000',
                    borderWidth: 3,
                    fill: true,
                    borderJoinStyle: 'round',
                    pointBorderWidth: 0.1, 
                    tension: 0.5,
                    
                },
                {
                    label: 'No. of Subscriptions Each Month',
                    data: result.data.data.subscriptionValues,
                    backgroundColor: 'rgba(255, 255, 255, 0.60)',
                    borderColor: '#ffffff',
                    color:'#fff',
                    borderWidth: 3,
                    borderJoinStyle: 'round',
                    fill: 'origin',
                    pointBorderWidth: 0.1,                    
                    tension: 0.5,
                    
                },
            ]
                
            },

            options: {
                scale: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        myChart;


    }
 }
</script>