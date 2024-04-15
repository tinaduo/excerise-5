import {Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(158, 128, 241, 1)'

                },
                {
                    label: 'data 2',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(220, 119, 85, 1)'

                },
                    {
                    label: 'data 3',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgba(246, 198, 92, 1)',
                    backgroundColor: 'rgba(246, 198, 92, 1)'

                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: "true",
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOptions}/>
        </>
    )
}