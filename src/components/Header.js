import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import ProjectsSection from "./ProjectsSection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const prevScrollY = useRef(0); // To track previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down - hide header
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          // Scrolling up - show header
          headerRef.current.style.transform = "translateY(0)";
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleClick = (anchor) => () => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialIcons = socials.map(social => {
    const urls = `${social.url}`
    return <a href={urls}>
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  })

  return (
    <Box
      ref={headerRef}
      zIndex="10"
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)" // Default visible
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b">
        
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socialIcons}
            </HStack>
          </nav>
          <nav>
            <HStack
              spacing={8}
            >
              <a onClick={handleClick("projects")} href="#projects-section">Projects</a>
              <a onClick={handleClick("contactme")} href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
