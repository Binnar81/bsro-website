import React from 'react';
import gslv from './Img/GSLV_MkIII.png';
import pslv from './Img/pslv2.png';
import sslv from './Img/sslv2.png';

const RocketSection = () => {
  return (
    <>
       <section id="rockets" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li
          className="flex w-4/2 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={gslv} alt="GSLV MKIII" className="mb-6 w-full" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            GSLV MKIII
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $2000000
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            High Payload Capacity Rocket
          </p>
        </li>
        <li
          className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={pslv} alt="Adventurer" className="mb-6 w-full" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            PSLV
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $1000000
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Medium Payload Capacity Rocket
          </p>
        </li> 
        <li
          className="flex w-1/4 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src={sslv} alt="Infinity" className="mb-6 w-full h-1/6" />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            SSLV
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $500000
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Small Payload Capacity Rocket
          </p>
        </li>
      </ul>
    </section>
    </>
  )
}

export default RocketSection
