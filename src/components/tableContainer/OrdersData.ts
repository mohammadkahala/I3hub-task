import {OrderStatus} from "../tableTabs/TableTabs";
import {Order} from "../tableContent/TableContent";

export const TABS: OrderStatus[] = [OrderStatus.pending, OrderStatus.onTheWay, OrderStatus.delivered];

export const ORDERS: Order[] = [
    { id: 1, name: 'lorem1', status: OrderStatus.pending},
    { id: 2, name: 'lorem2', status: OrderStatus.pending},
    { id: 3, name: 'lorem3', status: OrderStatus.pending},
    { id: 4, name: 'lorem4', status: OrderStatus.pending},
    { id: 5, name: 'lorem5', status: OrderStatus.pending},
    { id: 6, name: 'lorem6', status: OrderStatus.pending},
    { id: 7, name: 'lorem7', status: OrderStatus.pending},
    { id: 8, name: 'lorem8', status: OrderStatus.pending},
    { id: 9, name: 'lorem9', status: OrderStatus.pending},
    { id: 10, name: 'lorem10', status: OrderStatus.onTheWay},
    { id: 11, name: 'lorem11', status: OrderStatus.onTheWay},
    { id: 12, name: 'lorem12', status: OrderStatus.onTheWay},
    { id: 13, name: 'lorem13', status: OrderStatus.onTheWay},
    { id: 14, name: 'lorem14', status: OrderStatus.onTheWay},
    { id: 15, name: 'lorem15', status: OrderStatus.onTheWay},
    { id: 16, name: 'lorem16', status: OrderStatus.onTheWay},
    { id: 17, name: 'lorem17', status: OrderStatus.delivered},
    { id: 18, name: 'lorem18', status: OrderStatus.delivered},
    { id: 19, name: 'lorem19', status: OrderStatus.delivered},
    { id: 20, name: 'lorem20', status: OrderStatus.delivered},
    { id: 21, name: 'lorem21', status: OrderStatus.delivered},
    { id: 22, name: 'lorem22', status: OrderStatus.delivered},
    { id: 23, name: 'lorem23', status: OrderStatus.delivered},
    { id: 24, name: 'lorem24', status: OrderStatus.delivered},
    { id: 25, name: 'lorem25', status: OrderStatus.delivered},
    { id: 26, name: 'lorem26', status: OrderStatus.delivered},
    { id: 27, name: 'lorem27', status: OrderStatus.delivered},
    { id: 28, name: 'lorem28', status: OrderStatus.delivered},
];