import React, { useState } from 'react';
import '../../scss/search/Search.scss';
import SelectBox from '../../components/ui/SelectBox';
import Input from '../../components/ui/lnput/Input';
import Tag from '../../components/ui/Tag';
import FriendSearchResult from './FriendSearchResult';

const Search = () => {
  const popularSearchList = ['검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과'];
  const friendSearchResults = [
  {
    name : '김민수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  },
  {
    name : '김철수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  },
  {
    name : '김철수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  },
  {
    name : '김철수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  },
  {
    name : '김철수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  },
  {
    name : '김철수',
    img : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    tags : ['태그1', '태그2', '태그3']
  }]
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
        <FriendSearchResult friendSearchResults={friendSearchResults}></FriendSearchResult>
        {/* <div className='section-search-result-content'>
          {(popularSearchList).map((result, index) => {
              return (
                <div className='result-list' key={index}>
                  {index + 1}. {result}
                </div>
              );
            })}
        </div> */}
      </div>
    </div>
  );
}

export default Search;