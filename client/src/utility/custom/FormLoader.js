import { Spinner } from "reactstrap";

const FormLoader = ( { hidden } ) => {
    return (
        <>
            {!hidden && (
                <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ height: '120px', width: '100%' }}
                >
                    <Spinner color="success" />
                </div>
            )}
        </>
    );
};

export default FormLoader;