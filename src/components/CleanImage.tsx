import { useState, useEffect } from 'react';
import './CleanImage.css';

const CleanImage : React.FC<{ source : string, size? : { x : number, y : number }, blur? : boolean }> = ({ source, size, blur }) => (
    <div className="clean-image-container">
        <div className="fake-img"/>
        <div 
            className="clean-image-img" 
            style={{ 
                backgroundImage : "url("+source+")", 
                filter : (blur ? "blur(4px)" : undefined), 
                transform : (blur ? "scale(1.05)" : undefined) 
            }}
        />
    </div>
);

export default CleanImage;
