import { Routes, Route } from "react-router-dom"
import NewsPage from "./pages/NewsPage"
import NavBar from "./components/layout/NavBar"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<NewsPage />} />
      
      </Routes>
    </>
  )
}

export default App