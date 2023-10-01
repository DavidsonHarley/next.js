'use client'


export default function  ErrorWrapper({error}: {error:Error}) {
  return (
    <div><h1>ooops!!! {error.message}</h1></div>
  )
}
