import React from "react";
import './TableTabs.css';

export enum OrderStatus {
    'pending' = 'Pending',
    'onTheWay' = 'On The Way',
    'delivered' = 'Delivered',
}

interface OwnProps {
    tabs: OrderStatus[];
    selectedTab: OrderStatus;
    handleChange: (clickedTab: OrderStatus) => void;
}

const TableTabs = ({ tabs, selectedTab, handleChange }: OwnProps) => (
    <div className='Table-tabs-wrapper'>
        {tabs?.map(tab => (
            <span
                id={tab}
                className={`Table-tab ${tab === selectedTab && 'Table-tab-selected'}`}
                onClick={() => handleChange(tab)}
            >
                {tab}
            </span>
        ))}
    </div>
);

export default TableTabs;