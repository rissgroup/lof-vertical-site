/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../public/assets/logo.png";

import Image from "next/image";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#Home", current: true },
  { name: "LOF platform", href: "#lof-slider", current: false },
  { name: "Become a creator", href: "#become", current: false },
  { name: "FAQ", href: "#faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="top-nav">
          {({ open }) => (
            <>
              <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center  h-16 for-nav ">
                  <div className="flex items-center basis-4/5 md:basis-2/5">
                    <div className="flex-shrink-0 block md:hidden">
                      <Image className="h-8 w-8" src={Logo} alt="Workflow" width={70} height={35}  />
                    </div>
                    <div className="hidden md:block ">
                      <div className=" flex items-baseline space-x-3">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
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
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center mx-auto hidden md:block mt-4  ">
                    <div className="flex-shrink-0  ">
                      <Image className="" src={Logo} alt="Workflow" width={85} height={40}  />
                    </div>
                  </div>
                  <div className="hidden md:block basis-2/5">
                    <div className="ml-4 flex items-center md:ml-6 justify-end gap-4">
                      <button className="font-medium text-sm px-5 py-2 rounded-md sign-up hind glow">Sign up</button>
                      {/* <button className="border-2 py-2 px-5 font-medium text-xs rounded-md pink-color sign-in hind">Sign in</button> */}


<button className="button button--moema font-medium button--text-upper text-sm rounded-md px-5 py-2">Sign in</button>


                     
                      
                      
                      
                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? ( 
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden mbl-nav-bg">
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
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <button className="font-medium text-sm px-5 py-2 rounded-md sign-up hind">Sign up</button>
                  <button className=" button--moema font-medium button--text-upper text-sm rounded-md px-5 py-2">Sign in</button>
                  {/* <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
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
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header> */}
        {/* <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            
          </div>
        </main> */}
      </div>
    </>
  );
}
