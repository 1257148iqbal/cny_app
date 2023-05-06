import React from 'react';
import SlideDown from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Card, CardBody } from 'reactstrap';

const AdvancedSearchBox = ( { children, isOpen } ) => {
    return (
        <div hidden={isOpen} className="search-box-root">
            <SlideDown>
                <Card  >
                    <CardBody>
                        {children}
                    </CardBody>

                </Card>
            </SlideDown>

        </div>

    );
};

export default AdvancedSearchBox;