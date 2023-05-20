import React from 'react';
import {Search, SearchIconWrapper, StyledInputBase} from "./style";
import SearchIcon from "@mui/icons-material/Search";

const SearchGlobal = ({sx}) => {
    return (
        <Search sx={sx}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Search anything"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    );
};

export default SearchGlobal;
