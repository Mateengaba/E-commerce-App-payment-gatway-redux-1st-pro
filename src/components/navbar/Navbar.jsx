import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';



function Navbar() {
  const [open, setOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user.user.email)


  const logout = () => {
    localStorage.clear('user');
    window.location.href = "/login";
  }
  const cartItems = useSelector((state)=> state.cart)



  //distracter received data for mystate
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  return (
    <div className="bg-white sticky top-0 z-50  "  >


      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {/* order */}
                  {user ?
                    <div className="flow-root">
                      <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                        Order
                      </Link>
                    </div> : ''}

                  {/* admin */}
                  {user?.user?.email === 'admin@gmail.com' ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                  {/* logout */}
                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : ''}

                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/png;base64,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"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>



      {/* desktop  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-yellow-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over Rs:500
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Gabajee</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {/* order */}
                  {user ?
                    <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Order
                    </Link> : ''}

                  {/* //admin// */}
                  {user?.user?.email === 'admin@gmail.com' ?
                    <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Admin
                    </Link> : ""}
                 
                  {/* logout */}
                  {user ?
                    <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a> : ''}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/121400907?s=96&v=4"
                      alt="Maten Gaba" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
}

export default Navbar;
