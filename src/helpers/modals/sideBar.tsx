import React, { useCallback, useEffect, useRef  } from 'react';

import Svg from '@/helpers/icons';

interface ISideBarModal {
  show: boolean;
  closeShow: (ref?: HTMLDivElement) => void;
  data?: {
    title: string;
    description?: string;
    technologies?: string[];
    github?: string;
    imageUrl?: string;
    about?: string;
    link?: string;
  };
  onRef: (ref:HTMLDivElement) => void;
}
/* ------------------------ SideBarModal defaultprops ----------------------- */
const defaultProps: ISideBarModal = {
  show: false,
  closeShow: () => {},
  onRef: () => {},
};

const SideBarModal: React.FC<ISideBarModal> = ({ show, closeShow, data, onRef}) => {
  const sidebarModalRef = useRef<HTMLDivElement>(null);
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeShow();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    // Check if the callback prop (passed from parent) exists
    if (sidebarModalRef.current && onRef) {
      onRef(sidebarModalRef.current); // Pass the ref to the parent component
    }
  }, [onRef]);

  return (
    <>
      {show && data && (
        <>
          <div className="sidebar-modal" ref={sidebarModalRef}>
            <aside className="fadeInLeft">
              <div className="pos__relative">
                <div className="header">
                  <button
                    onClick={() => closeShow()}
                    className="none-button"
                    type="button"
                  >
                    <Svg icon="back" width="24" height="24" />
                  </button>
                  <a
                    href="#"
                    id="cardHover"
                    onClick={(e) => {
                      e.preventDefault();
                      closeShow();
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Back To Projects.
                  </a>
                </div>

                <div className="main__post">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <img src={data.imageUrl} alt={data.title} />
                  <h4>About</h4>
                  <p>{data.about && data.about}</p>
                  <h4>Technologies</h4>

                  {data.technologies && (
                    <p>
                      {data.technologies.map((tech, index) => (
                        <span key={index}>
                          {tech}
                        </span>
                      ))}
                    </p>
                  )}
                  <h4>
                    <Svg icon="links" width="24" height="24" /> Website
                  </h4>
                  <p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="cardHover"
                    >
                      {data.link}
                    </a>
                  </p>

                  {data.github && (
                    <>
                      <h4>
                        <Svg icon="github" width="24" height="24" /> Github
                      </h4>
                      <p>
                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="cardHover"
                        >
                          {data.github}
                        </a>
                      </p>
                    </>
                  )}
                </div>
                <a
                  href={data.link}
                  className="open__project"
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                >
                  Open Project{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                  </svg>
                </a>
              </div>
            </aside>
          </div>
        </>
      )}
    </>
  );
};

SideBarModal.defaultProps = defaultProps;

export default SideBarModal;
