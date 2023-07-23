export enum PRODUCT_ACTION_TYPES {
    FETCH_PRODUCT_START = 'product/FETCH_PRODUCT_START',
    FETCH_PRODUCT_SUCCESS = 'product/FETCH_PRODUCT_SUCCESS',
    FETCH_PRODUCT_FAILED = 'product/FETCH_PRODUCT_FAILED',
}

export type Product = {
    ProductID: number;
    ProductName: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: string;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: number;
};