export type Debt = {
  debtId: number;
  debtDate: string;
  debtDays: string;
  chargeDate: string;
  discount: number;
  productQuantity: number;
  productAmount: number;
  clientId: number;
  clientName: string;
  product: number;
  productDescription: string;
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
  debt: Debt
}

export type DebtByDate = {
  productQuantity: number;
  debtDate: string;
  productAmount: number;
  clientName: string;
}