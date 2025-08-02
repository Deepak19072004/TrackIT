import React from 'react'
import {Bar,BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,Cell} from 'recharts';

export const CustomBarChart = ({data}) => {

    const getBarColor = (entry) => {
        switch (entry?.priority) {
            case 'Low':
                return '#00BC7D'
            case 'Medium':
                return '#FE9900'
            case 'High':
                return '#FF1557'
            default:
                return '#00BC7D'
        }
    }
    return (
        <div className='bg-white mt-6'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid stroke='none' />

                    <XAxis dataKey="priority"
                    tick={{fontSize:12, fill: "#555"}}
                    stroke="none"
                    />

                    <YAxis 
                    tick={{fontSize:12, fill: "#555"}}
                    stroke="none"
                    />

                    <Tooltip cursor={{ fill: "transparent"}} />

                    <Bar
                        dataKey="count"
                        nameKey="priority"
                        fill="#FF8042"
                        radius={[10,10,0,0]}
                        activeDot={{r:8,fill:"yellow"}}
                        activeStyle={{fill:"green"}}
                    >
                        {data.map((entry,index) => (
                            <Cell key={index} fill={getBarColor(entry)} />
                        ))}
                    </Bar> 
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
