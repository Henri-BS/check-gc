import { Client, ClientAccount } from "./client";
import { Debt } from "./debt";
import { Paid } from "./paid";
import { Product } from "./product";

export type Page = {
    content: Client[] | ClientAccount[] | Debt[] | Product[] | Paid[];
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

  export type Props = {
    id: string;
  }