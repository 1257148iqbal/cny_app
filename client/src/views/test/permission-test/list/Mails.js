import React, { Fragment } from 'react';
import { CustomInput } from 'reactstrap';

const Mails = () => {
    return (
        <Fragment>
            <div className='email-app-list' style={{ width: '600px' }}>

                <div className='app-action'>
                    <div className='action-left'>
                        <CustomInput
                            type='checkbox'
                            id='select-all'
                            label='Select All'
                        //   onChange={handleSelectAll}
                        //   checked={selectedMails.length && selectedMails.length === mails.length}
                        />
                    </div>

                </div>


            </div>

        </Fragment>
    );
};

export default Mails;
