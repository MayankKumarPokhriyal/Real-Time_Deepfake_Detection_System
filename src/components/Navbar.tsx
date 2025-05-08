import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, BarChart2, History, HelpCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">DeepGuard</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-200`
                }
              >
                Detection
              </NavLink>
              <NavLink 
                to="/comparison" 
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-200`
                }
              >
                Model Comparison
              </NavLink>
              <NavLink 
                to="/history" 
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-200`
                }
              >
                History
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-200`
                }
              >
                About
              </NavLink>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Detection</span>
            </div>
          </NavLink>
          <NavLink 
            to="/comparison" 
            className={({isActive}) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5" />
              <span>Model Comparison</span>
            </div>
          </NavLink>
          <NavLink 
            to="/history" 
            className={({isActive}) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-2">
              <History className="h-5 w-5" />
              <span>History</span>
            </div>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <span>About</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;