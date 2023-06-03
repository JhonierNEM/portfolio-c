import styled from 'styled-components'

export default function Input({ name, value, changeValue, type, label }) {
  return (
    <Container>
      <Field
        type={type}
        name={name}
        required
        onChange={changeValue}
        value={value}
      />
      <Label>
        {label.split('').map((el, i) => (
          <Span delay={i} key={i}>
            {i === 0 ? el.toUpperCase() : el}
          </Span>
        ))}
      </Label>
    </Container>
  )
}

const Container = styled.div`
  z-index: 1;
  position: relative;
  margin: 20px 0 30px;
  width: 100%;
`
const Field = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px #242424 solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #ffffff;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #9435dd;
  }

  &:focus + label span,
  &:valid + label span {
    color: #9435dd;
    transform: translateY(-30px);
    font-size: 16px;
  }
`
const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
`
const Span = styled.span`
  display: inline-block;
  font-size: 20px;
  min-width: 5px;
  color: #8c8888;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: ${(props) =>
    props.delay === 0 ? '0ms' : props.delay * 5 + '0ms'};
`
