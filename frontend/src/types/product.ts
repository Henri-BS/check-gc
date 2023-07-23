export type Product = {
    productId: number;
    description: string;
    price: number;
    debtQuantity: number;
}

export type ProductPage = {
    content: Product[];
    last?: boolean;
    totalElements?: number;
    totalPages?: number;
    size?: number;
    number: number;
    first?: boolean;
    numberOfElements?: number;
    empty?: boolean;
    pageNumber?: number;
}

export type ProductProps = {
    product: Product;
}