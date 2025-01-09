import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinkWithScroll from "./NavLinkWithScroll";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white color-red">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 ">
            <NavLink to="/home">
              <img
                alt="Logo restaurant"
                src="https://livedemo00.template-help.com/wt_prod-19362/images/logo-189x66.png"
                className="h-6 w-auto"
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
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden sm:flex sm:gap-x-5">
          <NavLinkWithScroll
            to="/home#menu"
            className="nav-link font-semibold text-gray-900"
          >
            Menu
          </NavLinkWithScroll>
          <a
            href="#reservation"
            className="nav-link font-semibold text-gray-900"
          >
            Reserver
          </a>
          <a
            href="#newsletter"
            className="nav-link font-semibold text-gray-900"
          >
            Newletter
          </a>
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
                <div className="nav-link font-semibold text-gray-900">Menu</div>
                <div className=" nav-link font-semibold text-gray-900">
                  A propos de nous
                </div>
                <div className=" nav-link font-semibold text-gray-900">
                  Company
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
