import React, { useEffect, useState } from 'react'
import HeroSection from '../component/Home/HeroSection'
import ProductSection from '../component/Home/ProductSection'
import Layout from '../component/Sheared/Layout'
import { FaArrowUpLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'
import UserLogin from '../component/Home/UserLogin'


import Contact from './contact/Contact';

import Review from '../component/Home/Review';
import CategoryComponent from '../component/Home/CategoryComponent';
import PosterSection from '../component/Home/PosterSection';
import GetUserLocation from '../component/Home/GetUserLocation';



const Home = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLocation, setIsLocation] = useState(true);



  useEffect(() => {
    const handleVisibilityOfBtn = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }

    window.addEventListener('scroll', handleVisibilityOfBtn);

    return () => window.removeEventListener('scroll', handleVisibilityOfBtn)

  }, []);



  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div>
      {
        isLogin &&
        <UserLogin setIsLogin={setIsLogin} />
      }

      {!isLogin && isLocation &&
        <GetUserLocation setIsLocation={setIsLocation} />
      }
     
      <Layout>

        <HeroSection />
        <PosterSection />
        <CategoryComponent />

        <ProductSection />


{/* <<<<<<< HEAD
        {/* <Review /> */}

           
{/* ======= */}
 {/* >>>>>>> ae163e560752e068c6952b611607df83d77f6c8e  */}


  {/* <Review /> */}
{/* >>>>>>> 3dc8a3eec46053fd576f301e9bb5ddbcacde4b59 */}

{/* .0 */} 
        {
          showBtn &&
          <div onClick={gotoTop} className={styles.moveToTopBtn}>
            <FaArrowUpLong className={styles.toTopBtn} />
          </div>
        }
      </Layout>





    </div>
  )
}

export default Home    