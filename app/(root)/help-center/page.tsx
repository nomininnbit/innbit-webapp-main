import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import FaqPage from '@/components/FaqPage'
import SupportTicketsPage from '@/components/SupportTicketsPage'
import SearchBar from "@/components/SearchBar";

const helpCenter = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox />
        </header>
        <main className="flex-col space-x-4">
          <div className="relative">
            <div className="flex flex-col items-center justify-center">
              <div className="mt-4 mb-4 text-center text-5xl">
                Knowledge Base
              </div>
            </div>
            <p className="mb-9 text-center text-base font-semibold">
              Search instant answers & questions asked by popular users
            </p>
            <div>
              <SearchBar />
            </div>
          </div>
        </main>

        <FaqPage />
        <div className="panel mt-10 text-center md:mt-20">
          <h3 className="mb-2 text-xl font-bold dark:text-white md:text-2xl">
            Still need help?
          </h3>
          <div className="text-lg font-medium text-white-dark">
            Our specialists are always happy to help. Contact us during standard
            business hours or email us24/7 and we&apos;ll get back to you.
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button type="button" className="btn btn-primary">
              Contact Us
            </button>
            <button type="button" className="btn btn-primary">
              Visit our community
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-5 rounded-md bg-gradient-to-tl from-[rgba(234,241,255,0.44)] to-[rgba(234,241,255,0.96)] px-6 py-2.5 dark:from-[rgba(14,23,38,0.44)] dark:to-[#0E1726] md:flex-row lg:mt-20 xl:px-16">
          <div className="flex-1 py-3.5 text-center md:text-start">
            <h3 className="mb-2 text-xl font-bold dark:text-white md:text-2xl">
              Didn’t find any solutions?
            </h3>
            <div className="text-lg font-medium text-white-dark">
              Loaded with awesome features like documentation, knowledge base
              forum, retailers etc.
            </div>
            <div className="mt-8 flex justify-center md:justify-start lg:mt-16">
              <button type="button" className="btn btn-primary">
                Raise support tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default helpCenter