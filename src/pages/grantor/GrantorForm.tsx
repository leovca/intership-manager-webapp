import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Title } from "../../components/Title";
import { IGrantorData } from "../../types/Grantor";
import GrantorService from "../../services/GrantorService";
import { useNavigate } from "react-router-dom";

export function GrantorForm() {
  const navigate = useNavigate();

  const [grantor, setGrantor] = useState<IGrantorData>({
    documentType: "CNPJ",
  } as IGrantorData);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setGrantor({ ...grantor, [name]: value });
  };

  const save = async () => {
    try {
      await GrantorService.save(grantor);
      navigate("/grantors");
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    navigate("/grantors");
  };

  return (
    <>
      <Title title={"Cadastro de Concedente"} />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          save();
        }}
      >
        <Card className="shadow rounded-0 mb-4">
          <Card.Header>Dados Gerais</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nome"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nome Legal</Form.Label>
              <Form.Control
                name="legalName"
                type="text"
                placeholder="Nome Legal"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control
                as="select"
                onChange={handleChange}
                name="documentType"
              >
                <option>CPF</option>
                <option>CNPJ</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Número do Documento</Form.Label>
              <Form.Control
                name="documentNumber"
                type="text"
                placeholder="Número do Documento"
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="shadow rounded-0 mb-4">
          <Card.Header>Endereço</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                name="address"
                type="text"
                placeholder="Endereço"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Número</Form.Label>
              <Form.Control
                name="addressNumber"
                type="text"
                placeholder="Número"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                name="addressComplement"
                type="text"
                placeholder="Complemento"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                name="neighborhood"
                type="text"
                placeholder="Bairro"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                name="city"
                type="text"
                placeholder="Cidade"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                name="state"
                type="text"
                placeholder="Estado"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>CEP</Form.Label>
              <Form.Control
                name="zipCode"
                type="text"
                placeholder="CEP"
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="shadow rounded-0 mb-4">
          <Card.Header>Contato</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Telefone"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Celular</Form.Label>
              <Form.Control
                name="cellphone"
                type="text"
                placeholder="Celular"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="E-mail"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Site</Form.Label>
              <Form.Control
                name="site"
                type="text"
                placeholder="Site"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Nome do Contato</Form.Label>
              <Form.Control
                name="contactName"
                type="text"
                placeholder="Nome do Contato"
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Card className="shadow rounded-0 mb-4">
          <Card.Header>Outras Opções</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Observações</Form.Label>
              <Form.Control
                name="observation"
                as="textarea"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Ativo</Form.Label>
              <Form.Check
                name="active"
                type="checkbox"
                onChange={handleChange}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        <Button type="submit" className="m-1">
          Salvar
        </Button>
        <Button className="btn-secondary m-1" onClick={cancel}>
          Cancelar
        </Button>
      </Form>
    </>
  );
}
