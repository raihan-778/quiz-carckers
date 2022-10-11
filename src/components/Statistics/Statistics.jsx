import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  console.log(data);

  const info = data.data;
  const quizInfo = info.map((topic) => {
    const topicName = topic.name;
    const topicQuestions = topic.total;
    const singleTopic = {
      name: topicName,
      questions: topicQuestions,
    };
    return singleTopic;
  });
  console.log(quizInfo);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
