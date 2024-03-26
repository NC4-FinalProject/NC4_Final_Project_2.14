import React, { useCallback } from 'react'
import '../../scss/review/ReviewList.scss';
import SelectBox from '../../components/ui/SelectBox.js';
import Input from '../../components/ui/lnput/Input.js';
import SearchIcon from '@mui/icons-material/Search';
import CustomPagination from '../../components/ui/CustomPagination.js';
import ReviewListContentList from '../../components/review/ReviewListContentList.js';
import { Button, NativeSelect } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { 
    change_searchCondition, 
    change_searchKeyword
} from '../../slices/ReviewSlice.js';
import { getReview } from '../../apis/ReviewApi.js';

const ReviewList = () => {
    const options = ['최신순', '오래된순', '별점 높은순', '별점 낮은순'];
    const fontSize = '13px';

    const dispatch = useDispatch();
    const searchCondition = useSelector(state => state.review.searchCondition);
    const searchKeyword = useSelector(state => state.review.searchKeyword);

    const changeSearchCondition = useCallback((e) => {
        dispatch(change_searchCondition(e.target.value));
    }, [dispatch]);

    const changeSearchKeyword = useCallback((e) => {
        dispatch(change_searchKeyword(e.target.value));
    }, [dispatch]);

    const search = useCallback((e) => {
        e.preventDefault();

        dispatch(
            getReview(
                {searchCondition: searchCondition, searchKeyword: searchKeyword, page: 0}
            )
        );
    }, [dispatch, searchCondition, searchKeyword]);

    return (
        <div className='reviewList_container'>
            <form onSubmit={search}>
                <div className='review_box'>
                    <SearchIcon id={'SearchIcon'} />
                    <NativeSelect
                        value={searchCondition}
                        inputProps={{
                            name: 'searchCondition'
                        }}
                        fullWidth
                        onChange={changeSearchCondition}
                        style={{ display: 'none' }}
                    >
                        <option value='all' >전체</option>
                        <option value='title' >제목</option>
                        <option value='content' >내용</option>
                        <option value='writer' >작성자</option>
                    </NativeSelect>
                    <Input
                        id={'Input'}
                        color={'gray'}
                        placeholder={'검색'}
                        name={'searchKeyword'}
                        value={searchKeyword}
                        onChange={changeSearchKeyword}
                    />
                    <Button
                        color='primary'
                        type='submit'
                        style={{ display: 'none' }}>
                        검색
                    </Button>
                    <div className='SelectBox'>
                        <SelectBox options={options} fontSize={fontSize}></SelectBox>
                    </div>
                </div>
                <ReviewListContentList />
                <div className='CustomPagination'>
                    <CustomPagination total={"10"} />
                </div>
            </form>
        </div>
    );
}

export default ReviewList;