import http from "../http-commnon";
import { IGrantorData } from "../types/Grantor";

const getAll = () => {
  return http.get<Array<IGrantorData>>("/grantor");
};

const save = (grantorData: IGrantorData) => {
  return http.post("/grantor", grantorData);
};

const GrantorService = {
  getAll,
  save,
};

export default GrantorService;
