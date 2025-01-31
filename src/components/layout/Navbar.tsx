import React from "react";
import logo from "../../assets/icons/logo.png";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink } from "react-router-dom";
// import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="relative container mx-auto flex items-center py-3 h-16 mt-1">
          {/* LOGO SECTION */}
          <div className="absolute left-0 text-2xl flex items-center justify-start gap-2 font-bold">
            <img className="w-12" src={logo} alt="" />
            <div className="flex mt-3">
              <p>Pedal-</p>
              <p className="text-secondary">Planet</p>
            </div>
          </div>
          {/* MENU SECTION */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-6 text-back">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-[#19a270] font-semibold duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* iCON SECTION */}
          <div className="absolute right-0 flex items-center gap-4 ml-auto">
            {/* <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button> */}
            <NavLink
              to="login"
              className="font-semibold hover:cursor-pointer hover:bg-[#19a270] rounded-md border-2 hover:border-2 text-back hover:text-white px-6 py-2 duration-200 hidden md:block"
            >
              Login
            </NavLink>
          </div>
          {/* MOBILE HAMBURGER MENU SECTION */}
          <div
            className="md:hidden absolute right-0 mr-[2px] cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* MOBILE SIDEBAR SECTION */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
export const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Bicycles", link: "#" },
  { id: 3, title: "About ", link: "#" },
  { id: 4, title: "Dashboard", link: "#" },
  // { id: 5, title: "Pricing", link: "#" },
];

<div className="flex">
  <div className="">1</div>
  <div className="">2</div>
  <div className="">3</div>
</div>;
