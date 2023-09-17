import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from '../media/logo.png'

const Nav = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
  return (
    <nav className="navbar">
            <div>
              <img
                src={logo}
                className="logo rounded-md shadow-sm"
                />
            </div>
            <ul className="max-lg:hidden" >
              <li>
                <Link className="" to='/'>Home</Link>
              </li>
              <li>
                <Link className="" to='/courses'>Courses</Link>
              </li>
              <li>
                <Link className="" to='/contact'>Contact us</Link>
              </li>
              <li>
                <Link className="" to='/about'>About us</Link>
              </li>
            </ul>
            <div className="max-lg:block hidden" >
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 92 92" id="menu"><path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"></path></svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 z-40">
            <ul>
              <li><Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Home           
                </Link>
              )}
            </Menu.Item></li>
            <li><Menu.Item>
              {({ active }) => (
                <Link
                  to="/courses"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Courses
                </Link>
              )}
            </Menu.Item></li>
            <li><Menu.Item>
              {({ active }) => (
                <Link
                  href="about"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About Us
                </Link>
              )}
            </Menu.Item></li>
            <li><Menu.Item>
              {({ active }) => (
                <Link
                  href="contact"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Contact Us
                </Link>
              )}
            </Menu.Item></li>
            </ul>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            </div>
            
          </nav>
  )
}

export default Nav
