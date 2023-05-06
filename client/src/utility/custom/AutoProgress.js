import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'reactstrap';

const AutoProgress = () => {
    const { progressValue } = useSelector( ( { fileProgress } ) => fileProgress );
    console.log( progressValue );
    return (
        <div style={{ width: '98%' }}>
            <Progress
                striped
                animated
                color="primary"
                value={progressValue}
            >{progressValue}</Progress>
        </div>
    );
};

export default AutoProgress;
