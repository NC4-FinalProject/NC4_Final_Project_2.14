import React, { useCallback, useEffect, useState } from 'react';
import '../../scss/recruitment/RecruitmentList.scss';
import SearchIcon from '@mui/icons-material/Search';
import RecruitmentCommendList from '../../components/recruitment/RecruitmentCommendList.js';
import CachedIcon from '@mui/icons-material/Cached';
import SelectBox from '../../components/ui/SelectBox.js';
import Input from '../../components/ui/lnput/Input.js';
import RecruitmentItem from '../../components/recruitment/RecruitmentItem.js';
import { useDispatch, useSelector } from 'react-redux';
import { getRecruitment } from '../../apis/recruitmentApi.js';
import { change_searchCondition, change_searchKeyword, change_sort } from '../../slices/recruitmentSlice.js';
import { Button, NativeSelect } from '@mui/material';

const RecruitmentList = ({recruitments}) => {
  const fontSize = '13px';
  const [selectedValue, setSelectedValue] = useState('latest');
  const dispatch = useDispatch();
  const recruitment = useSelector(state => state.recruitment.recruitmentDTO);
  const searchCondition = useSelector(state => state.recruitment.searchCondition);
  const searchKeyword = useSelector(state => state.recruitment.searchKeyword);
  const sort = useSelector(state => state.recruitment.sort);

  const options = {
    latest: '최신순',
    oldest: '오래된순',
    member_high: '멤버수 높은순',
    member_low: '멤버수 낮은순'
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
      getRecruitment(
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
    dispatch(getRecruitment({
      searchCondition: 'all',
      searchKeyword: '',
      sort: sort
    }));
    console.log(recruitment);
  }, [dispatch, sort]);


  return (
    <div className="recruitment_container">
      <form onSubmit={search}>
        <div className='recruitment_title'>
          <h3>커뮤니티 추천 </h3>
          <CachedIcon id={'CachedIcon'} />
        </div>
        <div className="recruitment_commend">
          <RecruitmentCommendList />
        </div>
        <h3 className='recruitment_title2'>모 집</h3>
        <div className='recruitment_box'>
          <SearchIcon id={'SearchIcon'}></SearchIcon>
          <NativeSelect
            defaultValue={searchCondition}
            inputProps={{
              name: 'searchCondition'
            }}
            fullWidth
            onChange={changeSearchCondition}
            style={{ display: 'none' }}
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
            style={{ display: 'none' }}>
            검색
          </Button>
          <SelectBox
            options={options}
            fontSize={fontSize}
            onSelectChange={handleSelectChange}
          ></SelectBox>
        </div>
        <div className='RecruitmentItem'>
          {recruitment.content && recruitment.content.map(
                (recruitment, index) =>
                    <RecruitmentItem key={index} recruitment={recruitment}/>
            )}
        </div>
      </form>
    </div>
  );
}

export default RecruitmentList;