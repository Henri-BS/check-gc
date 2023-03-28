export type Paid = {
  paidId: number;
  paymentDate: string;
  paymentType: string;
  productQuantity: number;
  productAmount: number;
  clientName: string;
  productDescription: string;
};

export type PaidPage = {
  content: Paid[];
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

export type PaidProps = {
  paidId: string;
}
