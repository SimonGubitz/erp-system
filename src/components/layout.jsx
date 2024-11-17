import { Github } from 'lucide-react';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-wrapper bg-black overflow-hidden">
      <header className="flex flex-row justify-between items-center text-white px-8 py-2">
        <h1>Ausbildungsbeispiel ERP-System</h1>

        <a href="./create-custom-data"><button className="text-xs px-4 py-2 rounded border border-solid border-white hover:text-sky-700 hover:border-sky-700 p-2">Create your own Data</button></a>
      </header>
      <main className="h-screen">
        <Outlet /> {/* This will render the nested route content */}
      </main>
      <footer className="flex flex-row justify-around items-center max-h-max">
        <div className="flex flex-row justify-center">
          <Github size={20} />
          Github Repo for this Project
          </div>
      </footer>
    </div>
  );
};

export default Layout;
