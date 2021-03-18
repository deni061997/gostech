import React from 'react'

export default function Context() {
  const [modal, setModal] = React.useState(null)

  const handleClose = () => {
    setModal(null)
  }

  const showModal = (component, modalProps) => {
    setModal(React.createElement(component, {
      onclose: handleClose,
      ...modalProps
    }))
  }
  
  return [modal, showModal]
}
