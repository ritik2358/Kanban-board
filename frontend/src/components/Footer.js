import React from 'react';

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-900">
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex flex-col justify-between pt-5 pb-5 sm:flex-row">
                    <p className="text-sm text-white">
                        © Copyright 2023 Kanban Board. All rights reserved.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a
                            href="https://www.linkedin.com/in/rits2358/"
                            className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 448 512" fill="currentColor" className="h-5">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.2V447.8C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.2V64.2C448 46.5 433.7 32 416 32zM135.1 384H69V197.3h66.1V384zm-33.1-232c-23.1 0-41.8-18.7-41.8-41.8 0-23.1 18.7-41.8 41.8-41.8 23.1 0 41.8 18.7 41.8 41.8 0 23.1-18.7 41.8-41.8 41.8zM384 384h-66.1V288c0-24.9-8.9-41.9-31.2-41.9-17 0-27.1 11.7-31.6 23-1.6 4-2 9.5-2 15v98.9H184V197.3h60.2v20.8h.8c8.4-16 29-33 59.6-33 63.6 0 75.4 41.9 75.4 96.2V384z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/ritik2358"
                            className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 16 16" fill="currentColor" className="h-6">
                                <path
                                    fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="mailto:ritikraj2909@gmail.com"
                            className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path
                                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h20c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z M22,4l-8,7l-8-7H22z M2,20V7.483l7.452,6.446 C9.634,13.972,10.316,14,11,14c0.655,0,1.306-0.102,1.919-0.302l6.062-5.257L22,7.483V20H2z M1.727,6L12,14.018 L22.273,6H1.727z"
                                ></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};
