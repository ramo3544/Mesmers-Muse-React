import { useState } from 'react'
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { MistsOfAvery } from "./Pages/MistsOfAvery.jsx";
import { Layout } from "./components/layout.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/mists-of-avery" element={<MistsOfAvery/>}/>
              </Route>
          </Routes>
      </Router>
  )
}

export default App
