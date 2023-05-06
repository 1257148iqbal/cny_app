// import '@custom-styles/merchandising/others/custom-table.scss';
// import React, { useState } from 'react';
// import CreatableSelect from 'react-select/creatable';
// import { Button, Card, CardTitle, Col, CustomInput, FormGroup, Label, Row, Table } from 'reactstrap';
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


// const SizeAndColorSensitivity = () => {
//     const [openModal, setOpenModal] = useState( false );
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
//                 Size Color Sensitivity
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
//                             <Row>
//                                 <FormGroup tag={Col} className="text-nowrap">
//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary1' name='icon-primary' inline defaultChecked >As per Gmt. Color</CustomInput>
//                                     </div>

//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary2' name='icon-primary' inline defaultChecked >For All Gmt. Color</CustomInput>
//                                     </div>
//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary3' name='icon-primary' inline defaultChecked >Color Mapping</CustomInput>
//                                     </div>
//                                 </FormGroup>
//                                 <FormGroup tag={Col}>
//                                     <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Color </Label>
//                                     <CreatableSelect
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
//                             {/* <Row>
//                             <FormGroup tag={Col}>
//                                 <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Gmt. Color </Label>
//                                 <CreatableSelect
//                                     id='itemSubGroupName'
//                                     isMulti
//                                     isSearchable
//                                     isClearable
//                                     theme={selectThemeColors}
//                                     options={getDropDownItemSubGroups}
//                                     classNamePrefix='select'

//                                 />

//                             </FormGroup>

//                             <FormGroup tag={Col}>
//                                 <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Color </Label>
//                                 <Input
//                                     type="text"

//                                 />
//                             </FormGroup>
//                         </Row> */}

//                             <Table responsive size="sm" bordered  >
//                                 <thead>
//                                     <tr className="thead-light"  >
//                                         <th className="text-nowrap">Gmt. Color</th>
//                                         <th className="text-nowrap pl-2">Elastic Color</th>
//                                     </tr>
//                                 </thead>

//                                 <tbody>
//                                     <tr>
//                                         <td className="align-top ">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                         <td className="align-top">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="align-top ">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                         <td className="align-top">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </Table>

//                             {/* <Table responsive size="sm" bordered  >
//                             <tr className="thead-light"  >
//                                 <th className="text-nowrap">Gmt. Color</th>
//                                 <th className="text-nowrap pl-2">Elastic Color</th>
//                             </tr>
//                             <tbody>
//                                 <tr>
//                                     <td className="align-top ">
//                                         data
//                                     </td>
//                                     <td className="align-top">
//                                         data2
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </Table> */}
//                         </Card>
//                     </Col>
//                     <Col xl={6} lg={6} md={6} sm={6} xs={6}>
//                         <Card className="p-1">
//                             <CardTitle className="text-center">
//                                 Size Sensitivity
//                             </CardTitle>

//                             <Row>

//                                 <FormGroup tag={Col} className="text-nowrap">
//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary4' name='icon-primary' inline defaultChecked >As per Gmt. Size</CustomInput>
//                                     </div>

//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary5' name='icon-primary' inline defaultChecked >For All Gmt. Size</CustomInput>
//                                     </div>
//                                     <div>
//                                         <CustomInput type='radio' id='icon-primary6' name='icon-primary' inline defaultChecked >Size Mapping</CustomInput>
//                                     </div>


//                                 </FormGroup>


//                                 <FormGroup tag={Col}>
//                                     <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Size </Label>
//                                     <CreatableSelect
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
//                             {/* <Row>
//                             <FormGroup tag={Col}>
//                                 <Label className="text-dark font-weight-bold" for='itemSubGroupName'>  Gmt. Size </Label>
//                                 <CreatableSelect
//                                     id='itemSubGroupName'
//                                     isMulti
//                                     isSearchable
//                                     isClearable
//                                     theme={selectThemeColors}
//                                     options={getDropDownItemSubGroups}
//                                     classNamePrefix='select'

//                                 />

//                             </FormGroup>

//                             <FormGroup tag={Col}>
//                                 <Label className="text-dark font-weight-bold" for='itemSubGroupName'> Select Elastic Color </Label>
//                                 <Input
//                                     type="text"

//                                 />
//                             </FormGroup>

//                         </Row> */}

//                             {/* <Table responsive size="sm" bordered  >
//                             <tr className="thead-light"  >
//                                 <th className="text-nowrap">Gmt. Size</th>
//                                 <th className="text-nowrap pl-2">Elastic Size</th>
//                             </tr>
//                             <tbody>
//                                 <tr>
//                                     <td className="align-top ">
//                                         data
//                                     </td>
//                                     <td className="align-top">
//                                         data2
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </Table> */}

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
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                         <td className="align-top">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td className="align-top ">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
//                                         </td>
//                                         <td className="align-top">
//                                             <div>
//                                                 <FormGroup >
//                                                     <CreatableSelect
//                                                         id='itemSubGroupName'
//                                                         isMulti
//                                                         isSearchable
//                                                         isClearable
//                                                         theme={selectThemeColors}
//                                                         options={getDropDownItemSubGroups}
//                                                         classNamePrefix='select'

//                                                     />
//                                                 </FormGroup>
//                                             </div>
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

// export default SizeAndColorSensitivity;
