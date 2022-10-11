import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Cards";
import Header from "../Header/Header";

// const quizTopix = "https://openapi.programming-hero.com/api/quiz";
// const TopicsDetails = "https://openapi.programming-hero.com/api/quiz/${id}";

const Home = () => {
  const quizsData = useLoaderData();
  console.log(quizsData);
  return (
    <div>
      <Header></Header>
      <section className=" mt-3 grid gap-3  sm:flex-col sm:mx-auto md:grid-cols-2 lg:grid-cols-2 lg:mx-auto ">
        {quizsData.data.map((quizData) => (
          <Card quizData={quizData}></Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
