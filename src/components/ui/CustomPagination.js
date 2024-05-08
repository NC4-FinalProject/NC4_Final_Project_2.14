import React from 'react';
import {Pagination} from "@mui/material";
import {styled} from "@mui/system";

const CustomPagination = ({count, page, changePage}) => {
    const totalPageCount = parseInt(count);

    const StyledPagination = styled(Pagination)(({theme}) => ({
        '& .Mui-selected': {
            border: '1px solid #88AEED',
            '&.MuiPaginationItem-root': {
                backgroundColor: '#CBDFF9',
                color: '#000000'
            }
        },
        '.MuiPagination-root': {
            display: 'flex',
            justifyContent: 'center'
        }

    }));

    return (
        <StyledPagination count={totalPageCount} page={page} onChange={changePage} variant="outlined"
                          className="CustomPagination"/>
    );
};

export default CustomPagination;
