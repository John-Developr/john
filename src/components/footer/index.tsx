import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";
import Menu from "@/components/menu";
import { currentYear } from "@/utils/date";


interface FooterProps {
    [key: string]: any; // Other props with any type
}

class Footer extends Component<FooterProps> {
    state = {
        socials: [
            { 
                path: "/",
                icon: faFacebook
            },
            { 
                path: "/",
                icon: faInstagram
            },
            { 
                path: "/",
                icon: faTwitter
            },
            { 
                path: "/",
                icon: faLinkedin
            },
            { 
                path: "/",
                icon: faGithub
            },
            // Add more social icons as needed
        ]
    };


    render() {
        const { ...rest } = this.props;
        const { socials } = this.state;

        return (
            <>
                <footer {...rest}>
                    {socials.map((element, index) => (
                        <a key={index} href={element.path}>
                            <FontAwesomeIcon icon={element.icon} />
                        </a>
                    ))}
                </footer>
                <Menu />
                <span className="copyright">Copyright &copy; Since 2023 - {currentYear()}. All rights reserve.</span>
            </>
        );
    }
}

export default Footer;