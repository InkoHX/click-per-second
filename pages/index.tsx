import { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { Overlay, OverlayContainer } from '../components'

const Page: NextPage = () => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const clickPerSecond = useMemo(() => {
    const result = Math.round(clickCount / time * 20) / 20

    if (!Number.isNaN(result) && Number.POSITIVE_INFINITY !== result) return result
    else return 0
  }, [clickCount, time])

  const clickHandler = () => {
    if (!running) {
      setTime(0)
      setRunning(true)
      setClickCount(1)
    } else {
      setClickCount(current => current + 1)
    }
  }

  useEffect(() => {
    if (running) {
      const intervalID = setInterval(() => setTime(current => current + 1), 1000)

      return () => clearInterval(intervalID)
    }
  }, [running])

  useEffect(() => {
    if (time !== 10) return

    setRunning(false)
    setOverlay(true)
  }, [time])

  return (
    <div id='main'>
      <p>クリックした回数: {clickCount}</p>
      <p>測定終了まであと: {time}秒</p>
      <p>CPS: {clickPerSecond}</p>
      <button className='targetButton' onClick={clickHandler}>クリック</button>
      <Overlay display={overlay}>
        <OverlayContainer>
          <p className='overlayTitle'>
            あなたは一秒間に<strong>{clickPerSecond}回</strong>クリックしました。
          </p>
          <p>{time}秒でクリックした回数: <strong>{clickCount}回</strong></p>
          <p>測定時間: <strong>{time}秒</strong></p>
          <div className='retryButton'>
            <button onClick={() => setOverlay(false)}>もう一度測定する</button>
          </div>
        </OverlayContainer>
      </Overlay>
      <style jsx>{`
        .targetButton {
          padding: 10rem;
        }

        .overlayTitle {
          text-align: center;
          font-size: 1.5rem;
          margin: 0;
        }

        .retryButton {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Page
