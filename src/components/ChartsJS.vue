<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <canvas id="myChart" width="400" height="200">
            <p>Hello Fallback World</p>
        </canvas>

    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Chart from 'chart.js/auto';
import backend from '../config/axios'
export default defineComponent({

    name: "HelloWorld",
    props: {
        msg: String
    },
    

    async mounted() {
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
                    borderColor: 'rgb(203, 255, 0,  0.75)',
                    color: '#000',
                    borderWidth: 5,
                    fill: true,
                    borderJoinStyle: 'round',
                    pointBorderWidth: 0,
                    tension: 0.5,
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 600);

                        gradient.addColorStop(0, 'rgb(203, 255, 0,  0.20)');
                        gradient.addColorStop(1, 'rgb(255, 199, 0,  0.75)');
            

                        return gradient;
                    },

                },
                {
                    label: 'No. of Subscriptions Each Month',
                    data: result.data.data.subscriptionValues,
                    borderColor: 'rgb(0, 255, 131,100)',
                    color: '#fff',
                    borderWidth: 5,
                    borderJoinStyle: 'round',
                    fill: true,
                    pointBorderWidth: 0,
                    tension: 0.5,
                    backgroundColor: (ctx) => {
                        const canvas = ctx.chart.ctx;
                        const gradient = canvas.createLinearGradient(0, 0, 0, 800);

                        gradient.addColorStop(1, 'rgb(0, 157, 255, 0.20)');
                        gradient.addColorStop(0, 'rgb(0, 255, 131, 0.75)');
            

                        return gradient;
                    },
                },
                ],

            },

            options: {
                responsive: true,
                scales: {
                    x: {
                        grid: {
                            display: false,
                            
                           
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                    }
                }
            }
        });
        myChart;


    }
});
</script>