import { useState } from "react";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="bg-gray-900">
      <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul class="flex items-center hidden space-x-8 lg:flex">
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-green-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="currentColor"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>

            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100">
              Kanban Board Task Management
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
          </ul>
        </div>
      </div>
    </div >
  );
};