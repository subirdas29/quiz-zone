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
                
                const quesTotal= data.map(total=> {
                    const quizTotal =
                    {
                        total:{total},
                    } 
                    return quizTotal;

            })
            setTotal(quesTotal)
    return (
        <div>
        <BarChart
      width={600}
      height={300}
      data={total}
     
    >
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="total" />
      <YAxis />
      <Tooltip />
    </BarChart>
    </div>
    );
};

export default Statistics;
