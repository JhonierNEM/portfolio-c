import styled from "styled-components";

export default function B_Contactme(type, click) {
  return (
    <Send type={type} onClick={click} className="bg-second hover:bg-hv-main">
      <Wrapper1>
        <Wrapper>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </Svg>
        </Wrapper>
      </Wrapper1>
      <Span>Contact</Span>
    </Send>
  );
}

const Send = styled.button`
  font-family: inherit;
  font-size: 20px;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  &:hover div {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }
  &:hover svg {
    transform: translateX(50px) rotate(45deg) scale(1.1);
  }
  &:hover span {
    transform: translateX(200%);
  }
  &:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`;

const Svg = styled.svg`
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
`;
const Span = styled.span`
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
`;
const Wrapper = styled.div``;
const Wrapper1 = styled.div``;
