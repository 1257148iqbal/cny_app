import React, { Fragment } from 'react';
import TodoSidebar from './permission-test/list/Sidebar';
import Tasks from './permission-test/list/Tasks';

const TestPage2 = () => {
    return (
        <Fragment>
            {/* <Row>


                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle tag="h5">Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>


            </Row> */}
            <div style={{ width: '30%', background: 'white' }}>
                <TodoSidebar
                />
            </div>

            <div style={{ width: '100%' }}>
                <Tasks />

            </div>


        </Fragment>
    );
};

export default TestPage2;
