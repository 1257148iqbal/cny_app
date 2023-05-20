import React from 'react';
import {revenueList} from "../data";
import {LinearProgress, styled, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";

const StyledLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 6,
    borderRadius: 5,
    flex: 1
}));

const RevenueProgress = () => {
    return (
        <React.Fragment>
            {
                revenueList.map((item, index) => (
                    <React.Fragment key={index}>
                        <Typography variant={'body1'} color={'text.secondary'}>{item.label}</Typography>
                        <Div
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2
                            }}
                        >
                            <StyledLinearProgress variant={"determinate"} value={item.value} color={item.color}/>
                            <Typography
                                variant={'body1'}
                                color={'text.secondary'}
                                ml={1}
                            >
                                {`${item.value}%`}
                            </Typography>
                        </Div>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    );
};

export default RevenueProgress;
