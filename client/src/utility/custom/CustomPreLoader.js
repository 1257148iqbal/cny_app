import "@custom-styles/basic/preLoader.scss";
const CustomPreLoader = () => {
    return (
        <div className="container center" >
            <div className="inline-loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default CustomPreLoader;
