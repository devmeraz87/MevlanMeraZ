"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";

const Header = () => {
    const navbarEL = useRef(null);

    useEffect(() => {

       var lastScrollTop  = 0;

        window.addEventListener("scroll", () => {

            var st = window.pageYOffset || document.documentElement.scrollTop;

            if(window.scrollY > 20) {
                navbarEL.current.classList.add("_hide")
            } else {
                navbarEL.current.classList.remove("_hide")
            }

            if(st > lastScrollTop) {
                if(window.scrollY > 100) {
                    navbarEL.current.classList.remove("_is_scrolling_up")
                }
            } else if (st < lastScrollTop) {
                if(window.scrollY > 100) {
                    navbarEL.current.classList.add("_is_scrolling_up")
                }
            }

            lastScrollTop = st <= 0 ? 0 : st;
        }, false)

    },[])
 
    return (
        <>
            <header className="_header">

                <nav className="_navbar" ref={navbarEL}>
                    <div className="_container">
                        <div className="_content">
                            <div className="_navbar_context">
                                <div className="_navbar_brand">
                                    <Link href={"/"} data-cursor="-hidden">
                                        <img className="_logo" src="/logo.svg" alt="" />
                                    </Link>
                                </div>
                                <ul className="_navbar_links">
                                    <li className="_navbar_link_item">
                                        <Link className="_navbar_link" href={"/"} data-cursor="-hidden">
                                            <span>Services</span>
                                        </Link>
                                    </li>
                                    <li className="_navbar_link_item">
                                        <Link className="_navbar_link" href={"/"} data-cursor="-hidden">
                                            <span>Work</span>
                                        </Link>
                                    </li>
                                    <li className="_navbar_link_item">
                                        <Link className="_navbar_link" href={"/"} data-cursor="-hidden">
                                            <span>Blog</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    );
}
 
export default Header;