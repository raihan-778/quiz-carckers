import React from "react";
import Quiz from "../Quiz/Quiz";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const data = useLoaderData();
  console.log(data);
  const info = data.data;
  return (
    <div className=" border rounded-md bg-emerald-900 bg-no-repeat bg-center bg-cover ">
      <section className=" mt-3 grid gap-3  sm:flex-col sm:mx-auto md:grid-cols-2  lg:grid-cols-2 mx-auto">
        {info.map((topicData) => (
          <Topic key={topicData.id} topicData={topicData}></Topic>
        ))}
      </section>
    </div>
  );
};

export default Topics;
