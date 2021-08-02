import { useRef, useState } from 'react';
import './CategoryBar.css'
import { Link } from "react-router-dom";

const CategoryBar = () => {

    const refHamburger = useRef();
    const refNavMenu = useRef();
    const refStar1 = useRef();
    const refStar2 = useRef();
    const refStar3 = useRef();

    function mobileMenu() {
        const hamburger = refHamburger.current;
        const navMenu = refNavMenu.current;
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        var bodyelem;
        if (hamburger.classList.contains('active')) {
            bodyelem = document.getElementsByTagName('body');
            bodyelem[0].style.overflow = 'hidden';
        }
        else {
            bodyelem = document.getElementsByTagName('body');
            bodyelem[0].style.overflow = 'visible';
        }
    }

    function closeMenu() {
        const hamburger = refHamburger.current;
        const navMenu = refNavMenu.current;
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        var bodyelem = document.getElementsByTagName('body');
        bodyelem[0].style.position = 'relative';
        bodyelem[0].style.overflow = 'visible';
    }
    function rotate1() {
        const star1 = refStar1.current;
        star1.classList.toggle("star-hover");
    }
    function rotate2() {
        const star2 = refStar2.current;
        star2.classList.toggle("star-hover");
    }
    function rotate3() {
        const star3 = refStar3.current;
        star3.classList.toggle("star-hover");
    }

    return (
        <header>
            <nav className="navbar">
                <ul className="nav__menu" ref={refNavMenu}>
                    <div className="link-flex">
                        <div className="subnav">
                            <Link to="/filtered/appliance" className="link-effect" onClick={closeMenu}>
                                <button className="button subnavbtn">Appliances</button>
                            </Link>
                            <div className="subnav-content">
                                <Link to="/filtered/appliance/kitchen">Kitchen</Link>
                            </div>
                        </div>
                    </div>
                    <div className="link-flex">
                        <div className="subnav">
                            <Link to="/filtered/book" className="link-effect" onClick={closeMenu}>
                                <button className="button subnavbtn">Books</button>
                            </Link>
                            <div className="subnav-content">
                                <Link to="/filtered/book/self-help">Self-help</Link>
                            </div>
                        </div>
                    </div>
                    <div className="link-flex">
                        <div className="subnav">
                            <Link to="/filtered/electronic" className="link-effect" onClick={closeMenu}>
                                <button className="button subnavbtn">Electronics</button>
                            </Link>
                            <div className="subnav-content">
                                <Link to="/filtered/electronic/tv">TV</Link>
                                <Link to="/filtered/electronic/speaker">Speaker</Link>
                                <Link to="/filtered/electronic/watch">Watch</Link>
                                <Link to="/filtered/electronic/iPad">iPad</Link>
                            </div>
                        </div>
                    </div>
                </ul>
                <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default CategoryBar;