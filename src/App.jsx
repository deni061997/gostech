import { createContext } from 'react'
import Context from './Context';
import SomeComponent from './SomeComponent'

export const ModalContext = createContext(null)

function App() {
  const [modal, showModal] = Context()

  return (
    <ModalContext.Provider value={showModal} className="App">
      <SomeComponent/>
      {modal}
    </ModalContext.Provider>
  );
}

export default App;
