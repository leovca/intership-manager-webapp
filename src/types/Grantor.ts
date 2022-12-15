export interface IGrantorData {
  id?: string | null;
  name: string;
  legalName?: string;
  documentType: string;
  documentNumber: string;

  address: string;
  addressNumber: string;
  addressComplement?: string;
  addressNeighborhood: string;
  addressCity: string;
  addressState: string;
  addressZipCode: string;

  phoneNumber?: string;
  cellPhoneNumber?: string;
  email?: string;
  site?: string;
  contactName: string;

  active: boolean;
  observation?: string;

  createdAt: string;
  updatetedAt: string;
}
