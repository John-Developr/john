import React, { useState, useRef, useEffect } from "react";

import Image from "@/helpers/image";
import SideBarModal from "@/helpers/modals/sideBar";

interface MansoryItemProps {
  item: {
    title: string;
    description?: string;
    imageUrl: string;
    link?: string;
    github?: string;
    about?: string;
    technologies?: string[];
  };
}

const arrayRandomItem = (array: string[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const MansoryItem: React.FC<MansoryItemProps> = ({ item }) => {
  const htmlRef = useRef<HTMLHtmlElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);
  const [height] = useState(arrayRandomItem(["400px", "454px", "310px"]));

  const handleOpenSideBar = () => {
    if (!htmlRef.current) return; 
    htmlRef.current.style.overflow = "hidden";
    setShow(true);
  };

  const handleCloseNav = () => {
    if (!htmlRef.current || !overlayRef.current) return;
    htmlRef.current.style.overflow = "";
    overlayRef.current.remove();
    setShow(false);
  }

  const handleChildRef = (ref: HTMLDivElement) => {
    const findOverlay = document.querySelector(".overlay");
    const overlay = document.createElement("div");
    
    if (!findOverlay){
      overlay.classList.add("overlay");
      overlay.onclick = handleCloseNav;
      overlayRef.current = overlay;
      if (ref) ref.prepend(overlayRef.current);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined" && !htmlRef.current) {
      htmlRef.current = document.querySelector("html");
    }
  }, []);

  return (
    <>
      <div 
        className="mansory-item"
        style={{ height }}
        role="gridcell"
        id="cardHover"
        aria-label={`${item.title} ${item.description}`}
        onClick={handleOpenSideBar}
        onKeyPress={(e) => {
          if (e.key === "Enter") return handleOpenSideBar();
        }}
        tabIndex={0}>
          <Image src={item.imageUrl} alt={item.imageUrl} />
          <div className="content__slate">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.technologies && (
              <p>
                {item.technologies.map((tech: string, index: number) => (
                  <span key={index}>
                    {tech}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      <SideBarModal
        show={show}
        closeShow={handleCloseNav}
        data={item}
        onRef={handleChildRef}
      />
    </>
  );
};

export default MansoryItem;
