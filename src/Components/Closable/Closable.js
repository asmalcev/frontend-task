import React, { useState } from 'react'

import './Closable.css'

export default function Closable(props) {
  const { title, content } = props

  const [isOpen, setOpen] = useState(true)
  const contentBody = isOpen && content
  const buttonClass = isOpen ? 'ctrlBtn active' : 'ctrlBtn'

  return (
    <div className="closable">
      <h3>
        {title}
        <button
          className={buttonClass}
          onClick={() => setOpen(!isOpen)}
        />
      </h3>
      {contentBody}
    </div>
  )
}