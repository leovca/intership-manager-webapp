import http from "../http-commnon";
import { IGrantorData } from "../types/Grantor";

const getAll = () => {
  return http.get<Array<IGrantorData>>("/grantor");
};

const GrantorService = {
  getAll,
};

export default GrantorService;
