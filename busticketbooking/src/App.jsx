import { BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
    <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
      {/* Navbar */}
      <Navbar />
      

      {/* Routes */}
      {/* <Routes>

      <Route path="/" element={<div>home</div>}/>

      </Routes> */}

      {/* Footer */}
      footer
      </main>
    </>
  )
}

export default App
