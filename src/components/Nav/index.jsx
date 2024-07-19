/* eslint-disable react/prop-types */
import React from "react";
import { Navbar, Collapse, Typography, Button, IconButton, } from "@material-tailwind/react";
import { Link } from "react-router-dom"; 
import { FaBookmark, FaDog, FaSearch, FaUser } from "react-icons/fa";

export function NavbarDefault(props) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/feed" className="hover:text-orange-800">
          <div className="flex">
            <div className="text-[1.5rem] mr-2 pb-1">
              <FaDog/>
            </div>
            <div className="flex items-center">
              Feed
            </div>
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/account" className="hover:text-blue-800">
          <div className="flex">
            <div className="text-lg mr-2">
              <FaUser/>
            </div>
            <div className="flex items-center">
              Account
            </div>
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/coll" className="hover:text-green-800">
          <div className="flex">
            <div className="text-lg mr-2">
              <FaBookmark/>
            </div>
            <div className="flex items-center">
              Collection
            </div>
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
         <Link to="/search" className="hover:text-purple-800">
          <div className="flex">
            <div className="text-xl mr-2 pb-1">
              <FaSearch/>
            </div>
            <div className="flex items-center">
              Search
            </div>
          </div>
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mt-3 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
        <img className="h-16 w-auto cursor-pointer" src="/doggiedog.png" alt=""/>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {props.userId ? (
            <Link to="/logout">
              <Button variant="gradient"
            size="sm"
            className="hidden lg:inline-block" color="blue-gray">
               <span>Logout</span>
              </Button>
            </Link>
          ): (
          <>
          <Link to="/login">
            <Button
              variant="gradient"
              size="sm"
              color="brown"
              className="hidden lg:inline-block"
              >
              <span>Sign in</span>
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="gradient"
              size="sm"
              color="deep-orange"
              className="hidden lg:inline-block bg-brown ml-2"
              >
              <span>Create Account!</span>
            </Button>
          </Link>
          </>
          )}
          
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="">
          {navList}

          </div>
          <div className="flex gap-x-1 justify-end">
          {props.userId ? (
            <>
            <Link to="/logout">
            <Button fullWidth variant="gradient" size="sm" className="w-full mb-2" color="blue-gray">
              <span>Logout</span>
            </Button>
            </Link>
            </>
            ) : (
            <>
            <Link to="/login">
              <Button fullWidth variant="gradient" size="sm" className="w-full mb-2" color="brown">
                <span>Sign in</span>
              </Button>
            </Link>

            <Link to="/signup">
              <Button fullWidth variant="gradient" size="sm" className="w-full mb-2 ml-2" color="deep-orange">
                <span>Create Account</span>
              </Button>
            </Link>
            </>
            )}
          </div>
          {/* <div className="flex items-center gap-x-1 justify-center">
            <Link to="/login">
            <Button variant="gradient" size="sm" className="w-[50%]">
              <span>Sign in</span>
            </Button>
            </Link>
          </div> */}
        </div>
      </Collapse>
    </Navbar>
  );
}