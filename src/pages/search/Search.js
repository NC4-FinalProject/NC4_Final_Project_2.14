import React, { useState } from 'react';
import '../../scss/search/Search.scss';
import SelectBox from '../../components/ui/SelectBox';
import Input from '../../components/ui/lnput/Input';
import Tag from '../../components/ui/Tag';

const Search = () => {
  const popularSearchList = ['검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과'];
  
  const [popularSearch, setPopularSearch] = useState(popularSearchList);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (search) => {
    // 임시로 만들어 놓은 검색결과
    const result = ['검색결과1', '검색결과2', '검색결과3', '검색결과4', '검색결과5'];
    setSearchResult(result);
  }

  return (
    <div className='Search'>
      <div className='section-search-container'>
        <div className='section-search'>
          <div className='select-box-container'>
            <SelectBox></SelectBox>
          </div>
            <div className='input-container'>
              <Input
                placeholder={'검색어를 입력하세요'}
                onChange={(e) => handleSearch(e.target.value)}
              ></Input>
            </div>
        </div>
        <div className='section-tags'>
          <Tag text={'태그 1'} color={'blue'}></Tag>
          <Tag text={'태그 2'} color={'blue'}></Tag>
          <Tag text={'태그 3'} color={'blue'}></Tag>
          <Tag text={'태그 4'} color={'blue'}></Tag>
          <Tag text={'태그 5'} color={'blue'}></Tag>
        </div>
      </div>
      <div className='section-search-result'>
        <div className='section-search-result-title'>
          실시간 인기 검색어
        </div>
        <div className='section-search-result-content'>
        {(searchResult.length > 0 ? searchResult : popularSearch).map((result, index) => {
            return (
              <div className='result-list' key={index}>
                {index + 1}. {result}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;