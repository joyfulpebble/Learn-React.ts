import React, { useState } from 'react'

export default function Events() {
  const [value, setValue] = useState<string>('')

  function changeFirst(event: React.ChangeEvent<HTMLInputElement>) {
    return setValue(event.target.value);
  } 

  function clickFirst() {
    console.log(value);
  }
  return (
    <div>
      <input value={value} onChange={changeFirst} type="text" />
      <button onClick={clickFirst}>Click</button>

      <div>{}</div>
    </div>
  )
}