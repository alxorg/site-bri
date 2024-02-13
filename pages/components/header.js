/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Events, Link, animateScroll as scroll, scrollSpy } from "react-scroll";

import styles from '../../styles/Header.module.css'

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handlerScroll = (ev) => {
    setScrollPosition(window.scrollY);
  }
  
  const calculateColor = () => {
    const colorPercentage = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;
    return `rgba(255, 255, 255, ${colorPercentage})`;
  };

  const styleBackground = {
    transition: 'background-color 0.5s ease', // Adiciona uma transição suave
    backgroundColor: calculateColor(),
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handlerScroll)

    return () => {
      window.removeEventListener("scroll", handlerScroll)
    }
  }, [])

  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();



    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <header className={`${styles.header} flex justify-space-between align-items-center`} style={styleBackground}>
      <img src="./bri-logotipo.svg" alt="logotipo da bri" className={styles['header__logotipo']} />
      <nav className={styles['header__nav']}>
        <Link
          activeClass="active" 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={50}
          duration={500} 
        >
          sobre
        </Link>
        <Link
          activeClass="active" 
          to="solutions" 
          spy={true} 
          smooth={true} 
          offset={100}
          duration={500} 
        >
          soluções
        </Link>
        <Link
          activeClass="active" 
          to="customers" 
          spy={true} 
          smooth={true} 
          offset={100}
          duration={500} 
        >
          clientes
        </Link>
        <Link
          activeClass="active" 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={100}
          duration={500} 
        >
          contato
        </Link>
        {/* Repita para as outras sessões */}
      </nav>
    </header>
  );
};

export default Header;
