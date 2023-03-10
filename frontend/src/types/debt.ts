export type Debt = {
  debtId: number;
  debtDate: string;
  productQuantity: number;
  productAmount: number;
  clientId: number;
  clientName: string;
  product: number;
  status: string;
};

export type DebtPage = {
  content: Debt[];
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

export type DebtProps = {
  debtId: string;
}

export type Status = {
  statusId: string;
}