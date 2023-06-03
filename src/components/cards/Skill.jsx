import { icons } from '../../assets'
import Progress from '../inputs/Progress'
import { classNames } from '../inputs/Progress'
import styled from 'styled-components'

export default function Skill({
  title,
  subTitle,
  icon,
  skills,
  view,
  setView,
  name,
}) {
  return (
    <div
      className={classNames(
        'flex flex-col p-2 mx-4 overflow-hidden space-y-3 my-2 transition-all ease-in-out '
      )}
    >
      <div className="flex">
        <div className="w-11 h-11 self-center">{getIcon(icon)}</div>
        <p className="flex flex-col px-1">
          <span className="text-2xl font-bold">{title}</span>
          <span className="text-txThird/50">{subTitle}</span>
        </p>
        <button
          onClick={(evt) => {
            setView(evt, name)
          }}
          className="w-10 h-10 self-center justify-self-end "
        >
          <icons.Up
            className={classNames(
              'fill-txSecond transition ease-in-out duration-700',
              view ? '' : 'rotate-180'
            )}
          />
        </button>
      </div>
      <Container
        className={classNames(
          'w-full flex flex-col space-y-5 pl-14 py-3 transition-all ease-in-out duration-150 md:flex-row md:flex-wrap md:space-y-0',
          view ? null : 'hidden'
        )}
      >
        {skills?.map((skill, i) => (
          <div
            className={classNames(
              'h-12 min-w-[200px] w-full md:w-[48%] md:mb-8',
              (i + 1) % 2 !== 0 && 'mr-5'
            )}
          >
            <div className="flex justify-between px-2.5 text-xl ">
              <span className="">{skill.name}</span>
              <span className="text-txThird/50">{skill.value}%</span>
            </div>
            <Progress max={100} value={skill.value} />
          </div>
        ))}
      </Container>
    </div>
  )
}

function getIcon(icon = 'null') {
  const [iconName, stroke] = icon.split('/')
  const className = stroke ? 'stroke-txSecond ' : 'fill-txSecond'

  switch (iconName) {
    case 'brackets':
      return <icons.Brackets className={className} />
    case 'server':
      return <icons.Server className={className} />
    case 'design':
      return <icons.Design className={className} />

    default:
      return
  }
}

const Container = styled.div`
  transition: all 1s ease-in-out;
`
