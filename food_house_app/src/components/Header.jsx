import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownMenu = ({mobileMenuOpen, setMobileMenuOpen}) => {
  const routesWithNames = [
    { path: "/cart/salades", name: "Salades" },
    { path: "/cart/pizzas", name: "Pizzas" },
    { path: "/cart/burgers", name: "Burgers" },
    { path: "/cart/boissons", name: "Boissons" },
    { path: "/cart/desserts", name: "Desserts" },
  ];

  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <MenuButton className="nav-link inline-flex justify-center font-semibold">
          Menu
          <ChevronDownIcon aria-hidden="true" className="icon-size-6" />
        </MenuButton>
      </div>

      <MenuItems
  transition
  className="absolute left-0 z-10 mt-2 w-35 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
>

        <div className="py-1">
          {routesWithNames.map((route) => (
            <MenuItem key={route.path}>
              <NavLink
                to={route.path}
                onClick={()=>{mobileMenuOpen === true && setMobileMenuOpen(false)}}
                className="nav-link block px-4 py-2  text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {route.name}
              </NavLink>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white color-red">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between  p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 ">
            <NavLink to="/home">
              <img
                alt="Logo restaurant"
                src="https://livedemo00.template-help.com/wt_prod-19362/images/logo-189x66.png"
                className="h-12 w-auto"
              />
            </NavLink>
          </div>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden sm:flex sm:gap-x-5 items-center">
          <NavLink to="/home" className="nav-link font-semibold text-gray-900">
            Home
          </NavLink>
          <div className="nav-link font-semibold text-gray-900">
            <DropdownMenu />
          </div>
          <div
            onClick={() => {
              window.scrollTo(10000, 10000);
            }}
            className="nav-link font-semibold text-gray-900"
          >
            Reservation
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://livedemo00.template-help.com/wt_prod-19362/images/logo-189x66.png"
                className="h-8 w-auto"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <NavLinkWithScroll
                  to="/home#menu"
                  className="nav-link font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menu
                </NavLinkWithScroll> */}
                <NavLink
                  to="/home"
                  className="nav-link font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <div className="nav-link font-semibold text-gray-900">
                  <DropdownMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                </div>
                <div
                  onClick={() => {
                    window.scrollTo(10000, 10000);
                    setMobileMenuOpen(false);
                  }}
                  className="nav-link font-semibold text-gray-900"
                >
                  Reservation
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
