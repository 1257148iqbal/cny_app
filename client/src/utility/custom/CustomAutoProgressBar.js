import React, { useState } from 'react';
import { Progress } from 'reactstrap';


const CustomAutoProgressBar = () => {
    const [state, setState] = useState( 100 );
    return (
        <div style={{ width: '98%' }}>

            <Progress
                // max="100" // -> value = 0..100%
                //style={{ backgroundSize: '2rem' }}
                striped
                animated
                color="primary"
                value={state}
            > Loading...</Progress>
        </div>
    );
};

export default CustomAutoProgressBar;

