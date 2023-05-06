import Avatar from '@components/avatar';
import classnames from 'classnames';
import { Box, DollarSign, TrendingUp, User } from 'react-feather';
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Media, Row } from 'reactstrap';

const AppCard = ( { cols } ) => {
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

    const renderData = () => {
        return data?.map( ( item, index ) => {
            const margin = Object.keys( cols );
            return (
                <Col
                    key={index}
                    {...cols}
                    className={classnames( {
                        [`mb-2 mb-${margin[0]}-3`]: index !== data.length - 1
                    } )}
                >
                    <Media>
                        <Avatar color={item.color} icon={item.icon} className='mr-2' />
                        <Media className='m-auto' body>
                            <h4 className='font-weight-bolder mb-0'><a href={item.url} >{item.title}</a></h4>
                            <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                        </Media>
                    </Media>
                </Col>
            );
        } );
    };

    return (
        <Card className='card-statistics'>
            <CardHeader>
                <CardTitle tag='h3'>App</CardTitle>
                {/* <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText> */}
            </CardHeader>
            <CardBody className='statistics-body justify-content-center'>
                <Row>{renderData()}</Row>
            </CardBody>
        </Card>
    );
};

export default AppCard;
