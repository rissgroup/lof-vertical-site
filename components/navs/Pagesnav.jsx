/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../public/assets/logo.png";
import Link from 'next/link'

import Image from "next/image";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "LOF platform", href: "#", current: false },
  { name: "Become a creator", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" >
          {({ open }) => (
            <>
              <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center h-16 for-nav ">
                  <div className="flex items-center basis-4/5 md:basis-2/5">
                    <div className="flex-shrink-0 block md:hidden">
                      <Image className="w-8 h-8" src={Logo} alt="Workflow" width={100} height={50}  />
                    </div>
                    <div className="hidden md:block ">
                      <div className="flex items-baseline space-x-3 ">
                        {navigation.map((item) => (
                          <Link  href={item.href} >
                          
                          <a
                            key={item.name}
                            // href={item.href}
                            className={classNames(
                              item.current
                                ? " text-white nav-link"
                                : "text-white  ",
                              "px-3 py-2 rounded-md text-sm font-medium hind glow"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center hidden mx-auto mt-4 md:block">
                    <div className="flex-shrink-0 ">
                      <Image className="" src={Logo} alt="Workflow" width={85} height={40}  />
                    </div>
                  </div>
                  <div className="hidden text-white md:block basis-2/5">
                    <div className="flex items-center justify-end gap-4 ml-4 md:ml-6">
                      <button className="px-5 py-2 text-sm font-medium rounded-md sign-up hind glow">Sign up</button>
                      {/* <button className="px-5 py-2 text-xs font-medium border-2 rounded-md pink-color sign-in hind">Sign in</button> */}


<button className="px-5 py-2 text-sm font-medium rounded-md button button--moema button--text-upper">Sign in</button>


                     
                      
                      
                      
                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 `rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? ( 
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className=" md:hidden mbl-nav-bg">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-white"
                          : "text-gray-300  hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-0 text-white border-t border-gray-700 pb-7">
                  <button className="px-5 py-5 mt-2 text-sm font-medium rounded-md "  >Sign up</button>
                  <button className="px-5 py-2 text-sm font-medium rounded-md button--moema button--text-upper">Sign in</button>
                  {/* <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}
        {/* <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
            </div>
            
          </div>
        </main> */}
      </div>
    </>
  );
}
