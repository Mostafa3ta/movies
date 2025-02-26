import React, { ReactNode } from 'react'

export default function GridContainer({ cols, children, className }: { cols: number, children: ReactNode, className?: string }) {

  return (
    <div className={`grid grid-cols-${cols || '4'} ${className || ''}`}>{children}</div>
  )
}
