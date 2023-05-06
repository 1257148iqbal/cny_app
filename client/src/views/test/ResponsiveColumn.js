import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Col, Row } from 'reactstrap';
const ResponsiveColumn = () => {
    const [fabricDetails, setFabricDetails] = useState(
        [
            {
                id: 1,
                name: 'Fabric',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley',
                qty: 0
            },
            {
                id: 2,
                name: 'Trim',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley',
                qty: 0
            }
        ]
    );
    const handleDetailsOnChange = ( e, id ) => {
        const { name, value } = e.target;
        console.log( value );
        console.log( Number( value ) );
        console.log( typeof ( value ) );
        const updatedData = fabricDetails.map( fabric => {
            if ( fabric.id === id ) {
                fabric[name] = value === '.' ? value : Number( value );
            }
            return fabric;
        } );
        setFabricDetails( updatedData );
    };
    return (
        <div>
            <Row>

                <Col xs={12}>
                    <DataTable
                        responsive
                        noHeader
                        subHeader={false}
                        data={fabricDetails}
                        className="react-custom-dataTable"
                        columns={[
                            {
                                id: 'name',
                                name: 'Name',
                                width: '100px',
                                selector: 'name'
                            },
                            {
                                id: 'description',
                                name: 'Description',
                                width: '200px',
                                selector: 'description'

                            },
                            {
                                id: 'cs',
                                name: 'Description',
                                minWidth: '120px',
                                selector: 'description',

                                sortable: true,

                                cell: row => row.description
                            }
                        ]}

                    />
                </Col>

            </Row>

        </div>
    );
};

export default ResponsiveColumn;