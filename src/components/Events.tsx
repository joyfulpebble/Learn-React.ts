import React, { useRef, useState } from 'react'

export default function Events() {
  // const [value, setValue] = useState<string>('');
  // const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  // function changeFirst(event: React.ChangeEvent<HTMLInputElement>) {
  //   return setValue(event.target.value);
  // } 
  function clickFirst() {
    console.log(inputRef.current?.value);
  }

  // function dragHandler(element: React.DragEvent<HTMLDivElement>){
  //   element.preventDefault();
  //   console.log('rdag');
    
  // }
  // function dropHandler(element: React.DragEvent<HTMLDivElement>){
  //   element.preventDefault();
  //   setIsDrag(false);
  //   console.log('dorp');
    
  // }
  // function dragLeave(element: React.DragEvent<HTMLDivElement>){
  //   element.preventDefault();
  //   setIsDrag(false);
  // }
  // function dragOver(element: React.DragEvent<HTMLDivElement>){
  //   element.preventDefault();
  //   setIsDrag(true);
  // }
  return (
    <div>
      {/* <input value={value} onChange={changeFirst} type="text"/>
      <button onClick={clickFirst}>Click</button> */}
      <input ref={inputRef} type="text"/>
      <button onClick={clickFirst}>Click</button>
      {/* <div onDrag={dragHandler} draggable={true} style={{width: 100, height: 100, background: 'black'}}></div>
      <div 
        onDrop={dropHandler} 
        onDragLeave={dragLeave} 
        onDragOver={dragOver} 
        style={{width: 100, height: 100, background: isDrag ? 'white' : 'black', marginTop: 20}}></div> */}
    </div>
  )
}