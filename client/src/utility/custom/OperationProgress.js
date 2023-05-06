import React from 'react';
import { Spinner } from 'reactstrap';

const OperationProgress = ( { progress } ) => {
    return (
        <>
            {progress && (
                <div
                    className='d-flex justify-content-center align-items-center'>
                    <Spinner
                        color="info"
                        size="sm"
                        type="grow"
                    />
                </div>
            )
            }
        </>

    );
};

export default OperationProgress;