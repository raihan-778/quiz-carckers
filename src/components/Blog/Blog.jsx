import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className=" border rounded-md bg-gradient-to-r from-lime-900 to-blue-900 bg-no-repeat bg-center bg-cover ">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            what is the purpose of react router?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-200 dark:text-gray-200">
              React Router, and dynamic, client-side routing, allows us to build
              a single-page web application with navigation without the page
              refreshing as the user navigates. React Router uses component
              structure to call components, which display the appropriate
              information. <br />
            </p>
            <p className="text-gray-200 dark:text-gray-200">
              By preventing a page refresh, and using Router or Link, which is
              explained in more depth below, the flash of a white screen or
              blank page is prevented. This is one increasingly common way of
              having a more seamless user experience. React router also allows
              the user to utilize browser functionality like the back button and
              the refresh page while maintaining the correct view of the
              application.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does Context Api Works?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-200 dark:text-gray-200">
              Despite React’s popularity, one of the biggest obstacles
              developers face when working with the library is components
              re-rendering excessively, slowing down performance and harming
              readability. Component re-rendering is especially damaging when
              developers need components to communicate with each other in a
              process known as prop drilling.
            </p>
            <p className="text-gray-200 dark:text-gray-200">
              The new React Context API, introduced with React v.16.3, allows us
              to pass data through our component trees, giving our components
              the ability to communicate and share data at different levels.we
              can use React Context to avoid prop drilling.
              <br />
              According to the React docs, Context provides a way to pass data
              through the component tree from parent to child components,
              without having to pass props down manually at each level. Each
              component in Context is context-aware. Essentially, instead of
              passing props down through every single component on the tree, the
              components in need of a prop can simply ask for it, without
              needing intermediary helper components that only help relay the
              prop.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is useRef ?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-200 dark:text-gray-200">
              The useRef Hook is a function that returns a mutable ref object
              whose .current property is initialized with the passed argument
              (initialValue). The returned object will persist for the full
              lifetime of the component.
            </p>
            <p className="mb-2 text-gray-200 dark:text-gray-200">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
              <br />
              There are two main uses of useRef. Accessing the DOM nodes or
              React elements and keeping a mutable variable.
            </p>
            <p className="mb-2 text-gray-200 dark:text-gray-200">
              When working with class-based components in the past, we used
              createRef() to create a ref. However, now that React recommends
              functional components, and general practice is to follow the Hooks
              way of doing things, we don’t need to use createRef(). Instead, we
              use useRef(null) to create refs in functional components.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
