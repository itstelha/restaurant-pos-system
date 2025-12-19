import { Order } from '../Order/Order.entity';
export declare class Table {
    id: number;
    number: number;
    capacity: number;
    status: string;
    orders: Order[];
}
