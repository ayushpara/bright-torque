'use client'

import { useEffect, useRef, useState } from 'react'
import mojs from '@mojs/core'

const MAX_CLAPS = 50

const ClapButton=()=> {
  const clapRef = useRef<HTMLButtonElement | null>(null)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(() =>
    Math.floor(Math.random() * (10000 - 500 + 1)) + 500
  )

  useEffect(() => {
    if (!clapRef.current) return

    const tlDuration = 300

    const triangleBurst = new mojs.Burst({
      parent: clapRef.current,
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        stroke: 'rgba(39,174,96,0.5)',
        strokeWidth: 2,
        duration: tlDuration,
      },
    })

    const circleBurst = new mojs.Burst({
      parent: clapRef.current,
      radius: { 50: 75 },
      children: {
        shape: 'circle',
        fill: 'rgba(149,165,166,0.5)',
        radius: { 3: 0 },
        duration: tlDuration,
      },
    })

    const scaleButton = new mojs.Html({
      el: clapRef.current,
      scale: { 1.3: 1 },
      duration: tlDuration,
    })

    const timeline = new mojs.Timeline()
    timeline.add([triangleBurst, circleBurst, scaleButton])

    clapRef.current.onclick = () => {
      if (count < MAX_CLAPS) {
        setCount((c) => c + 1)
        setTotal((t) => t + 1)
        timeline.replay()
      }
    }
  }, [count])

  return (
    <button ref={clapRef} className="clap">
      <span>
        <svg
          className={count > 0 ? 'checked' : ''}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-549 338 100.1 125"
          width="40"
        >
          {/* SVG paths trimmed for readability */}
          <path d="M-471.2 366.8c1.2 1.1..." />
          <path d="M-527.2 399.1l20.9..." />
        </svg>
      </span>

      {count > 0 && <span className="clap--count">+{count}</span>}
      <span className="clap--count-total">{total}</span>
    </button>
  )
}
export default ClapButton