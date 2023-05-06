// ** React Imports
// ** Custom Components
import Avatar from '@components/avatar';
import { Fragment, useEffect, useState } from 'react';
// ** Third Party Components
import { Box, DollarSign, Grid, TrendingUp, User } from 'react-feather';
// ** Store & Actions
import { useDispatch } from 'react-redux';
import { Badge, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Label, Media, Row } from 'reactstrap';
const data = [
    {
        title: 'Merchantizing',
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
    {
        title: 'HR',
        subtitle: 'Customers',
        color: 'light-info',
        icon: <User size={24} />,
        url: '/'
    },
    {
        title: 'Accounts',
        subtitle: 'Revenue',
        color: 'light-success',
        icon: <DollarSign size={24} />,
        url: '/'
    }
];
const ModuleDropdown = () => {
    // ** State
    const [dropdownOpen, setDropdownOpen] = useState( false );

    // ** Store Vars
    const dispatch = useDispatch();


    // ** ComponentDidMount
    useEffect( () => {
        // dispatch( getCartItems() );
    }, [] );

    // ** Function to toggle Dropdown
    const toggle = () => setDropdownOpen( prevState => !prevState );

    // ** Function to call on Dropdown Item Click
    const handleDropdownItemClick = id => {
        // dispatch( getProduct( id ) );
        toggle();
    };

    // ** Loops through Cart Array to return Cart Items
    // const renderCartItems = () => {
    //   if ( store.cart.length ) {
    //     let total = 0;

    //     return (
    //       <Fragment>
    //         <PerfectScrollbar
    //           options={{
    //             wheelPropagation: false
    //           }}
    //           className='scrollable-container media-list'
    //         >
    //           {store.cart.map( item => {
    //             total += item.price;

    //             return (
    //               <Media key={item.id} className='align-items-center'>
    //                 <img className='d-block rounded mr-1' src={item.image} alt={item.name} width='62' />
    //                 <Media body>
    //                   <X size={14} className='cart-item-remove' onClick={() => dispatch( deleteCartItem( item.id ) )} />
    //                   <div className='media-heading'>
    //                     <h6 className='cart-item-title'>
    //                       <Link
    //                         className='text-body'
    //                         to={`/apps/ecommerce/product/${item.slug}`}
    //                         onClick={() => handleDropdownItemClick( item.id )}
    //                       >
    //                         {item.name}
    //                       </Link>
    //                     </h6>
    //                     <small className='cart-item-by'>by {item.brand}</small>
    //                   </div>
    //                   <div className='cart-item-qty'>
    //                     <NumberInput
    //                       min={1}
    //                       max={10}
    //                       size='sm'
    //                       className='p-0'
    //                       value={item.qty}
    //                       style={{ width: '7rem', height: '2.15rem' }}
    //                     />
    //                   </div>
    //                   <h5 className='cart-item-price'>${item.price}</h5>
    //                 </Media>
    //               </Media>
    //             );
    //           } )}
    //         </PerfectScrollbar>
    //         <li className='dropdown-menu-footer'>
    //           <div className='d-flex justify-content-between mb-1'>
    //             <h6 className='font-weight-bolder mb-0'>Total:</h6>
    //             <h6 className='text-primary font-weight-bolder mb-0'>${Number( total.toFixed( 2 ) )}</h6>
    //           </div>
    //           <Button.Ripple tag={Link} to='/apps/ecommerce/checkout' color='primary' block onClick={toggle}>
    //             Checkout
    //           </Button.Ripple>
    //         </li>
    //       </Fragment>
    //     );
    //   } else {
    //     return <p className='m-0 p-1 text-center'>Your cart is empty</p>;
    //   }
    // };

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} tag='li' className=' nav-item mr-25'>
            <DropdownToggle tag='a' className='nav-link position-relative'>
                <Grid className='ficon' />
                <Badge pill color='primary' className='badge-up'>
                    {data.length}
                </Badge>
            </DropdownToggle>
            <DropdownMenu right tag='ul' className='dropdown-menu-media mt-3 shadow'>
                <li className='dropdown-menu-header'>
                    <DropdownItem tag='div' className='d-flex' header>
                        <h4 className='notification-title mb-0 mr-auto'>Modules</h4>
                        <Badge color='light-primary' pill>
                            Totals {data.length}  App
                        </Badge>
                    </DropdownItem>
                </li>
                {/* <PerfectScrollbar
                    options={{
                        wheelPropagation: false
                    }}
                    className='scrollable-container media-list'
                > */}
                <Media >
                    <Media body>
                        <Row className='d-flex justify-content-center' >
                            {
                                data?.map( ( i, inx ) => (
                                    <Fragment key={inx + 1}>
                                        <Col xs={12} className='' >
                                            <Avatar color={i.color} icon={i.icon} className='m-1 align-items-center' />
                                            <Label className='font-weight-bolder h5'>{i.title}</Label>
                                        </Col>
                                    </Fragment>
                                ) )
                            }
                        </Row>
                    </Media>
                </Media>
                {/* </PerfectScrollbar> */}


            </DropdownMenu>
        </Dropdown >
    );
};

export default ModuleDropdown;
