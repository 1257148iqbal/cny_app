import React from 'react';
import { Col, Row } from 'reactstrap';

const InventorySettings = () => {
    return (
        <div className='settings-main-section'>
            <div className='settings-main-content-heading'>
                <span className='settings-content-header-text'>Inventory Settings</span>
            </div>
            <Row>
                <Col>
                    {/* <Label className="font-weight-bolder mr-1"> Default UOM</Label> */}
                    {/* <div className='d-flex ml-1'>
                        <div>
                            <Label className="font-weight-bolder mr-1"> Default UOM</Label>
                        </div>
                        <div>
                            <Input bsSize="sm" />
                        </div>
                        <div>
                            <Button size="sm">
                                Save
                            </Button>
                        </div>
                    </div> */}

                </Col>
            </Row>
        </div>
    );
};

export default InventorySettings;
