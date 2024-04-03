import React, {useCallback, useEffect, useState} from 'react'
import '../../scss/review/ReviewList.scss';
import SelectBox from '../../components/ui/SelectBox.js';
import Input from '../../components/ui/lnput/Input.js';
import SearchIcon from '@mui/icons-material/Search';
import CustomPagination from '../../components/ui/CustomPagination.js';
import ReviewListContentList from '../../components/review/ReviewListContentList.js';
import {Button, NativeSelect} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {change_searchCondition, change_searchKeyword, change_sort} from '../../slices/reviewSlice.js';
import {getReview} from '../../apis/reviewApi.js';

const ReviewList = () => {
    const fontSize = '13px';
    const [selectedValue, setSelectedValue] = useState('latest');
    const dispatch = useDispatch();
    const review = useSelector(state => state.review.reviewDTO);
    const searchCondition = useSelector(state => state.review.searchCondition);
    const searchKeyword = useSelector(state => state.review.searchKeyword);
    const page = useSelector(state => state.review.page);
    const sort = useSelector(state => state.review.sort);

    const options = { 
        latest : '최신순',
        oldest : '오래된순',
        rating_high : '별점 높은순',
        rating_low :'별점 낮은순'
    }
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
                {
                    searchCondition: searchCondition,
                    searchKeyword: searchKeyword,
                    page: 0,
                    sort: selectedValue
                }
            )
        );
    }, [dispatch, searchCondition, searchKeyword, selectedValue]);

    const handleSelectChange = useCallback((e) => {
        dispatch(change_sort(e.key));
    }, [dispatch, searchCondition, searchKeyword]);


    useEffect(() => {
        dispatch(getReview({
            searchCondition: 'all',
            searchKeyword: '',
            page: 0,
            sort: sort
        }));
    }, [dispatch, sort]);

    const changePage = useCallback((e, v) => {

        dispatch(getReview({
            searchCondition: searchCondition,
            searchKeyword: searchKeyword,
            page: parseInt(v) - 1,
            sort: sort
        }));
    }, [dispatch, searchCondition, searchKeyword, sort]);

    return (
        <div className='reviewList_container'>
            <form onSubmit={search}>
                <div className='review_box'>
                    <SearchIcon id={'SearchIcon'}/>
                    <NativeSelect
                        defaultValue={searchCondition}
                        inputProps={{
                            name: 'searchCondition'
                        }}
                        fullWidth
                        onChange={changeSearchCondition}
                        style={{display: 'none'}}
                    >
                        <option value='all'>전체</option>
                        <option value='title'>제목</option>
                        <option value='content'>내용</option>
                        <option value='writer'>작성자</option>
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
                        style={{display: 'none'}}>
                        검색
                    </Button>

                    <div className='SelectBox'>
                        <SelectBox
                            options={options}
                            onSelectChange={handleSelectChange}
                            fontSize={fontSize}
                        ></SelectBox>
                    </div>
                </div>
                <ReviewListContentList reviews={review.content}/>
                <div className='CustomPagination'>
                    {review && <CustomPagination total={review.totalPages} page={page + 1} changePage={changePage}/>}
                </div>
            </form>
        </div>
    );
}

export default ReviewList;