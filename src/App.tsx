import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { appProvider, useCommonStore } from './store/common/context.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [store, dispatch] = useCommonStore()

  useEffect(() => {
    console.log(store, 'store')
  }, [store.num])

  const addNumber = () => {
    dispatch({
      type: 'ADD_NUMBER',
      payload: store.num + 1
    })
  }

  return (
    <div className="App">
      <div onClick={addNumber}>+</div>
    </div>
  )
}

export default appProvider(App)
