import React, {useState} from 'react';
import '../../scss/pages/search/Search.scss';
import SelectBox from '../../components/ui/SelectBox';
import Input from '../../components/ui/lnput/Input';
import Tag from '../../components/ui/Tag';
import FriendSearchResult from "./FriendSearchResult";

const Search = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const testOptions = ['여행', '친구', '인기검색어', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과'];
    const testPopularSearchList = ['검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과', '검색결과'];
    const testFriendSearchResults = [
        {
            name: '김민수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['tag1', 'tag2', 'tag3']
        },
        {
            name: '김철수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['태그1', '태그2', '태그3']
        },
        {
            name: '김철수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['태그1', '태그2', '태그3']
        },
        {
            name: '김철수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['태그1', '태그2', '태그3']
        },
        {
            name: '김철수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['태그1', '태그2', '태그3']
        },
        {
            name: '김철수',
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            tags: ['태그1', '태그2', '태그3']
        }
    ];
    const testTravelSearchResults = [
        {
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            title: '여행지 제목1',
            detailAddr: '(우편번호) 상세주소',
            tel: '전화번호1',
            location: '위치1',
            like: '좋아요 개수1'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            title: '여행지 제목2',
            detailAddr: '(우편번호) 상세주소',
            tel: '전화번호2',
            location: '위치2',
            like: '좋아요 개수2'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            title: '여행지 제목3',
            detailAddr: '(우편번호) 상세주소',
            tel: '전화번호3',
            location: '위치3',
            like: '좋아요 개수3'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            title: '여행지 제목4',
            detailAddr: '(우편번호) 상세주소',
            tel: '전화번호4',
            location: '위치4',
            like: '좋아요 개수4'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            title: '여행지 제목5',
            detailAddr: '(우편번호) 상세주소',
            tel: '전화번호5',
            location: '위치5',
            like: '좋아요 개수5'
        }
    ];

    return (
        <div className='Search'>
            <div className='section-search-container'>
                {/* <div className='section-search'> */}
                    {/* <div className='select-box-container'> */}
                    <SelectBox options={testOptions}></SelectBox>
                    {/* </div> */}
                    {/* <div className='input-container'> */}
                    <Input
                        placeholder={'검색어를 입력하세요'}
                    ></Input>
                    {/* </div> */}
                {/* </div> */}
            </div>
                <div className='section-tags'>
                    <Tag text={'태그 1'} color={'blue'}></Tag>
                    <Tag text={'태그 2'} color={'blue'}></Tag>
                    <Tag text={'태그 3'} color={'blue'}></Tag>
                    <Tag text={'태그 4'} color={'blue'}></Tag>
                    <Tag text={'태그 5'} color={'blue'}></Tag>
                </div>
            <div className='section-search-result'>
                <div className='section-search-result-title'>
                    검색결과
                </div>
                <div className='section-search-result-content'>
                    <FriendSearchResult friendSearchResults={testFriendSearchResults}></FriendSearchResult>
                    {/*<TravelSearchResult travelSearchResults={testTravelSearchResults}></TravelSearchResult>*/}
                    {/*<PopularSearchResult popularSearchList={testPopularSearchList}></PopularSearchResult>*/}
                </div>
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