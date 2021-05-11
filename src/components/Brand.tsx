import './Brand.css';

const Brand : React.FC<{ visible? : boolean }> = ({ visible }) => {
    return (
        <div className="brand-container" style={{ display : (visible ? undefined : 'none')  }}>
            <img src="/assets/icon/icon.png"/>
        </div>
    );
};

export default Brand;
