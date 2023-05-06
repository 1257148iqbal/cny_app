import Avatar from '@components/avatar';
import '@custom-styles/merchandising/merchandising-core.scss';
import { notify } from "@custom/notifications";
import classnames from 'classnames';
import React, { Fragment, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Check, CheckSquare, Plus, Square, Upload, X, XSquare } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import CreatableSelect from 'react-select/creatable';
import { Badge, Button, ButtonGroup, Card, CardBody, CardHeader, CardText, CardTitle, Col, CustomInput, Form, FormFeedback, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { formatDate, randomIdGenerator, selectThemeColors } from '../../../utility/Utils';
import SetStyleDetailsAddForm from '../../merchandising/style/set-style/form/SetStyleDetailsAddForm';
import SetStyleDocumentTable from "../../merchandising/style/set-style/form/SetStyleDocumentTable";
import SetStylePhoto from "../../merchandising/style/set-style/form/SetStylePhoto";


const Label2 = () => (
    <Fragment>
        <span className='switch-icon-left'>
            <Check size={14} />
        </span>
        <span className='switch-icon-right'>
            <X size={14} />
        </span>
    </Fragment>
);

const selectSizeGroups = [
    { value: 'S-M', label: 'S-M' },
    { value: 'S-X', label: 'S-X' },
    { value: 'S-XXL', label: 'S-XXK' },
    { value: 'M-XLL', label: 'M-XLL' }
];
const selectColor = [
    { value: 'red', label: 'Red' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' }
];

//Session Array Demo
const selectSession = [
    { value: 'winter-22', label: 'Winter-22' },
    { value: 'autumn-20', label: 'Autumn-20' },
    { value: 'autumn-21', label: 'Autumn-21' },
    { value: 'autumn-22', label: 'Autumn-22' }
];

///Year 
const selectYear = [
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' }
];


const selectBuyer = [
    {
        value: 'youngLimited',
        label: 'Young Ltd',
        buyerAgent: [{ value: 'youngagent', label: 'Young Agent' }],
        buyerDepartment: [{ value: 'wildfox', label: 'Wild Fox' }],
        buyerProductdeveloper: [{ value: 'abdulKarim', label: 'Abdul Karim' }]
    }
];


const selectStatus = [
    { value: 'Inquiry', label: 'Inquiry' },
    { value: 'Confirm', label: 'Confirm' },
    { value: 'Closed', label: 'Closed' },
    { value: 'InProduction', label: 'In Production' }
];
const selectDocCategory = [
    { value: 'ApprovalLetter', label: 'Approval Letter' },
    { value: 'StyleArtwork', label: 'Style Artwork' },
    { value: 'StyleSampleDoc', label: 'Style Sample Doc' }
];

const selectSampleAssignee = [
    { value: 'SohagAbdullah', label: 'Sohag Abdullah' },
    { value: 'MilonMahmud', label: 'Milon Mahmud' }
];
const selectProductionProcess = [
    { value: 'CSF', label: 'CSF(Cutting, Swing, Finishing)' },
    { value: 'CSDF', label: 'CSDF(Cutting, Swing,Dyeing, Finishing)' }
];

const initialFilesUpload = {
    id: 0,
    name: '',
    type: '',
    uploadDate: '',
    revisionNo: 1,
    documentCategory: null
};

const SetStyleAddForm2 = () => {
    // const { replace } = history;
    const dispatch = useDispatch();
    const [session, setSession] = useState( null );

    const [year, setYear] = useState( null );
    const [buyer, setBuyer] = useState( null );
    const [buyerDepartment, setbuyerDepartment] = useState( null );
    const [buyerAgent, setBuyerAgent] = useState( null );
    const [buyerProductdeveloper, setBuyerProductdeveloper] = useState( null );

    const [status, setStatus] = useState( null );
    const [sampleAssignee, setSampleAssignee] = useState( null );
    const [productionProcess, setProductionProcess] = useState( null );
    ///For Document Upload
    const [filesTable, setFilesTable] = useState( [] );
    const [uploadFiles, setuploadFiles] = useState( initialFilesUpload );

    ///For Photo Upload
    const [photos, setPhotos] = useState( [] );
    const [uploadedPhoto, setUploadedPhoto] = useState( [] );

    /// Color Size Spacification
    const [colorSizeSpecification, setColorSizeSpecification] = useState( {
        colorSpecific: false,
        sizeSpecific: false
    } );
    const [color, setColor] = useState( null );
    const [sizeGroups, setsizeGroups] = useState( null );

    //Function for Document Upload Start
    const handleFileUpload = async files => {
        const singleFile = files[0];
        setuploadFiles( {
            ...uploadFiles,
            id: randomIdGenerator(),
            name: singleFile.name,
            type: singleFile.type,
            uploadDate: formatDate( new Date() )
        } );
    };

    const handleAddFileToTable = () => {
        const uploadArray = [];
        if ( uploadFiles ) {
            uploadArray.unshift( uploadFiles );
        }
        for ( let index = 0; index < uploadArray.length; index++ ) {
            const obj = uploadArray[index];
            setFilesTable( [...filesTable, obj] );
        }
        setuploadFiles( initialFilesUpload );
    };


    const handleFileRemoveFromTable = fileId => {
        const files = [...filesTable];
        files.splice(
            files.findIndex( value => value.id === fileId ), 1 );
        setFilesTable( files );
    };

    const { getRootProps, getInputProps } = useDropzone( {
        accept: 'image/*, application/pdf, .pdf, .doc, .docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        maxFiles: 1,
        onDrop: ( acceptedFiles, fileRejections ) => {
            if ( acceptedFiles.length ) {
                handleFileUpload( acceptedFiles );
            } else {
                const message = fileRejections[0]?.errors[0]?.message;
                notify( 'error', `${message}` );
            }
        }
    } );


    const handleBuyerChange = ( data ) => {
        if ( data ) {
            setBuyer( data );
        } else {
            setBuyer( null );
            setbuyerDepartment( null );
            setBuyerAgent( null );
            setBuyerProductdeveloper( null );
        }
    };

    const handlePhotoAddToTable = ( e ) => {
        const photoFiles = e.target.files;
        const photosConvertToArray = Object.values( photoFiles );
        const mutedPhotoArray = photosConvertToArray.map( photo => ( {
            id: randomIdGenerator(),
            url: URL.createObjectURL( photo ),
            photoName: photo.name,
            isDefault: false
        } ) );
        setPhotos( [...photos, ...mutedPhotoArray] );
    };

    const handlePhotoUploadtoCarousel = () => {
        setUploadedPhoto( [...uploadedPhoto, ...photos] );
        setPhotos( [] );
    };

    const handlePhotoRemoveFromTable = photoId => {
        const exitPhotos = [...photos];
        exitPhotos.splice(
            exitPhotos.findIndex( value => value.id === photoId ),
            1
        );
        setPhotos( exitPhotos );
    };

    const handleUploadPhotoRemoveFromCarousel = ( photoId ) => {
        const exitUploadedPhotos = [...uploadedPhoto];
        exitUploadedPhotos.splice(
            exitUploadedPhotos.findIndex( value => value.id === photoId ),
            1
        );
        setUploadedPhoto( exitUploadedPhotos );
    };

    const handleDefaultPhotoOnTable = ( photoId ) => {
        setPhotos(
            photos.map(
                ( photo ) => ( photo.id === photoId ? { ...photo, isDefault: true } : { ...photo, isDefault: false } )
            )
        );

    };
    const handleDefaultPhotoOnCarousel = ( photoId ) => {
        setUploadedPhoto(
            uploadedPhoto.map(
                ( photo ) => ( photo.id === photoId ? { ...photo, isDefault: true } : { ...photo, isDefault: false } )
            )
        );
    };

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = ( values ) => {
        console.log( values );
        // if ( isObjEmpty( errors ) ) {
        //     dispatch(
        //         addSetStyle( {
        //             modelNo: values.styleModelNo,
        //             session: session.value,
        //             year: year.value,
        //             description: values.description,
        //             images: uploadFiles.images,
        //             status: 'active'
        //         } )
        //     );
        // }
    };
    const handleCancel = () => {
        // replace( '/set-styles' );
    };

    console.log( colorSizeSpecification );
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-dark font-weight-bold" tag='h2'>New Set Style</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit( onSubmit )}>
                        <Row>
                            <Col xs='12' sm='12' md='8' lg='8' xl='8'>
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} xs='12' sm='12' md='12' lg='12' xl='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Set Style Info`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} xs='12' sm='12' md='12' lg='3' xl='3'>
                                        <Label className="text-dark font-weight-bold" for='buyerSetStyleNoId'>Buyer Set Style No</Label>
                                        <Input
                                            id='buyerSetStyleNoId'
                                            type='text'
                                            name='buyerSetStyleNo'
                                            placeholder='Buyer Set Style No'
                                            innerRef={register( { required: true } )}
                                            invalid={errors.buyerSetStyleNo && true}
                                            className={classnames( { 'is-invalid': errors['buyerSetStyleNo'] } )}
                                        />
                                        {errors && errors.buyerSetStyleNo && <FormFeedback>Buyer Set Style No is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='sessionId'>Session</Label>
                                        <CreatableSelect
                                            id='sessionId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectSession}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': session === null } )}
                                            value={session}
                                            onChange={data => {
                                                setSession( data );
                                            }}
                                        />
                                        {errors && errors.session && <FormFeedback>Session is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='yearId'>Year</Label>
                                        <CreatableSelect
                                            id='yearId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectYear}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': year === null } )}
                                            value={year}
                                            onChange={data => {
                                                setYear( data );
                                            }}
                                        />
                                        {errors && errors.year && <FormFeedback>Year is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='descriptinId'>Description</Label>
                                        <Input
                                            id='descriptinId'
                                            type='text'
                                            name='description'
                                            placeholder='Description'
                                            innerRef={register( { required: true } )}
                                            invalid={errors.descriotion && true}
                                            className={classnames( { 'is-invalid': errors['description'] } )}
                                        />
                                        {errors && errors.description && <FormFeedback>Description is required!</FormFeedback>}
                                    </FormGroup>
                                </Col>
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} lg='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Buyer Info`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='buyerId'>Buyer</Label>
                                        <CreatableSelect
                                            id='buyerId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectBuyer}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': session === null } )}
                                            value={buyer}
                                            onChange={data => {
                                                handleBuyerChange( data );
                                            }}
                                        />
                                        {errors && errors.buyer && <FormFeedback>Buyer No is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='departmentId'>Buyer Department</Label>
                                        <CreatableSelect
                                            id='departmentId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={buyer?.buyerDepartment}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': buyerDepartment === null } )}
                                            value={buyerDepartment}
                                            onChange={data => {
                                                setbuyerDepartment( data );
                                            }}
                                        />
                                        {errors && errors.buyerDepartment && <FormFeedback>Buyer Department is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='buyerAgentId'>Buyer Agent</Label>
                                        <CreatableSelect
                                            id='buyerAgentId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={buyer?.buyerAgent}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': buyerAgent === null } )}
                                            value={buyerAgent}
                                            onChange={data => {
                                                setBuyerAgent( data );
                                            }}
                                        />
                                        {errors && errors.buyerAgent && <FormFeedback>Buyer Agent is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="">
                                        <Label className="text-dark font-weight-bold" for='buyerProdcutDeveloperId'>Buyer Product Developer</Label>
                                        <CreatableSelect
                                            id='buyerProdcutDeveloperId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={buyer?.buyerProductdeveloper}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': buyerProductdeveloper === null } )}
                                            value={buyerProductdeveloper}
                                            onChange={data => {
                                                setBuyerProductdeveloper( data );
                                            }}
                                        />
                                        {errors && errors.buyerProductdeveloper && <FormFeedback>Description is required!</FormFeedback>}
                                    </FormGroup>
                                </Col>
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} lg="12" className="mt-n1">
                                        <Badge color='primary'>
                                            {`Status , Sample Assignee and Production Process`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='4' className="">
                                        <Label className="text-dark font-weight-bold" for='statusId'>Status</Label>
                                        <CreatableSelect
                                            id='statusId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectStatus}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': status === null } )}
                                            value={status}
                                            onChange={data => {
                                                setStatus( data );
                                            }}
                                        />
                                        {errors && errors.status && <FormFeedback>Status No is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='4' className="">
                                        <Label className="text-dark font-weight-bold" for='assigneeId'>Sample Assignee</Label>
                                        <CreatableSelect
                                            id='assigneeId'
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectSampleAssignee}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': sampleAssignee === null } )}
                                            value={sampleAssignee}
                                            onChange={data => {
                                                setSampleAssignee( data );
                                            }}
                                        />
                                        {errors && errors.sampleAssignee && <FormFeedback>Sample Assignee is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='4' className="">
                                        <Label className="text-dark font-weight-bold" for='departmentId'>Production Process</Label>
                                        <CreatableSelect
                                            isSearchable
                                            isClearable
                                            id='departmentId'
                                            theme={selectThemeColors}
                                            options={selectProductionProcess}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': productionProcess === null } )}
                                            value={productionProcess}
                                            onChange={data => {
                                                setProductionProcess( data );
                                            }}
                                        />
                                        {errors && errors.productionProcess && <FormFeedback>Production Process is required!</FormFeedback>}
                                    </FormGroup>

                                </Col>

                                {/* 
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} lg='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Size and Color Specific`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' check className="mt-1">
                                        <Label check className="text-dark font-weight-bold ml-2" for='sizeSpecificId'>
                                            <Input
                                                id="sizeSpecificId"
                                                type="checkbox"
                                                name="sizeSpecific"
                                                checked={colorSizeSpecification.sizeSpecific}
                                                onChange={( e ) => { setColorSizeSpecification( { ...colorSizeSpecification, sizeSpecific: e.target.checked } ); }}
                                            />
                                            Size Specific
                                        </Label>
                                        {errors && errors.sizeSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' check className="mb-1">
                                        <Label className="text-dark font-weight-bold" for='sizeMainId'>Size Groups</Label>
                                        <CreatableSelect
                                            id='sizeMainId'
                                            isDisabled={colorSizeSpecification.sizeSpecific}
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectSizeGroups}
                                            classNamePrefix='select'
                                            value={sizeGroups}
                                            onChange={data => {
                                                setsizeGroups( data );
                                            }}
                                        />
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' className="mt-1">
                                        <Label check className="text-dark font-weight-bold ml-2" for='colorSpecificId'>
                                            <Input
                                                id="colorSpecificId"
                                                type="checkbox"
                                                checked={colorSizeSpecification.colorSpecific}
                                                name="colorSpecific"
                                                onChange={( e ) => { setColorSizeSpecification( { ...colorSizeSpecification, colorSpecific: e.target.checked } ); }}
                                            />
                                            Color Specific
                                        </Label>
                                        {errors && errors.colorSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='3' check className="mb-1">
                                        <Label className="text-dark font-weight-bold" for='colorMainId'>Color</Label>
                                        <CreatableSelect
                                            id='colorMainId'
                                            isDisabled={colorSizeSpecification.colorSpecific}
                                            isSearchable
                                            isClearable
                                            theme={selectThemeColors}
                                            options={selectColor}
                                            classNamePrefix='select'
                                            value={color}
                                            onChange={data => {
                                                setColor( data );
                                            }}
                                        />
                                    </FormGroup>

                                </Col> */}
                            </Col>

                            <Col xl='4' lg='4' md='4' sm='12' >
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">

                                    <FormGroup tag={Col} lg='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Photo`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='12' className="">
                                        <SetStylePhoto photoData={uploadedPhoto} handleUploadPhotoRemove={handleUploadPhotoRemoveFromCarousel} handleDefaultPhotoOnCarousel={handleDefaultPhotoOnCarousel} />
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='12' className="">
                                        {
                                            photos.length > 0 &&
                                            <Table size="sm" responsive bordered>
                                                <thead className="thead-light text-capitalize">
                                                    <tr>
                                                        <td className="text-center">Photo</td>
                                                        <td >File </td>
                                                        <td className="text-center">Actions</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        photos.map( ( photo ) => (
                                                            <tr key={photo.id}>
                                                                <td className="text-center"> <Avatar img={photo.url} /></td>
                                                                <td>{photo.photoName}</td>
                                                                <td className="text-center">
                                                                    <ButtonGroup >
                                                                        <Button.Ripple id="deleteId" onClick={() => { handlePhotoRemoveFromTable( photo.id ); }} className='btn-icon' color='flat-danger'>
                                                                            <XSquare size={18} />
                                                                        </Button.Ripple>
                                                                        <Button.Ripple id='defaultId' onClick={() => { handleDefaultPhotoOnTable( photo.id ); }} className='btn-icon' color='flat-success'>
                                                                            {
                                                                                photo.isDefault ? <CheckSquare size={18} /> : <Square color='grey' size={18} />
                                                                            }
                                                                        </Button.Ripple>
                                                                    </ButtonGroup>
                                                                </td>
                                                            </tr>
                                                        ) )
                                                    }
                                                </tbody>
                                            </Table>
                                        }
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' sm="6" xs="6" className="d-flex justify justify-content-start">
                                        <Button.Ripple outline id='change-img' tag={Label} color='primary'>
                                            <Plus size={16} />
                                            <input type='file' hidden id='change-img' onChange={handlePhotoAddToTable} accept='image/*' multiple />
                                        </Button.Ripple>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' sm="6" xs="6" className="d-flex justify justify-content-end">
                                        <Button.Ripple onClick={() => { handlePhotoUploadtoCarousel(); }} outline tag={Label} color='success'>
                                            <Upload size={16} />
                                        </Button.Ripple>
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl='12' lg='12' md='12' sm='12' >
                                <Col tag={Row} className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} lg='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Remarks and Special Instructions`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' className="">
                                        <Label className="text-dark font-weight-bold" for='remarksId'>Remarks</Label>
                                        <Input
                                            id='remarksId'
                                            type='textarea'
                                            name='remarks'
                                            placeholder='Remarks'
                                            innerRef={register( { required: true } )}
                                            invalid={errors.remarks && true}
                                            className={classnames( { 'is-invalid': errors['remarks'] } )}
                                        />
                                        {errors && errors.remarks && <FormFeedback>Remarks No is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' className="">
                                        <Label className="text-dark font-weight-bold" for='spInstructionId'>Special Instruction</Label>
                                        <Input
                                            id='spInstructionId'
                                            type='textarea'
                                            name='specialInstruction'
                                            placeholder='Special Instruction'
                                            innerRef={register( { required: true } )}
                                            invalid={errors.specialInstruction && true}
                                            className={classnames( { 'is-invalid': errors['specialInstruction'] } )}
                                        />
                                        {errors && errors.specialInstruction && <FormFeedback>Special Instruction No is required!</FormFeedback>}
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <Row >
                            <Col xl='8' lg='8' md='12' sm='12'>
                                <Col className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup className="mt-n1">
                                        <Badge color='primary'>
                                            {`Set Style Details`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} className='d-block '>
                                        {/* Details */}
                                        <SetStyleDetailsAddForm colorSizeData={colorSizeSpecification} />
                                    </FormGroup>
                                </Col>

                            </Col>

                            <Col xl='4' lg='4' md='12' sm='12'>
                                <FormGroup className='d-block '>

                                    <Row >
                                        <Col className="border rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                            <FormGroup tag={Col} lg='12' className="mt-n1">
                                                <Badge color='primary'>
                                                    {`Size and Color Specific`}
                                                </Badge>
                                            </FormGroup>


                                            <Row  >
                                                <FormGroup tag={Col} xs='6' sm='6' md='3' lg='6' xl='6' className="mt-1">

                                                    <Label check className="text-dark font-weight-bold ml-1 divider" for='sizeSpecificId'>
                                                        <CustomInput
                                                            type='checkbox'
                                                            className='custom-control-Primary'
                                                            id='Primary'
                                                            label='  Size Specific'
                                                            //defaultChecked
                                                            inline
                                                        />

                                                    </Label>
                                                    {errors && errors.sizeSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                                </FormGroup>
                                                <FormGroup tag={Col} xs='6' sm='6' md='3' lg='6' xl='6' className="mb-1">
                                                    <Label className="text-dark font-weight-bold" for='sizeMainId'>Size Groups</Label>
                                                    <CreatableSelect
                                                        id='sizeMainId'
                                                        isDisabled={colorSizeSpecification.sizeSpecific}
                                                        isSearchable
                                                        isClearable
                                                        theme={selectThemeColors}
                                                        options={selectSizeGroups}
                                                        classNamePrefix='select'
                                                        value={sizeGroups}
                                                        onChange={data => {
                                                            setsizeGroups( data );
                                                        }}
                                                    />
                                                </FormGroup>


                                            </Row>

                                            <Row  >
                                                <FormGroup tag={Col} xs='6' sm='6' md='3' lg='6' xl='6' className="mt-1">
                                                    <div>
                                                        <CardText className='mb-0'>Color Specific</CardText>
                                                        <CustomInput type='switch' label={<Label2 />} id='colorSpecific' name='icon-primary' inline defaultChecked />
                                                    </div>

                                                    {errors && errors.colorSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                                </FormGroup>
                                                <FormGroup tag={Col} xs='6' sm='6' md='3' lg='6' xl='6' className="mb-1">
                                                    <Label className="text-dark font-weight-bold " for='colorMainId'>Color</Label>

                                                    <CreatableSelect
                                                        id='colorMainId'
                                                        isDisabled={colorSizeSpecification.colorSpecific}
                                                        isSearchable
                                                        isClearable
                                                        theme={selectThemeColors}
                                                        options={selectColor}
                                                        classNamePrefix='select'
                                                        value={color}
                                                        onChange={data => {
                                                            setColor( data );
                                                        }}
                                                    />
                                                </FormGroup>


                                            </Row>

                                            {/* <FormGroup check className="mt-1">

                                                <Label check className="text-dark font-weight-bold ml-1 divider" for='sizeSpecificId'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='Primary'
                                                        label='  Size Specific'
                                                        //defaultChecked
                                                        inline
                                                    />

                                                </Label>
                                                {errors && errors.sizeSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                            </FormGroup>

                                            <FormGroup check className="mb-1">
                                                <Label className="text-dark font-weight-bold" for='sizeMainId'>Size Groups</Label>
                                                <CreatableSelect
                                                    id='sizeMainId'
                                                    isDisabled={colorSizeSpecification.sizeSpecific}
                                                    isSearchable
                                                    isClearable
                                                    theme={selectThemeColors}
                                                    options={selectSizeGroups}
                                                    classNamePrefix='select'
                                                    value={sizeGroups}
                                                    onChange={data => {
                                                        setsizeGroups( data );
                                                    }}
                                                />
                                            </FormGroup>
                                            <FormGroup className="mt-1">
                                                <Label check className="text-dark font-weight-bold ml-3 divider" for='colorSpecificId'>
                                                   
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='Primary'
                                                        label='Color Specific'
                                                        //defaultChecked
                                                        inline
                                                    />

                                                </Label>
                                                {errors && errors.colorSpecific && <FormFeedback>Color is required!</FormFeedback>}
                                            </FormGroup>


                                            <FormGroup check className="mb-1">
                                                <Label className="text-dark font-weight-bold " for='colorMainId'>Color</Label>

                                                <CreatableSelect
                                                    id='colorMainId'
                                                    isDisabled={colorSizeSpecification.colorSpecific}
                                                    isSearchable
                                                    isClearable
                                                    theme={selectThemeColors}
                                                    options={selectColor}
                                                    classNamePrefix='select'
                                                    value={color}
                                                    onChange={data => {
                                                        setColor( data );
                                                    }}
                                                />
                                            </FormGroup> */}

                                        </Col>
                                    </Row>
                                </FormGroup>


                            </Col>

                        </Row>
                        <Row>
                            <Col xl='12' lg='12' md='12' sm='12' >
                                <Col tag={Row} className="border  rounded rounded-3 mr-1 mt-1 ml-1 mb-2">
                                    <FormGroup tag={Col} lg='12' className="mt-n1">
                                        <Badge color='primary'>
                                            {`Documents`}
                                        </Badge>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='12' >
                                        <CardBody  >
                                            <div className="style-doc-upload-main" {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p className=' text-center'><Upload color="black" size={26} /></p>
                                                <p className="h5  text-dark text-center opacity-100 font-weight-bolder ">{uploadFiles.name ? uploadFiles.name : 'Drop file here ...'}</p>
                                            </div>

                                        </CardBody>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' className="">
                                        <Label className="text-dark font-weight-bold" for='docCategoryId'>Document Category</Label>
                                        <CreatableSelect
                                            id='docCategoryId'
                                            isSearchable
                                            isClearable
                                            name='documentCategory'
                                            theme={selectThemeColors}
                                            options={selectDocCategory}
                                            classNamePrefix='select'
                                            innerRef={register( { required: true } )}
                                            // className={classnames( 'react-select', { 'is-invalid': documentCategory === null } )}
                                            // value={uploadFiles?.documentCategory}
                                            value={selectDocCategory.filter( i => i.label === uploadFiles?.documentCategory )}
                                            onChange={( data ) => { setuploadFiles( { ...uploadFiles, documentCategory: data ? data?.label : null } ); }}
                                        />
                                        {errors && errors.documentCategory && <FormFeedback>Document Category is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='6' className="">
                                        <Label className="text-dark font-weight-bold" for='revisionNoId'>Revision No</Label>
                                        <Input
                                            id='revisionNoId'
                                            type="number"
                                            name='revisionNo'
                                            placeholder='Revision No'
                                            min={1} max={100} step="1"
                                            value={uploadFiles?.revisionNo}
                                            onChange={( e ) => { setuploadFiles( { ...uploadFiles, revisionNo: e.target.value } ); }}
                                            innerRef={register( { required: true } )}
                                            invalid={errors.revisionNo && true}
                                            className={classnames( { 'is-invalid': errors['revisionNo'] } )}
                                        />
                                        {errors && errors.revisionNo && <FormFeedback>Revision No is required!</FormFeedback>}
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='12' className=" d-flex justify justify-content-end">
                                        <Button.Ripple disabled={( !uploadFiles.name || !uploadFiles.revisionNo || !uploadFiles.documentCategory )} onClick={() => { handleAddFileToTable(); }} color='primary' outline>
                                            Upload
                                        </Button.Ripple>
                                    </FormGroup>
                                    <FormGroup tag={Col} lg='12' >
                                        <SetStyleDocumentTable tableData={filesTable} handleFileRemoveFromTable={handleFileRemoveFromTable} />
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl='12' lg='12' md='12' sm='12'  >
                                <FormGroup tag={Col} lg='12' className=" d-flex justify justify-content-end mb-4">
                                    <Button.Ripple type="reset" className="ml-1 " outline color="secondary">Reset</Button.Ripple>
                                    <Button.Ripple onClick={() => { handleCancel(); }} className="ml-1 " outline color="danger">Cancel</Button.Ripple>
                                    <Button.Ripple type="submit" className="ml-1" outline color="success">Submit</Button.Ripple>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div >
    );
};

export default SetStyleAddForm2;

