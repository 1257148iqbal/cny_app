import React from 'react';
import { Table } from 'reactstrap';
import CustomFloat from '../../../utility/custom/CustomFloat';
const costingSummery = [
    { id: 1, costingGroupName: 'Fabric', buyerAmount: 0, inHouseAmount: 0 },
    { id: 2, costingGroupName: 'Accessories', buyerAmount: 0, inHouseAmount: 0 },
    { id: 3, costingGroupName: 'CM', buyerAmount: 0, inHouseAmount: 0 },
    { id: 4, costingGroupName: 'Print', buyerAmount: 0, inHouseAmount: 0 },
    { id: 5, costingGroupName: 'Wash', buyerAmount: 0, inHouseAmount: 0 },
    { id: 6, costingGroupName: 'Embroidery', buyerAmount: 0, inHouseAmount: 0 },
    { id: 7, costingGroupName: 'Profit', buyerAmount: 0, inHouseAmount: 0 },
    { id: 8, costingGroupName: 'Commission', buyerAmount: 0, inHouseAmount: 0 },
    { id: 9, costingGroupName: 'Logistics & Transport', buyerAmount: 0, inHouseAmount: 0 },
    { id: 10, costingGroupName: 'Other', buyerAmount: 0, inHouseAmount: 0 },
    { id: 11, costingGroupName: 'Total', buyerAmount: 0, inHouseAmount: 0 }
];

const CollapseTest = () => {
    return (
        <div>
            <CustomFloat title='Costing Summary'>
                <Table size='sm'>
                    <thead>
                        <tr className='bg-light'>
                            <td className=' small'><strong>Costing Groups</strong></td>
                            <td className='text-right small'><strong>Buyer Amount</strong></td>
                            <td className='text-right small'><strong>In House Amount</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {costingSummery.length &&
                            costingSummery.map( i => (
                                <tr key={i.id}>
                                    <td className='text-left small'> <strong>{i.costingGroupName}</strong></td>
                                    <td className='text-right'>{i.buyerAmount}</td>
                                    <td className='text-right'>{i.inHouseAmount}</td>
                                </tr>
                            ) )
                        }
                    </tbody>

                </Table>
            </CustomFloat>
        </div>
    );
};

export default CollapseTest;
