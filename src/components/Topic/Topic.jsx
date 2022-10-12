import React from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Topic = ({ topicData }) => {
  const { logo, name, total, id } = topicData;
  return (
    <div>
      <div className="max-w-sm mx-auto card">
        <Card>
          <img className="bg-blue-900 broder rounded-md" src={logo} alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Total Quiz: {total}
          </p>
          <div className="mx-auto">
            <Link to={`/quiz/${id}`}>
              <Button>
                Start Quiz
                <svg
                  className="ml-2 -mr-1 h-4  w-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Topic;
