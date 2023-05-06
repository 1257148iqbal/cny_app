import React from 'react';
import { Progress } from 'reactstrap';

export default class AutoProgress extends React.Component {
    constructor( props ) {
        super( props );

        // initialize state
        this.state = {
            value: 100 // in percent as max === 100
        };
    }

    setProgress( percent ) {
        this.setState( { value: percent } );
    }

    render() {
        return (
            <div style={{ width: '98%' }}>

                <Progress
                    // max="100" // -> value = 0..100%
                    //style={{ backgroundSize: '2rem' }}
                    striped
                    animated
                    color="primary"
                    value={this.state.value}
                >Loading...</Progress>
            </div>

        );
    }
}