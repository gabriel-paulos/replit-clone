"use client"

import React from 'react';
import { useState, useEffect } from "react"; // useEffect will be used to update when I have real data

interface Card {

    id: number,
    title: string,
    lastUpdated: string,
}

const CardBoard = () => {

    const [state, setState] = useState<Card[]>([]);

    // TODO: fetch actual data from database

    const dummyData = [

        {id: 1, title: "Project 1", lastUpdated: "5 minutes ago"},
        {id: 2, title: "Project 2", lastUpdated: "10 minutes ago"},
        {id: 3, title: "Project 3", lastUpdated: "15 minutes ago"},
        {id: 4, title: "Project 4", lastUpdated: "29 minutes ago"},
        {id: 5, title: "Project 5", lastUpdated: "45 minutes ago"},
    
    ]

    const toggleData = () => {

        if(state.length === 0){
            setState(dummyData);
        
        } else {
            setState([]);
        }
    };

    return(
        
        // TODO: Instead of toggle it will be repurposed into a new project --> then modal

        <div className='container mx-auto p-4 justify-start h-full'>
            <button onClick={toggleData} className='bg-blue-600 text-white-600 font-bold p-2 rounded mb-4'>
                Toggle Data
            </button>

            {state.length === 0 ? (

                    <div className="min-h-60 h-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                        <svg className="size-10 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" x2="2" y1="12" y2="12"></line>
                        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        <line x1="6" x2="6.01" y1="16" y2="16"></line>
                        <line x1="10" x2="10.01" y1="16" y2="16"></line>
                        </svg>
                        <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300">
                        No data to show
                        </p>
                    </div>
                    </div>

                ) : (

                    <div className="grid grid-cols-4 gap-4">

                        {state.map((item) => (
                            <div key={item.id} className="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                            <div className="p-4 md:p-5">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {item.title}
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                {item.lastUpdated}
                                </p>
                                <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                                Card link
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                </a>
                            </div>
                            </div>

                                    ))}

                                </div>

                                )}

        </div>

       

    );

};

export { CardBoard }