import React, {FC} from 'react'

interface TetragonProps {
  width: number,
  height: number,
  background: string,
  children?: JSX.Element | JSX.Element[];
}

const Tetragon: FC<TetragonProps> = ({width, height, background, children}) => {
  return (
    <div style={{width: `${width}px`, height: `${height}px`, background: `${background}`}}>
      {children}
    </div>
  )
};

export default Tetragon;