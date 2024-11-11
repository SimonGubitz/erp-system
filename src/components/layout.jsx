import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-wrapper bg-black w-screen overflow-hidden">
      <header className="flex flex-row justify-between text-white text-xs px-8">
        <h1>My App Header</h1>

        <a href="./create-custom-data"><button className="p-4 rounded border border-solid border-white hover:text-sky-700 hover:border-sky-700 p-2">Create your own Data</button></a>
      </header>
      <main>
        <Outlet /> {/* This will render the nested route content */}
      </main>
      <footer>
        {/* Footer can go here */}
      </footer>
    </div>
  );
};

export default Layout;
