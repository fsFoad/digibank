export interface ContactInfo {
  contactTypeGroups:string;
  contactTypes:string;
  discContact:string;
  // startDate:number;
  // endDate:number;
}
export interface AddressInfo {
  contactTypes:string;
  province:string;
  city:string;
  desAddress:string;
  mantaghe:string;
  postalCode:string;
  phoneNumber:string;
  // nahveTasarofs:string;
  // startDate:number;
  // endDate:number;
}
export interface RegistrationInfo {
  erjaCode:number;
  nationalCode:number;
  title:string;
  erjaCodeZinaf:number;
  nationalCodeAtba:number;
  postType:string;
  LimitsAuthority:string;
  startDate:number;
  endDate:number;
}
export interface Bills {
  id:number;
  accountNumber: string;
  history: string;
  branchName: string;
  yektaCode: string;
  debtor: string;
  depositor: string;
  check: string;
  amounts: string;
  donDate: string;
  amount: number;
  creditor: string;
  operationType: string;
  desTransaction: string;
  priority: string;
  financialHeading: string;
}

