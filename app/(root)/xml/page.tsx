import React from "react";
import HeaderBox from "@/components/HeaderBox";
import XmlForm from "@/components/XmlForm";

const Settings = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox />
        </header>
        <main className="flex space-x-4">
          <XmlForm />
        </main>
      </div>
    </section>
  );
};

export default Settings;
