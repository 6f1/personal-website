import { useState, useEffect } from 'react';
import './Brand.css';

const Brand : React.FC<{ visible? : boolean, size? : number, onClick? : () => void }> = ({ visible, size, onClick }) => {
    return (
        <div className="brand-container" style={{ display : ((visible) ? undefined : 'none'), height : size, width : size }} onClick={onClick}>
            <div className="img"/>
        </div>
    );
};

export default Brand;
