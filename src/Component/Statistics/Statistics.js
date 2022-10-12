import React, { useEffect, useState,PureComponent} from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
        {/* <LineChart  width="80%" height={800} data={total}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        </LineChart> */}

        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={total}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>


    </div>
);
};



export default Statistics;
