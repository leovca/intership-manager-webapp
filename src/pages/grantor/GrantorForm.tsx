import Form from "react-bootstrap/Form";
import { Title } from "../../components/Title";

export function GrantorForm() {
  return (
    <>
      <Title title={"Cadastro de Concedente"} />
      <Form>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>
      </Form>
    </>
  );
}
