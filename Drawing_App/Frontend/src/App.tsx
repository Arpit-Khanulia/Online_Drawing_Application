import { BrowserRouter,Routes,Route } from "react-router-dom"
import Drawing from "./Components/Drawing"


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/"  element={<Drawing/>} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App