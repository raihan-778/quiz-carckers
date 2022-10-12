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
  ComposedChart,
  Line,
  Scatter,
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
    <div className="bg-violet-300 border rounded-md">
      <h2>This is The statistics Of All Topic Question</h2>
      <ResponsiveContainer height={600} width="50%">
        <BarChart width={150} height={250} data={info}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="question" />
          <Tooltip />
          <Legend />
          <Bar dataKey="question" fill="#251B37" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
