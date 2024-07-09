import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFileAlt,
  faQuestionCircle,
  faAddressBook,
  faLayerGroup,
  faHomeAlt,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  path: string;
  icon: IconDefinition;
}

interface MenuProps {
  // If there are any specific props for the Menu component, define them here
  // Example: className?: string;
}

const menuItems: MenuItem[] = [
  { path: "/", icon: faHomeAlt },
  { path: "/about", icon: faQuestionCircle },
  { path: "/projects", icon: faLayerGroup },
  { path: "/resume", icon: faFileAlt },
  { path: "/contact", icon: faAddressBook },
  // Add more menu items as needed
];

const Menu: React.FC<MenuProps> = (props) => {
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <menu {...props}>
      {menuItems.map((element, index) => (
        <li key={index} className={element.path === activePath ? "active-menu" : "not-active"}>
          <Link href={element.path}>
            <FontAwesomeIcon icon={element.icon} />
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default Menu;