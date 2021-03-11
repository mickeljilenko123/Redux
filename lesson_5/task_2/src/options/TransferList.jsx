import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
    return (
        <div className="transfer-list">
            <AvailableOptions title="Available otions"/>
            <SelectedOptions title="Selectid otions"/>
        </div>
    );
};

export default TransferList;