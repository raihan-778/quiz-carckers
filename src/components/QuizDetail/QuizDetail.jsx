import React from "react";
import { useLoaderData } from "react-router-dom";
import { Label, Radio } from "flowbite-react";
import Forms from "../Forms/Forms";

const QuizDetail = () => {
  const quiz = useLoaderData();

  const { name, logo, questions } = quiz.data;

  return (
    <div className="">
      <div className="topic-info flex justify-center">
        <h2>
          Topic Name: <span className="text-3xl">{name}</span>
        </h2>
        <img
          className="w-12 ml-3 border rounded-md bg-slate-800"
          src={logo}
          alt=""
        />
      </div>
      {questions.map((qstn) => (
        <Forms key={qstn.id} qstn={qstn}></Forms>
      ))}
    </div>
  );
};

export default QuizDetail;
