import styled from 'styled-components'

export default function Progress({ value, max, className }) {
  return (
    <div
      className="m-2 relative min-w-max rounded-2xl h-[10px] bg-txThird/10 shadow overflow-hidden"
      title={max}
    >
      <Div
        value={value}
        className={classNames(
          'bg-txSecond h-[100%] absolute top-0 left-0',
          className
        )}
        title={value}
      ></Div>
    </div>
  )
}
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Div = styled.div`
  width: ${(props) => (props.value ? props.value + '%' : '100%')};
`
