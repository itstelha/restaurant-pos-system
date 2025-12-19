import { Menu } from '../Menu/Menu.entity';
import { Table } from '../Table/Table.entity';
import { Payment } from '../Payment/Payment.entity';
export declare class Order {
    id: number;
    table_id: number;
    status: string;
    menu: Menu;
    menuId: number;
    table: Table;
    tableId: number;
    payment: Payment;
}
