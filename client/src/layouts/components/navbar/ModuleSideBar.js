// ** React Imports
// ** Custom Components
import Avatar from '@components/avatar';
import '@custom-styles/basic/app-slider.scss';
import { Fragment, useState } from 'react';
// ** Third Party Components
import { ArrowLeft, Box, Grid, TrendingUp, Users } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardHeader, CardText, Col, Label, Media } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import Row from 'reactstrap/lib/Row';

const data = [
    {
        title: 'Merchandising',
        subtitle: 'Sales',
        color: 'light-primary',
        icon: <TrendingUp size={24} />,
        url: '/'

    },
    {
        title: 'Inventory',
        subtitle: 'Products',
        color: 'light-danger',
        icon: <Box size={24} />,
        url: '/'
    },
    // {
    //     title: 'Productions',
    //     subtitle: 'Productions',
    //     color: 'light-primary',
    //     icon: <GitPullRequest size={24} />,
    //     url: '/'
    // },
    // {
    //     title: 'HR',
    //     subtitle: 'Customers',
    //     color: 'light-info',
    //     icon: <User size={24} />,
    //     url: '/'
    // },
    // {
    //     title: 'Accounts',
    //     subtitle: 'Revenue',
    //     color: 'light-success',
    //     icon: <DollarSign size={24} />,
    //     url: '/'
    // },
    {
        title: 'Users',
        subtitle: 'User',
        color: 'light-success',
        icon: <Users size={24} />,
        url: '/'
    }
];
const ModuleSideBar = () => {
    const { go, replace, location, push } = useHistory();
    const dispatch = useDispatch();
    const { authenticateUserPermission } = useSelector( ( { auth } ) => auth );

    // ** State
    const [moduleSidebarOpen, setModuleSidebarOpen] = useState( false );


    // ** Function to toggle Dropdown
    const toggleAppSidebar = () => setModuleSidebarOpen( prevState => !prevState );
    const handleModule = ( module ) => {
        const moduleModified = module === "User Management" ? "Users" : module;
        localStorage.setItem( 'module', moduleModified );
        const baseRoute = module === "Merchandising" ? "/merchandising" : module === "Inventory" ? "/inventory" : module === "User Management" ? "/auth" : "";
        window.location.href = `${baseRoute}/home`;
        //  push( `/home` );

    };

    const isModulePermit = ( permissions, module, report ) => {
        const isPermit = permissions?.some( p => p?.module === module || p?.module === report );
        return isPermit;
    };

    const data = [
        {
            title: 'Merchandising',
            subtitle: 'Sales',
            color: 'light-primary',
            icon: <TrendingUp size={24} />,
            url: '/',
            hidden: isModulePermit( authenticateUserPermission, "Merchandising", "Report" )

        },
        {
            title: 'Inventory',
            subtitle: 'Products',
            color: 'light-danger',
            icon: <Box size={24} />,
            url: '/',
            hidden: isModulePermit( authenticateUserPermission, "Inventory", "" )
        },
        // {
        //     title: 'Productions',
        //     subtitle: 'Productions',
        //     color: 'light-primary',
        //     icon: <GitPullRequest size={24} />,
        //     url: '/'
        // },
        // {
        //     title: 'HR',
        //     subtitle: 'Customers',
        //     color: 'light-info',
        //     icon: <User size={24} />,
        //     url: '/'
        // },
        // {
        //     title: 'Accounts',
        //     subtitle: 'Revenue',
        //     color: 'light-success',
        //     icon: <DollarSign size={24} />,
        //     url: '/'
        // },
        {
            title: 'User Management',
            subtitle: 'User',
            color: 'light-success',
            icon: <Users size={24} />,
            url: '/',
            hidden: isModulePermit( authenticateUserPermission, "UserAccess", "" )
        }
    ];
    return (
        <>
            <Grid className='ficon module-grid' onClick={() => { toggleAppSidebar(); }} />
            {
                moduleSidebarOpen &&
                <div className="app-slider-main">
                    <div className="app-slider">
                        <Card >
                            <CardHeader className='d-flex '>
                                <CardText className='text-dark font-weight-bold h5' >Apps</CardText>
                                <Button.Ripple
                                    tag={Label}
                                    for="appCloseId"
                                    className='btn-icon'
                                    color='flat-danger'
                                    onClick={() => { toggleAppSidebar(); }}
                                >
                                    <ArrowLeft id="appCloseId" size={20} />
                                </Button.Ripple>
                            </CardHeader>
                            <CardBody>
                                <Media >
                                    <Media body>
                                        <Row className='d-flex justify-content-center' >
                                            {
                                                data?.map( ( i, inx ) => (
                                                    <Fragment key={inx + 1}>
                                                        <Col
                                                            hidden={!i.hidden}
                                                            onClick={() => { handleModule( i.title ); }}
                                                            xs={12} className='module-col' >
                                                            <Avatar color={i.color} icon={i.icon} className='module-avatar align-items-center' />
                                                            <span

                                                                className=' module-label'
                                                            >
                                                                {i.title}
                                                            </span>
                                                        </Col>
                                                    </Fragment>
                                                ) )
                                            }
                                        </Row>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>
                    </div>


                </div>
            }


        </>
    );
};

export default ModuleSideBar;
