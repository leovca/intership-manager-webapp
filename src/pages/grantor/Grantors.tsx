import { Title } from "../../components/Title";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
import GrantorService from "../../services/GrantorService";
import { IGrantorData } from "../../types/Grantor";

export function Grantors() {
  const [grantorList, setGrantorList] = useState<Array<IGrantorData>>([]);

  async function retrieveGrantos() {
    const response = await GrantorService.getAll();
    setGrantorList(response.data);
  }

  useEffect(() => {
    retrieveGrantos();
  }, []);

  return (
    <>
      <Title title={"Concedentes"} />
      <Button href="grantors/new" variant="primary">
        Novo
      </Button>
      <Table striped bordered responsive>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Nome</th>
            <th>Nome Legal</th>
            <th>Tipo</th>
            <th>Documento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {grantorList.map((grantor) => (
            <tr key={grantor.id}>
              {/* <td>{grantor.id}</td> */}
              <td>{grantor.name}</td>
              <td>{grantor.legalName}</td>
              <td>{grantor.documentType}</td>
              <td>{grantor.documentNumber}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
