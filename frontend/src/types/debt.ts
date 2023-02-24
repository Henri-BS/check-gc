export type Debt = {
  debtId: number;
  debtDate: string;
  productQuantity: number;
  productAmount: number;
  client: string;
  account: number;
  product: number;
  productDescription: string;
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
};
