export type Client = {
  clientId: number;
  name: string;
  phoneNumber: string;
  address: string;
  account: ClientAccount;
};

export type ClientPage = {
  content: Client[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number: number;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
  pageNumber?: number;
};

export type ClientProps = {
    client: Client;
}

export type ClientAccount = {
  accountId: number;
  debtAmount: number;
  debtQuantity: number;
  paidAmount: number;
  paidQuantity: number;
  lastModifiedDate: string;
  clientName: string;
};

export type ClientAccountPage = {
  content: ClientAccount[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number: number;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
  pageNumber?: number;
};

export type AccountTotalValues = {
  debtAmount: number;
  debtMaxValue: number;
  debtQuantity: number;
  paidAmount: number;
  paidMaxValue: number;
  paidQuantity: number;
}