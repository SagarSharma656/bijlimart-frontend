import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/header.module.css'
import logo from '../../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import MyContext from '../../context/MyContext';
import { Link } from 'react-router-dom';


const Header = () => {

    const { cart } = useContext(MyContext);


    const texts = [
        'Search "milk"',
        'Search "bread"',
        'Search "eggs"',
        'Search "butter"',
        'Search "cheese"',
        'Search "coffee"',
        'Search "tea"',
        'Search "sugar"',
        'Search "rice"',
        'Search "pasta"',
        'Search "cereal"',
        'Search "flour"',
        'Search "yogurt"',
        'Search "honey"',
        'Search "toothpaste"',
        'Search "shampoo"',
        'Search "soap"',
        'Search "toilet paper"',
        'Search "laundry detergent"',
        'Search "dish soap"'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setAnimateKey((prevKey) => (prevKey + 1) % texts.length);
        }, 2000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, [texts.length]);


    return (
        <header className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <img src={logo} alt="Logo" />
            </Link>

            <div className={styles.location}>
                <p>Delivery in 10 minutes</p>
                <span className={styles.blink}>address</span> {/* Optional blink effect */}
            </div>

            <Link to={'./search'} className={styles.search}>
                <IoSearch />
                <div>
                    <p key={animateKey}>{texts[currentIndex]}</p>
                </div>
            </Link>
            

            <Link to={'/cart'} className={styles.cartContainer}>
                <FaCartShopping />
                {
                    cart?.length > 0 &&
                    <span className={styles.totalItems}>{cart?.length}</span>
                }
            </Link>

            <div className={styles.profileIcon}>
                <FaRegUserCircle />
            </div>
        </header>
    )
}

export default Header