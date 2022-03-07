import React, {useState} from "react";
import TableTabs, {OrderStatus} from "../tableTabs/TableTabs";
import TableContent from "../tableContent/TableContent";
import { TABS, ORDERS } from './OrdersData';

const TableContainer = () => {
    const [selectedTab, setSelectedTab] = useState<OrderStatus>(OrderStatus.pending);

    return (
        <>
            <TableTabs
                tabs={TABS}
                selectedTab={selectedTab}
                handleChange={setSelectedTab}
            />
            <TableContent
                orderList={ORDERS.filter(order => order.status === selectedTab)}
            />
        </>
    );
};

export default TableContainer;
