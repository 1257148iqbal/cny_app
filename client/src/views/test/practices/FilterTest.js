// import ArrayValidation from '../views/test/validations/react-hook-form/ArrayValidation';
import _ from 'lodash';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Input, Row } from 'reactstrap';
const sizeColor = [
    {
        styleId: "045515b0-8ad8-443a-8850-1e8b06c13ac7",
        styleNo: "S-0002",
        sizeId: "7fa96244-5b2c-4684-a8bc-6bc9bfc994d1",
        size: "X",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Gray",
        quantity: 0
    },
    {
        styleId: "045515b0-8ad8-443a-8850-1e8b06c13ac7",
        styleNo: "S-0002",
        sizeId: "6f6b6c74-cf49-4ad4-a86a-ab06138efa9e",
        size: "S",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Gray",
        quantity: 0
    },
    {
        styleId: "045515b0-8ad8-443a-8850-1e8b06c13ac7",
        styleNo: "S-0002",
        sizeId: "21fc5670-659c-41de-bb74-ff43f4465ab9",
        size: "M",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Red",
        quantity: 0
    },
    {
        styleId: "cbc756a2-089d-40f6-bbcb-2a1af6745cf8",
        styleNo: "S-0001",
        sizeId: "7fa96244-5b2c-4684-a8bc-6bc9bfc994d1",
        size: "X",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Gray",
        quantity: 0
    },
    {
        styleId: "cbc756a2-089d-40f6-bbcb-2a1af6745cf8",
        styleNo: "S-0001",
        sizeId: "6f6b6c74-cf49-4ad4-a86a-ab06138efa9e",
        size: "S",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Blue",
        quantity: 0
    },
    {
        styleId: "cbc756a2-089d-40f6-bbcb-2a1af6745cf8",
        styleNo: "S-0001",
        sizeId: "21fc5670-659c-41de-bb74-ff43f4465ab9",
        size: "M",
        colorId: "72fd63ac-c91f-4f4d-9a9b-7d6abdd0c21e",
        color: "Gray",
        quantity: 0
    }
];
const FilterTest = () => {
    const [colorSize, setColorSize] = useState( sizeColor );
    const uniData = _.uniqBy( colorSize, 'sizeId' );
    const handleQuantityOnChange = ( e, sizeId ) => {
        const { name, value } = e.target;
        const updatedData = colorSize.map( size => {
            if ( sizeId === size.sizeId ) {
                size[name] = Number( value );
            }
            return size;
        } );
        setColorSize( updatedData );
    };
    const [filterObj, setFilterObj] = useState( {
        styleNo: '',
        color: ''
    } );
    const handleFilter = ( e ) => {
        const { name, value, type } = e.target;
        setFilterObj( {
            ...filterObj,
            [name]: type === 'number' ? Number( value ) : value
        } );
    };
    const randersData = () => {
        let filtered = [];
        if ( filterObj.styleNo.length
            || filterObj.color.length
        ) {
            filtered = colorSize.filter(
                wh => wh.styleNo?.toLowerCase().includes( filterObj.styleNo?.toLowerCase() ) &&
                    wh.color?.toLowerCase().includes( filterObj.color?.toLowerCase() )
            );
        } else {
            filtered = colorSize;
        }
        return filtered;
    };
    return (
        <>
            <div >

            </div>

            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <DataTable
                                // subHeader
                                // subHeaderComponent={}
                                pagination

                                noHeader
                                responsive
                                data={randersData()}
                                className='react-custom-dataTable'
                                persistTableHead
                                dense
                                onColumnOrderChange={cols => console.log( cols )}
                                paginationTotalRows={randersData().length}
                                onSort={( selectedColumn, sortDirection ) => { console.log( sortDirection ); }}
                                columns={[
                                    {
                                        id: row => row.styleNo,
                                        name:
                                            <div>
                                                <div className='text-center'>
                                                    <label >
                                                        Style No
                                                    </label>
                                                </div>

                                                <Input
                                                    id="styleNoId"
                                                    name="styleNo"
                                                    onChange={( e ) => { handleFilter( e ); }}
                                                    bsSize="sm"
                                                    placeholder="Style NO"
                                                />
                                            </div>,
                                        width: '200px',
                                        center: true,
                                        selector: row => row.styleNo,
                                        cell: ( row, index ) => row.styleNo

                                    },


                                    {
                                        id: row => row.color,
                                        name: "Color",
                                        reorder: true,
                                        minWidth: '100px',
                                        selector: row => row.color,
                                        cell: row => row.color,
                                        sortable: true
                                    }

                                ]}
                            />
                        </Col>
                        <Col>


                        </Col>
                    </Row>

                </CardBody>
            </Card>

        </>
    );
};
export default FilterTest;
