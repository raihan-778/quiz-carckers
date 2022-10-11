import React, { useEffect, useState } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Statistics = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/quiz`)
      .then((res) => res.json())
      .then((data) => {
        const topicsData = data.data;
        const topicDetail = topicsData.map((topic) => {
          const name = topic.name;
          const question = topic.total;
          const singleTopic = {
            name: name,
            question: question,
          };
          return singleTopic;
        });
        console.log(topicDetail);
        setInfo(topicDetail);
        console.log(info);
      });
  }, []);

  return (
    <div className="bg-cyan-100">
      <h2>This is statistics</h2>

      <BarChart width={730} height={250} data={info}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="question" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Statistics;
