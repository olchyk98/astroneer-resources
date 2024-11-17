import { useMemo } from 'react'
import { Flare, FlareProps } from './flare'
import { choice, range, rangeFloat } from '../../helpers'

const colors = [ 'aqua', 'blue', 'yellow', 'pink', 'purple', 'white' ]

export function RandomFlare (props: RandomFlareProps) {
  const styleProps = useMemo(() => {
    const xProp = Math.random() > 0.5 ? 'left' : 'right'
    const yProp = Math.random() > 0.5 ? 'top' : 'bottom'
    return {
      left: 'inherit',
      right: 'inherit',
      top: 'inherit',
      bottom: 'inherit',
      [xProp]: `${range(0, props.maxX) }px`,
      [yProp]: `${range(0, props.maxX) }px`,
      color: choice(colors),
      opacity: rangeFloat(0.2, 0.6),
    }
  }, [])

  return (
    <Flare
      { ...styleProps }
      { ...props }
    />
  )
}

export interface RandomFlareProps extends FlareProps {
  maxX?: number
  maxY?: number
}
