import { BrowserRouter,Routes,Route } from "react-router-dom"
import Drawing from "./Components/Drawing"
import GetDrawing from "./screen/GetDrawing"


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/"  element={<Drawing datalines={""} />} />
        <Route path="/drawings/:id"  element={<GetDrawing/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App