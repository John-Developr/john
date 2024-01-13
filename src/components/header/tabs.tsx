import React, { useMemo, useRef, useEffect, ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';

import Svg from '@/helpers/icons';
import { capitalizeFirstLetter } from '@/utils/stringUtils';

interface TabsProps extends React.HTMLProps<HTMLElement> {
  className: any;
}

const Tabs: React.FC<TabsProps> = ({ className, ...rest }) => {
  // const navRef = useRef<HTMLDivElement>(null);
  // const htmlRef = useRef<HTMLHtmlElement | null>(null);
  const [mode, modeSet] = useState(false);
  const navs = useMemo(() => [
      { path: 'about', cardHover: true },
      { path: 'projects', cardHover: true },
      { path: 'contact', cardHover: true }], []);

  const router = useRouter();
  const activePath = router.pathname;

  const filteredNavs = useMemo(() => {
    return navs.filter((element) => `/${element.path}` !== activePath);
  }, [navs, activePath]);

  // const handleOpenNav = () => {
  //   const findOverlay = document.querySelector('.overlay');
  //   const overlay = document.createElement('div');
  //   if (!findOverlay){
  //     overlay.classList.add('overlay');
  //     overlay.onclick = handleCloseNav;
  //     document.body.appendChild(overlay);
  //   }

  //   if (navRef.current && htmlRef.current) {
  //     const navElement = navRef.current.classList;

  //     if (!navElement.contains('open')) {
  //       htmlRef.current.style.overflow = 'hidden';
  //       return navElement.add('open'); 
  //     }

  //     htmlRef.current.style.overflow = '';
  //     document.body.removeChild(overlay);
  //     navElement.remove('open');
  //   }
  // }

  // const handleCloseNav = (event: MouseEvent) => {
  //   const thisElement = event.target as HTMLElement;
  //   if (!htmlRef.current || !navRef.current) return;
  //   htmlRef.current.style.overflow = '';
  //   thisElement.remove();
  //   navRef.current.classList.remove('open')
  // }

  // useEffect(() => {
  //   if (typeof document !== 'undefined' && !htmlRef.current) {
  //     htmlRef.current = document.querySelector('html');
  //   }
    
  //   const handleResize = () => {
  //     if (window.innerWidth > 700) {
  //       if (!navRef.current || !htmlRef.current) return;
  //       const navElement = navRef.current.classList;
  //       htmlRef.current.style.overflow = '';
  //       navElement.remove('open')
  //       const overlay = document.querySelector('.overlay');
  //       if(overlay){ document.body.removeChild(overlay) }
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => { window.removeEventListener('resize', handleResize); };
  // }, []);

  const handleDarkLightMode = () => {
    const { pathname } = Router;
    const htlmElement = document.querySelector('html');

    Router.push(pathname);

    setTimeout(() => {
      if (htlmElement?.classList.contains('light-mode')) {
        htlmElement?.classList.remove('light-mode');
        htlmElement?.classList.add('dark-mode');
        return localStorage.setItem('dark-light-mode', 'dark-mode')
      };
  
      htlmElement?.classList.remove('dark-mode');
      htlmElement?.classList.add('light-mode');
      return localStorage.setItem('dark-light-mode', 'light-mode');
    }, 300);
  }

  return (
    <>
      <div className="menu-container" onClick={handleDarkLightMode}>
        <Svg icon="contrast" width="24" height="24" />
      </div>
      
      <nav id="tabs" {...rest} className={className}>
        <ul>
          {filteredNavs.map((element, index) => (
            <li key={index}>
              <Link href={element.path} id={element.cardHover ? 'cardHover' : ''}>
                {capitalizeFirstLetter(element.path)}
              </Link>
            </li>
          ))}
          <li onClick={handleDarkLightMode}>
            <Svg icon="contrast" width="24" height="24" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Tabs;
