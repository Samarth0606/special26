import React from 'react'
import First from './Components/First'
import Bhaukaal from './Components/Important'
// import { Important, Important2 } from './Components/Important'
// import Important from './Components/Important'
// import { Important } from './Components/Important'
import Person from './Components/Person'
import Samm from './Components/Samm'

const App = () => {
  return (
    <div>
      <Person name="bob" age="50" girl="olive-18" />
      <Person name="the" age="20" girl="olive-21" />
      <Person name="builder" age="30" girl="olive-23" />
      <Samm />
      {/* <Important /> */}
      {/* <Important />
      <Important2 */}
      <Bhaukaal />
      <First />
      
    </div>
  )
}

export default App