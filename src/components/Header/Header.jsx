import { Avatar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="  mt-5 py-5 pl-4 border rounded-md h-40 bg-emerald-900 bg-no-repeat bg-center bg-cover ">
        <Avatar
          img="https://cdn.pixabay.com/photo/2015/02/18/12/33/computer-640651_960_720.jpg"
          rounded={true}
        >
          <div className="py-3 text-1xl text-teal-200 space-y-1 font-medium dark:text-white">
            <h2 pt-4 pb-3>
              This is a Simple Quiz Explorer App. Let's have some fun with
              making some question & answer about our web development journey.
              <br />
              We have selected four topics for quiz.Let's judge your self. Good
              Luck!
            </h2>
          </div>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
