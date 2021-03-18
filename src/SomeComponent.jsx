import React, { useContext } from 'react'
import { ModalContext } from './App'

export default function SomeComponent() {
  const showModal = useContext(ModalContext)

  const showWarning = () => {
    showModal(WarningModal, { text: 'Are you ready' })
  }

  return <button onClick={showWarning}>ShowWarning</button>
}

const WarningModal = (props) => {
  return (
    <div>
      <button onClick={props.onclose}>
        x
      </button>
      <div>
        {props.text}
      </div>
    </div>
  )
}
