import React from 'react'
import MyRecruitmentContentItem from './MyRecruitmentContentItem'

const MyRecruitmentContentList = ({recruitments}) => {
  return (
    <div>
        {recruitments && recruitments.map(
        (recruitment, index) =>
          <MyRecruitmentContentItem key={index} recruitments={recruitment}/>
      )}
    </div>
  )
}

export default MyRecruitmentContentList;