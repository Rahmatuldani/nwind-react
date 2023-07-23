export type Customer = {
    CustomerID: string;
    CompanyName: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    Fax?: string;
    Image?: Blob;
    ImageThumbnail?: Blob;
};

export enum CUSTOMER_ACTION_TYPES {
    FETCH_CUSTOMER_START = 'customer/FETCH_CUSTOMER_START',
    FETCH_CUSTOMER_SUCCESS = 'customer/FETCH_CUSTOMER_SUCCESS',
    FETCH_CUSTOMER_FAILED = 'customer/FETCH_CUSTOMER_FAILED',
}