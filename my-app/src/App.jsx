import { useState } from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import { MesmersMuse } from "./Pages/Home.jsx";
import { MistsOfAvery } from "./Pages/MistsOfAvery.jsx";
import { Layout } from "./components/layout.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
          <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<MistsOfAvery/>}/>
                <Route path="/mesmers-muse" element={<MesmersMuse/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
