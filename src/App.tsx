import "./App.css";
import { MyNavBar } from "./components/MyNavBar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Grantors } from "./pages/grantor/Grantors";
import { Container } from "react-bootstrap";
import { GrantorForm } from "./pages/grantor/GrantorForm";

const estagio = () => <h1>Estágio</h1>;

function App() {
  return (
    <Router>
      <MyNavBar />
      <Container>
        <Routes>
          <Route path="/estagio" element={estagio}></Route>
          <Route path="/alunos" element={<h1>Alunos</h1>}></Route>
          <Route path="/grantors" element={<Grantors />}></Route>
          <Route path="/grantors/new" element={<GrantorForm />}></Route>
          <Route path="/" element={<h1>Dashboard</h1>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
