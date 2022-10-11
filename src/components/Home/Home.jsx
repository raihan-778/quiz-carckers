import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";

// const quizTopix = "https://openapi.programming-hero.com/api/quiz";
// const TopicsDetails = "https://openapi.programming-hero.com/api/quiz/${id}";

const Home = () => {
  const subjectsData = useLoaderData();
  // console.log(subjectsData);
  return (
    <div>
      <Header></Header>
      <section className=" mt-3 grid gap-3  sm:flex-col sm:mx-auto md:grid-cols-2 lg:grid-cols-2 lg:mx-auto ">
        {subjectsData?.data?.map((topic) => (
          <Quiz key={topic.id} topic={topic}></Quiz>
        ))}
      </section>
    </div>
  );
};

export default Home;
