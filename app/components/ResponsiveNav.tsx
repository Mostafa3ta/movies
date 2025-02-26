// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { MoviesLinks, ShowsLinks } from '../utils'

// export default function ResponsiveNav() {
//     return (
//         <nav className="navbar nav2 navbar-dark fixed-top">
//             <div className="container-fluid ">
//                 <div className='d-flex justify-content-center'>
//                     <Link href={`/Search/1`} className=' cursor-pointer col-sm-1'>
//                         <i className="fa-solid search-btn btn btn-outline-warning rounded-4 text-white fs-6 fa-magnifying-glass"></i>
//                     </Link>
//                 </div>
//                 <Link className="navbar-brand d-flex m-auto" href="/">
//                     {/* <Image src="/movies-club.png" className='logo-ico h-auto' alt='poster' priority width={0} height={0} sizes='100vw' /> */}
//                     <img src="/movies-club.png" className='logo-ico' alt='poster' />
//                 </Link>
//                 <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="offcanvas offcanvas-end nav2 mb-4" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//                     <div className="offcanvas-header">
//                         <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                     </div>
//                     <div className="offcanvas-body nav2">
//                         <h5 className='  text-white '><i className="fa-solid fa-film text-danger fs-5 px-1"></i> Movies</h5>
//                         <ul className="navbar-nav justify-content-end flex-grow-1 px-sm-5 py-2 ">
//                             {MoviesLinks.map((item, index) =>
//                                 <li key={index} className="nav-item py-2">
//                                     <Link href={item.link} >
//                                         <span className='list-items'>{item.name}</span>
//                                     </Link>
//                                 </li>
//                             )}
//                         </ul>
//                         <hr className='text-white w-75 ' />

//                         <h5 className='text-white justify-content-start'> <i className="fa-solid fa-tv text-warning fs-5 px-1 "></i>Tv Shows</h5>
//                         <ul className="navbar-nav justify-content-end flex-grow-1  px-sm-5 py-1 ">
//                             {ShowsLinks.map((item, index) =>
//                                 <li key={index} className="nav-item py-2">
//                                     <Link href={item.link} >
//                                         <span className='list-items'>{item.name}</span>
//                                     </Link>
//                                 </li>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>

//     )
// }
