import React, { useState } from 'react'

const MyReviewContent = () => {
  const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value === rating ? value - 0.5 : value);
    };

  return (
    <div className='myRecruitment_content_box'>
      <img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhSkozbxrfkXMlzAUfgmUenBijb8uDW6FjUg&usqp=CAU'></img>

      <div className='content_box'>
        <p className='content1'>
          정상 경치가 아주 죽여줍니다!!
          <span className='regdate'>오후 4:30</span>
        </p>

        <p className='content2'>
          아직 많이 알려지지 않아 사람들로 북적이지 않았어요. 다음에도 또 들리고 싶은 곳입니다 !! 설경도...
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
  )
}

export default MyReviewContent