import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { notFound } from "./pages/NotFound"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={Home}/>
          <Route path="*" element= {notFound}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
