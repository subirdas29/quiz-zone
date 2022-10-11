import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Statistics = () => {
    const [total, setTotal] = useState([])
    useEffect(() =>
    {
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data=>

            {
                const totalLoaded = data.data.data;
                const totalData =totalLoaded.map(
                    totalQz =>
                    {
                        const totalQuiz= {
                            name:totalQz.name,
                            total:totalQz.total
                        }
                        return totalQuiz;
                    })
                    setTotal(totalData)
            })
        },[])

    return (
        <div className='m-32'>
        <LineChart  width={800} height={600} data={total}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        </LineChart>
    </div>
);
};



export default Statistics;
