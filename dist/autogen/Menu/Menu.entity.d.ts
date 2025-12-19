import { Order } from '../Order/Order.entity';
export declare class Menu {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    orders: Order[];
}
