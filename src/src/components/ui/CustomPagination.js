import React from 'react';
import {Pagination} from "@mui/material";
import {styled} from "@mui/system";


const CustomPagination = ({total}) => {
    const totalPageCount = parseInt(total);

    const StyledPagination = styled(Pagination)(({theme}) => ({
        '& .Mui-selected': {
            border: '1px solid #88AEED',
            '&.MuiPaginationItem-root': {
                backgroundColor: '#CBDFF9',
                color: '#000000'
            }
        }
    }));

    return (
        <StyledPagination count={totalPageCount} variant="outlined"/>
    )
};

export default CustomPagination