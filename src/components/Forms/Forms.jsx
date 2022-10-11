import React from "react";
import { Label, Radio } from "flowbite-react";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";

const Forms = ({ qstn }) => {
  const { correctAnswer, id, options, question } = qstn;

  const correct = correctAnswer;
  const handleRightAns = () => {};

  console.log(question);
  return (
    <div className="border-2 rounded-md bg-gray-300 m-3 w-3/4 mx-auto">
      <fieldset className="flex flex-col gap-4 " id="radio">
        <legend className="p-2 bg-teal-700 text-slate-100 border-2 rounded-md">
          <h2>{question} ?</h2>
        </legend>
        <EyeIcon
          onClick={handleRightAns}
          className="h-6 w-6 text-amber-900"
        ></EyeIcon>
        <div className="text-center mx-auto">
          <div className="flex items-center gap-2 p-2 border-solid border-2 border-indigo-600 bg-lime rounded-md m-2 ">
            <Radio
              id={options[0]}
              name="name"
              value="value"
              defaultChecked={false}
            />
            <Label htmlFor="united-state">{options[0]}</Label>
          </div>
          <div className="flex items-center gap-2 p-2 border-solid border-2 border-indigo-600 bg-lime rounded-md m-2 ">
            <Radio
              id={options[1]}
              name="name"
              value="value"
              defaultChecked={false}
            />
            <Label htmlFor="united-state"> {options[1]}</Label>
          </div>
          <div className="flex items-center gap-2 p-2 border-solid border-2 border-indigo-600 bg-lime rounded-md m-2  ">
            <Radio
              id={options[2]}
              name="name"
              value="value"
              defaultChecked={false}
            />
            <Label htmlFor="united-state">{options[2]}</Label>
          </div>
          <div className="flex items-center gap-2 p-2 border-solid border-2 border-indigo-600 bg-lime rounded-md m-2 ">
            <Radio
              id={options[3]}
              name="name"
              value="value"
              defaultChecked={false}
            />
            <Label htmlFor="united-state">{options[3]}</Label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Forms;
