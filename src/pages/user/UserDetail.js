import React from 'react'
import '../../scss/pages/user/User.scss';
import Tag from '../../components/ui/Tag';
import Button from '../../components/ui/button/Button';


const UserDetail = () => {
const username = "홍길동" ;

  return (
    <div className="UserDetail">
      <div className="profile">
      <img className="userface-gray" src="/assets/icons/userface_gray.png" alt="Userface-gray" />
      <p>{username}</p>
      <div className="represident-tag">
      <div className="tag-container">
      <Tag text={'#ENFP'}/><Tag text={'#sky diving'}/><Tag text={'#hiking'}/>
      </div>
      </div>
      <div className="button-container">
      <Button color="gray" text={"친구추가"}/><Button color="gray" text={"채팅"}/>
      </div>
      <img className="report" src="/assets/icons/신고 버튼.png"  alt="Report"/>
      <h2>가입된 커뮤니티</h2>
      
      <article>
        <div className="userdetail-container">
      <div className='userdetail-component'>
      <img  src='/assets/icons/뷰티풀너드.png'/>
      <h2>여름 빠지여행</h2>
    </div>
    <div className='userdetail-component'>
      <img  src='/assets/icons/황정민.png'/>
      <h2>2030 우정여행</h2>
    </div>
    </div>
     </article>
      <h2>여행 후기</h2>
      <article>
      <div className="userdetail-container">
      <div className='userdetail-component'>
      <img  src='/assets/icons/강릉.png'/>
      <h2>강릉</h2>
    </div>
    <div className='userdetail-component'>
      <img  src='/assets/icons/경주.png'/>
      <h2>경주</h2>
    </div>
    </div>
     </article>


      </div>
    </div>
  )
}

export default UserDetail
