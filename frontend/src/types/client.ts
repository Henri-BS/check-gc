export type Client = {
    clientId: number;
    name: string; 
    phoneNumber: string;
    address: string;
}

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
}