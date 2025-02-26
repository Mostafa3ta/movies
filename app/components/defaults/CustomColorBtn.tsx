import React, { MouseEventHandler } from 'react'

export default function CustomColorBtn({style, text, type, onClick}: {style?: string, text?: string, type?: "button" | "submit" | "reset" | undefined, onClick?:MouseEventHandler<HTMLButtonElement> | undefined }) {
  return (
    <button onClick={onClick} type={type || 'button'} className={`${style || ''} text-white font-medium hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg dark:shadow-lg bg-gradient-to-r rounded-full duration-150 text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6`}>{text || 'Find Out More!'}</button>
)
}
