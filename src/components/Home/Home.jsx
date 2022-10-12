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
    <div className=" bg-[url('https://img.freepik.com/free-vector/gradient-abstract-background-design_52683-70291.jpg?w=740&t=st=1665554159~exp=1665554759~hmac=b1d4d08329683e252bc6300e3e0600ac82a0d71b713ba2d91d1ccf4c4587becf')] border rounded-md bg-emerald-900 bg-no-repeat bg-center bg-cover ">
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
