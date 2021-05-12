import { useState } from 'react';
import './CleanImage.css';

const CleanImage : React.FC<{ source : string, size? : { x : number, y : number }, blur? : boolean}> = ({ source, size, blur }) => {
    const [ shouldDisplay, setShouldDisplay ] = useState(false);
    return (
        <div className="clean-image-container">
            <div className="fake-img" style={{ display : (shouldDisplay) ? undefined : "hidden" }}/>
            <img className="clean-image-img" src={source} onLoadedData={() => setShouldDisplay(true)} onError={() => setShouldDisplay(false)} style={{ display : (shouldDisplay) ? "hidden" : undefined, filter : (blur ? "blur(4px)" : undefined), transform : (blur ? "scale(1.05)" : undefined) }}/>
        </div>
    );
};

export default CleanImage;
