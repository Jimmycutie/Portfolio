import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack, VStack } from "@chakra-ui/react";



const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mihirrohilla488@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Jimmycutie",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mihir001/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@mihirrohilla488",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];





const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    let prevScrollPos = window.scrollY

    const handleScroll = () => {

      const currentScrollPos = window.scrollY
      const headerEl = headerRef.current

      if (!headerEl) return;
      if (prevScrollPos > currentScrollPos) {
        headerEl.style.transform = "translateY(0)"
      } else {
        headerEl.style.transform = "translateY(-200px)"
      }
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const social = socials.map(social => {
    return (
      <a href={social.url} key={social.url}>
        <FontAwesomeIcon 
          icon={social.icon} size="2x"
          className="icon"
        />
      </a>
    )
  })

  const [toggle, setToggle] = useState(false)
  const handletoggle = () => {
    setToggle(!toggle)
  }
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      background="transparent"
      ref={headerRef}
      zIndex={2}
    >
      <div className="nav">
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={{base: 5, sm: 10, md:10, xl:16}}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <nav className="socials-icon">
              <HStack spacing={8}>
                {social}
              </HStack>
            </nav>
            <nav className="socials-icon2">
              <HStack spacing={8}>
                <FontAwesomeIcon 
                  icon={faBars} size="lg"
                  className="icon"
                  onClick={handletoggle}
                />
              </HStack>
            </nav>
            <nav>
              <HStack className="nav-element" spacing={8}>
                <a href="#home-section" onClick={handleClick("home")}>Home</a>
                <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
                <a href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </div>
      {
        toggle && 
        <div className="popup">
          <VStack spacing={2} color={"white"}>
            {social}
          </VStack>
        </div>
      }
    </Box>
  );
};
export default Header;
