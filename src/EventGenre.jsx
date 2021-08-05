/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, ResponsiveContainer,
} from 'recharts';

export default function EventGenre({ events }) {
  const [data, setData] = useState([]);
  // const colors = ['#65A498', '#3D314A', '#684756', '#96705B', '#AB8476'];

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const number = events.filter((event) => event.summary.includes(genre)).length;
      return { genre, number };
    });
    return data;
  };

  useEffect(() => {
    setData(() => getData());
  }, [events, getData]);

  return (
    <ResponsiveContainer height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="number"
          // eslint-disable-next-line consistent-return
          label={({ genre, percent }) => {
            if (percent > 0) {
              return `${(percent * 100).toFixed(0)}% ${genre}`;
            }
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
