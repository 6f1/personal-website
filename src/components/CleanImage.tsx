import { useState } from 'react';
import './CleanImage.css';

const CleanImage : React.FC<{ source : string, size? : { x : number, y : number } }> = ({ source, size }) => {
    const [ shouldDisplay, setShouldDisplay ] = useState(false);

    return (
        <div className="clean-image-container">
            <div className="fake-img" style={{ display : (shouldDisplay) ? undefined : "hidden" }}/>
            <img src={source} onLoad={() => setShouldDisplay(true)} onError={() => setShouldDisplay(false)} style={{ display : (shouldDisplay) ? "hidden" : undefined }}/>
        </div>
    );
};

export default CleanImage;
