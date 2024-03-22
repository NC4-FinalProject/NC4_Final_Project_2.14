import React, { useState } from 'react'

const ReviewListContentItem = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value === rating ? value - 0.5 : value);
    };


  return (
    <div className='reviewList_content'>
                <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

                <div className='content_box'>
                    <p className='content1'>
                        이곳 풍경이 장난 아닙니다 ...!!
                        <span className='regdate'>오후 4:30</span>
                    </p>

                    <p className='content2'>
                        플레티넘 이상만 구합니다. 오늘 오후 6시에 칼퇴하고 바로 내전 하실분 찾아요 ㅎㅎ 제주도 서귀포시 짱 PC...liagjelkwjglkajlgfjlkdsajflksafjsaflkdsajflksajlslkgjaslgaksjfdlkdsamflkdsmfclkdsnflkdsanngvlkjsangkjsaln
                    </p>

                    <p className='writer'>
                        작성자:abcdefg
                    </p>

                    <div className='rating'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                onClick={() => handleClick(value)}
                                style={{
                                    cursor: 'pointer',
                                    color: value <= rating ? 'gold' : 'gray',
                                }}
                            >
                                {value <= rating ? (
                                    // 선택한 별보다 작거나 같은 경우 완전한 별 표시
                                    '\u2605'
                                ) : (
                                    // 선택한 별보다 큰 경우 빈 별 표시
                                    '\u2606'
                                )}
                            </span>
                        ))}
                        <p hidden>선택한 별점: {rating}</p>
                    </div>
                </div>
            </div>
  );
}

export default ReviewListContentItem;