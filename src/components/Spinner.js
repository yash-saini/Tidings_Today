import React from 'react'
import spinner from "./spinner.gif"
export default function Spinner() {
  return (
    <div className="text-center">
      <img src={spinner} alt="spinner" width="25" height="25"></img>
    </div>
  )
}
