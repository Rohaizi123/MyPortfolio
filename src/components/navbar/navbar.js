import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-lg">Rohaizi Mohamed</div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a
                    className={
                      currentPath === "/"
                        ? "text-white font-bold hover:bg-gray-700 px-3 py-2 bg-gray-700 rounded-md text-sm"
                        : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link href="/experience">
                  <a
                    className={
                      currentPath === "/experience"
                        ? "text-white font-bold hover:bg-gray-700 px-3 py-2 bg-gray-700 rounded-md text-sm "
                        : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Experience
                  </a>
                </Link>
                <Link href="/skill">
                  <a
                    className={
                      currentPath === "/skill"
                        ? "text-white font-bold hover:bg-gray-700 px-3 py-2 bg-gray-700 rounded-md text-sm"
                        : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Skills
                  </a>
                </Link>
                <Link href="/project">
                  <a
                    className={
                      currentPath === "/project"
                        ? "text-white font-bold hover:bg-gray-700 px-3 py-2 bg-gray-700 rounded-md text-sm"
                        : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Projects
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className={
                      currentPath === "/contact"
                        ? "text-white font-bold hover:bg-gray-700 px-3 py-2 bg-gray-700 rounded-md text-sm"
                        : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a
                className={
                  currentPath === "/"
                    ? "hover:bg-gray-700 text-white block px-3 py-2 bg-gray-700 rounded-md text-base font-medium"
                    : "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/experience">
              <a
                className={
                  currentPath === "/experience"
                    ? "hover:bg-gray-700 text-white block px-3 py-2 bg-gray-700 rounded-md text-base font-medium"
                    : "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Experience
              </a>
            </Link>
            <Link href="/skill">
              <a
                className={
                  currentPath === "/skill"
                    ? "hover:bg-gray-700 text-white block px-3 py-2 bg-gray-700 rounded-md text-base font-medium"
                    : "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Skills
              </a>
            </Link>
            <Link href="/project">
              <a
                className={
                  currentPath === "/project"
                    ? "hover:bg-gray-700 text-white block px-3 py-2 bg-gray-700 rounded-md text-base font-medium"
                    : "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  currentPath === "/contact"
                    ? "hover:bg-gray-700 text-white block px-3 py-2 bg-gray-700 rounded-md text-base font-medium"
                    : "hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
