// import '@custom-styles/merchandising/others/custom-table.scss';
// import classNames from 'classnames';
// import React, { useState } from 'react';
// import Select from 'react-select';
// import CreatableSelect from 'react-select/creatable';
// import { Button, Card, CardTitle, Col, FormGroup, Label, Row, Table } from 'reactstrap';
// import CustomModal from '../../../utility/custom/CustomModal';
// import { selectThemeColors } from '../../../utility/Utils';
// import { getDropDownItemSubGroups } from '../../inventory/item-sub-group/store/actions';
// const selectGarmentsColor = [{ value: 1, label: 'Garments Color' }];
// const selectForAllGarmentsColor = [{ value: 1, label: 'All Garments Color' }];
// const selectGarmentsColorMapping = [
//     { value: 1, label: 'Color-1' },
//     { value: 2, label: 'Color-2' },
//     { value: 3, label: 'Color-3' }
// ];
// const selectSensitivityCategoryForColor = [
//     {
//         value: 1,
//         label: 'As per Gmt Color',
//         color: ['Green']

//     },
//     {
//         value: 2,
//         label: 'For All Gmt Color',
//         fmtColor: {
//             value: 1, label: 'yellow'
//         }
//     },
//     {
//         value: 3,
//         label: 'Color Mapping',
//         mapColor: [
//             { id: 1, gmtColor: 'Blue', elcColor: 'Black' },
//             { id: 2, gmtColor: 'Orange', elcColor: 'White' }
//         ]
//     }
// ];
// const selectSensitivityCategoryForSize = [
//     { value: 1, label: 'As per Gmt Size' },
//     { value: 2, label: 'For All Gmt Size' },
//     { value: 3, label: 'Size Mapping' }
// ];


// const SizeAndColorSensitivity2 = () => {


//     const [openModal, setOpenModal] = useState( false );
//     const [selectedColor, setSelectedColor] = useState( [] );

//     const [elasticColor, setElasticColor] = useState( "hi" );
//     const [elasticColor2, setElasticColor2] = useState();


//     const handleColorSegmentChange = ( data ) => {
//         console.log( data );
//         setSelectedColor( data );
//         setElasticColor( data?.color );
//         //setElasticColor2( data?.fmtColor.label );
//     };


//     const handleSegmentAssignModalClose = () => {
//         setOpenModal( !openModal );
//     };

//     const handleSegmentAssignModalSubmit = () => {
//         setOpenModal( !openModal );
//     };
//     // fsf
//     return (
//         <div>
//             <Button.Ripple color='primary' outline onClick={() => setOpenModal( !openModal )}>
//                 Size Color Sensitivity2
//             </Button.Ripple>
//             <CustomModal modalTypeClass='vertically-centered-modal'
//                 className='modal-dialog-centered modal-lg'
//                 openModal={openModal}
//                 setOpenModal={setOpenModal}
//                 title="Color Size Sensitivity"
//                 handleMainModelSubmit={handleSegmentAssignModalSubmit}
//                 handleMainModalToggleClose={handleSegmentAssignModalClose}
//             >
//                 <Row>
//                     <Col xl={6} lg={6} md={6} sm={6} xs={6}>
//                         <Card className="p-1">
//                             <CardTitle className="text-center" >
//                                 Color Sensitivity
//                             </CardTitle>
//                             <Row >
//                                 <FormGroup tag={Col} className="text-nowrap text-center">
//                                     <Label className="text-dark font-weight-bold" for='colorSensitivity'> Select Sensitivity Category</Label>
//                                     <CreatableSelect
//                                         id='colorSensitivity'
//                                         name='colorSensitivity'
//                                         isSearchable
//                                         isClearable
//                                         theme={selectThemeColors}
//                                         options={selectSensitivityCategoryForColor}
//                                         classNamePrefix='select '
//                                         value={selectedColor}
//                                         className={classNames( 'react-select' )}
//                                         onChange={data => {
//                                             handleColorSegmentChange( data );
//                                         }}

//                                     />

//                                 </FormGroup>

//                                 <FormGroup tag={Col} className="text-nowrap text-center">
//                                     <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Color </Label>
//                                     <CreatableSelect
//                                         id='itemSubGroupName'
//                                         isMulti
//                                         isSearchable
//                                         isClearable
//                                         isDisabled={true}
//                                         theme={selectThemeColors}
//                                         defaultInputValue={elasticColor}
//                                         // defaultInputValue={selectedColor?.value === 1 ? selectedColor?.map( i => i.color ) : selectedColor?.fmtColor?.label}
//                                         classNamePrefix='select'

//                                     />
//                                 </FormGroup>


//                             </Row>
//                             {
//                                 selectedColor?.mapColor &&
//                                 <Table responsive size="sm" bordered  >
//                                     <thead>

//                                         <tr className="thead-light"  >
//                                             <th className="text-nowrap">Gmt. Color</th>
//                                             <th className="text-nowrap pl-2">Elastic Color</th>
//                                         </tr>
//                                     </thead>

//                                     <tbody>

//                                         {
//                                             selectedColor?.mapColor?.map( i => (
//                                                 <tr key={i.id}>
//                                                     <td>{i.gmtColor}</td>
//                                                     <td>{i.elcColor}</td>
//                                                 </tr>
//                                             ) )
//                                         }
//                                         {/* <tr>
//              <td className="align-top ">
//                  data
//              </td>
//              <td className="align-top">
//                  data2
//              </td>
//          </tr>
//          <tr>
//              <td className="align-top ">
//                  data3
//              </td>
//              <td className="align-top">
//                  data4
//              </td>
//          </tr> */}
//                                     </tbody>
//                                 </Table>

//                             }


//                         </Card>
//                     </Col>
//                     <Col xl={6} lg={6} md={6} sm={6} xs={6}>
//                         <Card className="p-1">
//                             <CardTitle className="text-center">
//                                 Size Sensitivity
//                             </CardTitle>

//                             <Row>

//                                 <FormGroup tag={Col} className="text-nowrap text-center">
//                                     <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Sensitivity Category</Label>
//                                     <Select
//                                         id='itemSubGroupName'
//                                         isSearchable
//                                         isClearable
//                                         theme={selectThemeColors}
//                                         options={selectSensitivityCategoryForSize}
//                                         classNamePrefix='select '

//                                     />

//                                 </FormGroup>

//                                 <FormGroup tag={Col}>
//                                     <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Size </Label>
//                                     <Select
//                                         id='itemSubGroupName'
//                                         isMulti
//                                         isSearchable
//                                         isClearable
//                                         theme={selectThemeColors}
//                                         options={getDropDownItemSubGroups}
//                                         classNamePrefix='select'

//                                     />
//                                 </FormGroup>


//                             </Row>


//                             <Table responsive size="sm" bordered  >
//                                 <thead>
//                                     <tr className="thead-light"  >
//                                         <th className="text-nowrap">Gmt. Size</th>
//                                         <th className="text-nowrap pl-2">Elastic Size</th>
//                                     </tr>
//                                 </thead>

//                                 <tbody>
//                                     <tr>
//                                         <td className="align-top ">
//                                             data
//                                         </td>
//                                         <td className="align-top">
//                                             data2
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="align-top ">
//                                             data3
//                                         </td>
//                                         <td className="align-top">
//                                             data4
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                         </Card>
//                     </Col>
//                 </Row>
//             </CustomModal>

//         </div>
//     );
// };

// export default SizeAndColorSensitivity2;
