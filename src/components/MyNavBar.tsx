import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Estágios", href: "estagio", current: false },
  { name: "Alunos", href: "#", current: false },
  { name: "Concedentes", href: "/grantors", current: false },
  { name: "Orientadores", href: "#", current: false },
];
const userNavigation = [
  { name: "Meu Perfil", href: "#" },
  { name: "Configurações", href: "#" },
  { name: "Sair", href: "#" },
];

export function MyNavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" className="shadow p-3 mb-5">
        <Container>
          <Navbar.Brand href="#home">ShipSystem</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigation.map((item, i) => (
                <Nav.Link key={i} href={item.href}>
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
