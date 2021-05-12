import './Brand.css';

const Brand : React.FC<{ visible? : boolean, size? : number, onClick? : () => void }> = ({ visible, size, onClick }) => {
    return (
        <div className="brand-container" style={{ display : (visible ? undefined : 'none'), height : size, width : size }} onClick={onClick}>
            <img src="/assets/icon/icon.png"/>
        </div>
    );
};

export default Brand;
