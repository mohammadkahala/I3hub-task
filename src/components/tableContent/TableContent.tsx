import React from "react";
import './TableContent.css';
import {OrderStatus} from "../tableTabs/TableTabs";

export interface Order {
    id: number;
    name: string;
    status: OrderStatus;
}

interface OwnProps {
    orderList: Order[];
}

const TableContent = ({orderList}: OwnProps) => (
    <div className='Table-content-wrapper'>
        {orderList.map(order => (
            <p key={order.id} className='Table-content-order'>
                {order.name}
            </p>
        ))}
    </div>
);

export default TableContent;
