import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../img/logo/brand.svg";
import { ReactComponent as Discord } from "../img/media/discord.svg";
import { ReactComponent as Instagram } from "../img/media/instagram.svg";
import { ReactComponent as Twitter } from "../img/media/twitter.svg";
import { ReactComponent as OpenSea } from "../img/media/opensea.svg";
import { ReactComponent as CloseIcon } from "../img/icons/close.svg";
import { ReactComponent as Menu } from "../img/icons/menu.svg";

const Navbar = (props) => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  
  return (
    <NavbarStyle className={scroll ? "scroll" : ""}>
      <div className="container">
        <Link to="/">
          <Logo className="brand" width="108px" height="108px" />
        </Link>
        <div className={`nav ${menu && "show"}`}>
          <CloseIcon className="close" onClick={() => setMenu(false)} />
          <a href="#story" onClick={() => setMenu(false)}>
            Story
          </a>
          <a href="#roadmap" onClick={() => setMenu(false)}>
            Roadmap
          </a>
          <a href="#team" onClick={() => setMenu(false)}>
            Team
          </a>
          <a href="#faq" onClick={() => setMenu(false)}>
            FAQ
          </a>
        </div>
        <div className="media">
          <a target='_blank' rel='noopener noreferrer' href="https://discord.com/invite/bushido7077">
            <Discord />
          </a>
          <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/bushido_7077/">
            <Instagram />
          </a>
          <a target='_blank' rel='noopener noreferrer' href="https://twitter.com/bushido_7077">
            <Twitter />
          </a>
          <a target='_blank' rel='noopener noreferrer' href="https://opensea.io/collection/markofthesun">
            <OpenSea />
          </a>
        </div>
        <Menu className="menu" onClick={() => setMenu(true)} />
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.nav`
  z-index: 10;
  position: fixed;
  top: 3.125rem;
  left: 0;
  right: 0;
  width: 100%;
  transition: top 200ms, background-color 200ms;

  // on Scrole
  &.scroll {
    transition: top 200ms, background-color 200ms;
    background-color: #14191a;
    top: 0;

    .brand {
      width: 70px;
      height: 100px;
      transition: width 200ms, height 200ms;
    }
  }

  .brand {
    transition: width 200ms, height 200ms;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg:not(.brand) {
      cursor: pointer;
      min-height: 23px;
      max-height: 23px;
      min-width: 26px;
      max-width: 26px;
      path,
      circle,
      rect {
        fill: #f1f1f1;
      }
      :hover {
        path,
        circle,
        rect {
          fill: #ffe600;
        }
      }
    }
    .nav {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .button{
        margin-left 1.3rem
      }
      > a {
        margin-right: 1.3rem;
      }
      .close {
        display: none;
        position: fixed;
        top: 5vh;
        right: 12vw;
      }
    }
    .menu {
      display: none;
    }
    .media {
      a {
        margin-left: 1rem;
        display: inline-block;
      }
    }
    @media (max-width: 768px) {
      justify-content: space-between;
      .brand {
        width: 70px;
      }
      .media {
        text-align: right;
        a {
          margin-left: 1.5rem;
          :first-child {
            margin-left: 0;
          }
        }
      }
      .nav {
        position: fixed;
        top: 0;
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 100%;
        z-index: 11;
        transition: right 300ms ease-in, left 300ms;
        background-color: #14191a;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        > a {
          text-align: center;
          padding: 1.3rem 0.7rem;
          margin-right: 0;
          margin-bottom: 1.3rem;
        }
        &.show {
          right: 0;
          transition: right 300ms ease-in, left 300ms;
          .close {
            display: block;
          }
        }
      }
      .menu {
        display: block;
        padding-right: 1rem;
        box-sizing: content-box;
      }
    }
  }
  @media (max-width: 768px) {
    top: 0;
  }
`;
