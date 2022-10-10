import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2641/2641457.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Quiz with Fun & <br />
            <small>Explore Web Apps</small>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active bg-lime-800 text-lime-50 p-1 border rounded-md"
                : undefined
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active  bg-lime-800 text-lime-50 p-1 border rounded-md"
                : undefined
            }
            to="/subjects"
          >
            Subjects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active  bg-lime-800 text-lime-50 p-1 border rounded-md"
                : undefined
            }
            to="/quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active  bg-lime-800 text-lime-50 p-1 border rounded-md"
                : undefined
            }
            to="/statistics"
          >
            Statiscis
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active  bg-lime-800 text-lime-50 p-1 border rounded-md"
                : undefined
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
