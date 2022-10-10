import { Avatar } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div>
      <Avatar
        img="https://cdn.pixabay.com/photo/2015/02/18/12/33/computer-640651_960_720.jpg"
        rounded={true}
      >
        <div className="space-y-1 font-medium dark:text-white">
          <div>Raihan Uddin</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <h2>
              This is a Simple Quiz Explorer App. Let's have some fun with
              making some question & answer about our web development journey.
            </h2>
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default Header;
