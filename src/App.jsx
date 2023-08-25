import { useState } from 'react'
import FlagCards from './Components/FlagCards'
import HeaderBar from './Components/HeaderBar'

function App() {
  const [searchData, setSearchData] = useState()
  return (
    <>
      <HeaderBar pageHeading={'Where in the World?'} setSearchData={setSearchData}/>
      <FlagCards searchData={searchData}/>
    </>
  )
}

export default App
