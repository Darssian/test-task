import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import Slider from './components/Slider/Slider';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './styles/global.scss';
import './App.scss';

function App() {
  const [screenClass, setScreenClass] = useState('');
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1921) {
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100%';
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
        setScreenClass('scale-content-large');
      } else {
        document.documentElement.style.overflow = '';
        document.documentElement.style.height = '';
        document.body.style.overflow = '';
        document.body.style.height = '';
        setScreenClass('');
      }
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);
  
  const cardData = [
    {
      id: 1,
      title: "Neon Lights",
      image: "/src/assets/images/card_1.png",
      creator: "Mia Williams",
      currentBid: 1.25,
      endTime: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 2,
      title: "Cosmic Perspective",
      image: "/src/assets/images/card_2.png",
      creator: "Ryan Wilson",
      currentBid: 0.87,
      endTime: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 3,
      title: "Digital Dreams",
      image: "/src/assets/images/card_3.png",
      creator: "Emma Chen",
      currentBid: 1.53,
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 4,
      title: "Abstract Motion",
      image: "/src/assets/images/card_4.png",
      creator: "Alex Johnson",
      currentBid: 2.11,
      endTime: new Date(Date.now() + 15 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 5,
      title: "Future Reality",
      image: "/src/assets/images/card_5.png",
      creator: "Sam Rodriguez",
      currentBid: 0.95,
      endTime: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString()
    }
  ];
  
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { 
        delay: custom * 0.2,
        type: "spring",
        damping: 15,
        stiffness: 100 
      }
    })
  };
  
  const decorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <div className={`app ${screenClass}`}>
      <Header />
      
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Discover And Create NFTs
              </h1>
              <p className="hero__subtitle">
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <h style={{fontWeight: 600, color: '#141416'}}>$20 bonus.</h>
              </p>
              <div className="hero__buttons">
                <button className="hero__cta btn-primary">Explore More</button>
                <button className="btn-secondary">Create NFT</button>
              </div>
              <div className="hero__stats">
                <div className="hero__stat">
                  <span className="hero__stat-number">430K+</span>
                  <span className="hero__stat-label">Art Works</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-number">159K++</span>
                  <span className="hero__stat-label">Creators</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-number">87K+</span>
                  <span className="hero__stat-label">Collections</span>
                </div>
              </div>
            </div>
            <div className="hero__images">
              <motion.div 
                className="hero__image hero__image-1"
                variants={imageVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={1}
              >
                <img src="/src/assets/images/hero1.png" alt="NFT Showcase" />
              </motion.div>
              <motion.div 
                className="hero__image hero__image-2"
                variants={imageVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                custom={2}
              >
                <img src="/src/assets/images/hero2.png" alt="NFT Showcase" />
              </motion.div>
              <motion.div 
                className="hero__image hero__decor hero__decor-1"
                variants={decorVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
              >
                <img src="/src/assets/arrowTr.svg" alt="NFT Showcase" />
              </motion.div>
              <motion.div 
                className="hero__image hero__decor hero__decor-2"
                variants={decorVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
              >
                <img src="/src/assets/decor.svg" alt="NFT Showcase" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="weekly">
        <div className="container">
          <div className="weekly__header">
            <h2 className="weekly__title">Weekly Top NFT</h2>
          </div>
          
          <Slider 
            slidesPerView={3}
            spaceBetween={30}
          >
            {cardData.map(card => (
              <Card 
                key={card.id}
                image={card.image}
                title={card.title}
                creator={card.creator}
                currentBid={card.currentBid}
                endTime={card.endTime}
              />
            ))}
          </Slider>
        </div>
      </section>
      
      <section className="create-sell">
        <div className="container">
          <div className="create-sell__content">
            <div className="create-sell__context">
              <h2 className="create-sell__title">Create and Sell NFTs</h2>
              <p className="create-sell__description">
              World’s Largest NFT Place
              </p>
              <div className="create-sell__buttons">
                <button className="btn-primary create-sell__button-primary">Explore More</button>
                <button className="btn-secondary create-sell__button-secondary">Sell Artwork</button>
              </div>
            </div>
            <div className="create-sell__image">
              <img src="/src/assets/images/Create.png" alt="Create and Sell NFTs" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
