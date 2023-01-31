import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Proyect from "../cards/Proyect";
import information from "../../information";
import { icons } from "../../assets";

export default function CarrouselDetail({proyects}) {
  

  const slideshow = useRef(null);
  const [to, setTo] = useState(0);

  const handleChangeTo = (to_, direct) => {
    if (direct) return setTo(to_);

    const size = proyects.length;
    if (to_ > size - 1) {
      setTo(0);
    } else if (to_ < 0) {
      setTo(size - 1);
    } else {
      setTo(to_);
    }
  };

  const handleClick = (to_) => {
    if (to_ === to) return;
    //next
    if (to_ > to) {
      for (let i = 0; i < to_ - to; i++) {
        next();
      }
      //previus
    } else {
      for (let i = 0; i < to - to_; i++) {
        previus();
      }
    }
    handleChangeTo(to_, true);
  };

  const next = () => {
    if (slideshow?.current?.children?.length > 0) {
      const firstElement = slideshow?.current?.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;

      const size = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        handleChangeTo(to + 1);
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translatex(0px)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const previus = () => {
    handleChangeTo(to - 1);
    if (slideshow?.current?.children.length > 0) {
      const endElement =
        slideshow.current.children[slideshow.current.children.length - 1];
      slideshow.current.insertBefore(
        endElement,
        slideshow?.current?.firstChild
      );

      slideshow.current.style.transition = `none`;

      const size = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translatex(0)`;
      }, 30);
    }
  };

  return (
    <div className="w-full h-[90%] p-1 flex flex-col justify-center sm:px-4 md:hidden">
      <div
        id="main"
        className="w-full my-3 relative overflow-hidden sm:h-[85%] sm:my-0 "
      >
        <div className="flex flex-nowrap md:flex-wrap" ref={slideshow}>
          {proyects.map((element, i) => (
            <Slide key={i}>
              <Proyect
                title={element.name}
                description={element.shortDescription}
                image={element.image}
                gitLink={element.gitLink}
                demoLink={element.demoLink}
              />
            </Slide>
          ))}
        </div>

        <Controls className="md:hidden">
          <Button className="left-0" onClick={previus}>
           <icons.Rigth className="rotate-180 sm:-ml-4 md:-ml-2"/>
          </Button>
          <Button
            className="right-0"
            onClick={next}
          >
            <icons.Rigth className="sm:ml-4 md:ml-2"/>
          </Button>
        </Controls>
      </div>

      <div className="w-full h-[10%] flex justify-center space-x-3 p-2 sm:my-2 md:hidden">
        {proyects.map((ele, i) => (
          <ToButton
            i={i}
            to={to}
            className="w-5 h-5 rounded-full border"
            onClick={() => {
              handleClick(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const Slide = styled.div`
  min-width: 90%;
  height: 100%;
  margin: 0 5% 0 5%;
  padding: 0 6px;
  position: relative;
  transition: 0.3s ease-in all;
  z-index: 10;
  @media screen and (min-width: 600px) {
    padding: 0 50px;
  }
  @media screen and (min-width: 768px) {
    min-width: 45%;
    padding: 0;
    margin: 0 2.5%;
  }
  @media screen and (min-width: 1024px) {
    min-width: 30%;
    margin: 0;
  }

`;

const Controls = styled.div`
  position: absolute;
  top: 0%;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Button = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  position: absolute;
  transition: 0.3 ease all;
  &:hover {
    path {
      fill: #b7b4b4;
    }
  }

  path {
    filter: ${(props) =>
      props.r
        ? "drop-shadow(-2px 0px 0px #fff)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }
  @media screen and (max-width: 400px) {
    svg {
      display: none;
    }
  }
`;
const ToButton = styled.button`
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.i === props.to ? "rgb(76 29 149 / var(--tw-bg-opacity))" : ""};
`;
