/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between  dark:bg-gray-800 dark:border-gray-600">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start"></div>
            <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
              Copyright &copy; {date}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
