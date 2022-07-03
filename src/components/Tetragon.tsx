import React from 'react'

interface TetragonProps {
  width: number,
  height: number,
  background: string,
  children?: JSX.Element | JSX.Element[],
  onClick: () => void,
}

const Tetragon = ({width, height, background, children, onClick}: TetragonProps) => {
  return (
    <div style={{
      width: `${width}px`, 
      height: `${height}px`, 
      background: `${background}`}} 
      onClick={() => onClick()}
      >

      {children}
    </div>
  )
};

export default Tetragon;