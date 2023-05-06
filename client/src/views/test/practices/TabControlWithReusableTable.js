import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ResizableTable from '../../../utility/custom/ResizableTable';

const TabControlWithReusableTable = () => {
    const [active, setActive] = useState( 1 );

    const toggle = tab => {
        if ( active !== tab ) {
            setActive( tab );
        }
    };
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        active={active === 1}
                        onClick={() => {
                            toggle( 1 );
                        }}
                    >
                        <span>Fabric</span>

                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active={active === 2}
                        onClick={() => {
                            toggle( 2 );
                        }}
                    >
                        Accessories
                    </NavLink>
                </NavItem>
            </Nav>
            {
                active === 1 && <TableOne />
            }
            {
                active === 2 && <TableTwo />
            }

        </div >
    );
};

export default TabControlWithReusableTable;


const TableOne = () => {
    return (
        <div>
            <ResizableTable
                mainClass="resizeFab"
                tableId="fabricTableId"
                className="pre-costing-details-table table-bordered"
                size="sm"
                responsive={true}
            >
                <thead>
                    <tr>
                        <th>Col 1</th>
                        <th>Col 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Col 1</td>
                        <td>Col 2</td>
                    </tr>
                </tbody>
            </ResizableTable>
        </div>
    );
};

const TableTwo = () => {
    return (
        <div>
            <ResizableTable
                mainClass="accessories"
                tableId="accessoriesId"
                className="pre-costing-details-table table-bordered"
                size="sm" responsive={true}
            >
                <thead>
                    <tr>
                        <th>Col 3</th>
                        <th>Col 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Col 3</td>
                        <td>Col 4</td>
                    </tr>
                </tbody>
            </ResizableTable>
        </div>
    );
};

