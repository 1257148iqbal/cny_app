import React from 'react';
import { Input } from 'reactstrap';

const NestedTable = () => {
    return (
        <div>
            <div className="table-responsive" role="table">
                <div role="rowgroup">
                    <div className="d-flex " role="row">
                        <div className="border w-25 text-center" role="cell"> Head 1</div>
                        <div className="border w-25 text-center" role="cell"> Head 2</div>
                        <div className="border w-25 text-center" role="cell"> Head 3</div>
                        <div className="border w-25 text-center" role="cell"> Head 4</div>
                        <div className="border w-25 text-center" role="cell"> Head 5</div>
                        <div className="border w-25 text-center" role="cell"> Head 6</div>
                        <div className="border w-25 text-center" role="cell"> Head 7</div>
                        <div className="border w-25 text-center" role="cell"> Head 7</div>
                        <div className="border w-25 text-center" role="cell"> Head 7</div>
                        <div className="border w-25 text-center" role="cell"> Head 7</div>
                    </div>
                    <div className="d-flex table-bordered " role="row">
                        <div className="border w-25 " role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                        <div className="border w-25" role="cell"> <Input bsSize="sm" /></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NestedTable;
