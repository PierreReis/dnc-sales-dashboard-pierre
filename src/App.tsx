import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>HOME</>} />
        <Route path="/cadastro" element={<>CADASTRO</>} />
        <Route path="/login" element={<>LOGIN</>} />
        <Route path="/leads" element={<>LEADS</>} />
        <Route path="/perfil" element={<>PERFIL</>} />
      </Routes>
    </Router>
  )
}

export default App
