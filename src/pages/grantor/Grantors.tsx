import { Title } from "../../components/Title";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { useState, useEffect, useRef } from "react";
import GrantorService from "../../services/GrantorService";
import { IGrantorData } from "../../types/Grantor";

export function Grantors() {
  const [grantorList, setGrantorList] = useState<Array<IGrantorData>>([]);
  const dataFetchedRef = useRef(false);

  async function retrieveGrantos() {
    const response = await GrantorService.getAll();
    setGrantorList(response.data);
  }

  useEffect(() => {
    if (!dataFetchedRef.current) {
      dataFetchedRef.current = true;
      retrieveGrantos();
    }
  }, []);

  return (
    <>
      <Title title={"Concedentes"} />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end p-1">
        <Button href="grantors/new" variant="primary">
          Novo
        </Button>
      </div>
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
