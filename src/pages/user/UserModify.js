import React, { useState, useEffect } from 'react';
import '../../scss/pages/user/User.scss';
import Input from '../../components/ui/lnput/Input';
import Button from '../../components/ui/button/Button';
import '../../scss/ui/Tag.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { updateUserName } from '../../slices/userSlice';
import { uploadProfileImage, updateProfileImage, deleteProfileImage } from '../../apis/userApi';


const UserModify = () => {
  //  const userInfo = useSelector((state) => {console.log(state); return state.userSlice.userInfo});
   const userId = useSelector(state => state.userSlice.loginUserId);
   const dispatch = useDispatch();

   const [nickname, setNickname] = useState('');
const [editedNickname, setEditedNickname] = useState('');
const [isEditingNickname, setIsEditingNickname] = useState(false);

  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [province, setProvince] = useState('');
  // const [city, setCity] = useState('');
  // const [tags, setTags] = useState([]);
   const [profileImageUrl, setProfileImageUrl] = useState('');

   useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/user/modifyuser/${userId}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
        console.log(response)
        const { userName, userPw, userTel, profileImageUrl: serverProfileImageUrl } = response.data;
        setNickname(userName);
        setPassword(userPw);
        setPhoneNumber(userTel);
        dispatch(setProfileImageUrl(serverProfileImageUrl));
         // const [province, city] = parseLocation(user.location);
        // setProvince(province);
        // setCity(city);
        // setTags(user.tags);
      } catch (error) {
        console.error('Error fetching use information:', error);
        console.log()
      }
    };

    fetchUserInfo();
  }, [userId]);
  
  // const parseLocation = (location) => {
  //   if (location) {
  //     return location.split(' ');
  //   }
  //   return ['', ''];
  // };

  const handleProfileImageUpload = async (event) => {
    const file = event.target.files[0];
    const uploadedImageUrl = await dispatch(uploadProfileImage(file));
    dispatch(setProfileImageUrl(uploadedImageUrl));
  };

  const handleProfileImageDelete = async () => {
    dispatch(deleteProfileImage());
  };

  const handleProfileImageUpdate = async (event) => {
    const file = event.target.files[0];
    dispatch(updateProfileImage(file));
  };

  const handleEditNickname = () => {
    setEditedNickname(nickname);
    setIsEditingNickname(true);
  };


  const handleNicknameChange = (e) => {
    const newNickname = e.target.value.slice(0, 8); 
    setEditedNickname(newNickname);
  }; 
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // const handleProvinceChange = (value) => {
  //   setProvince(value);
  //   setCity('');
  // };

  // const handleCityChange = (value) => {
  //   setCity(value);
  // };

  // const handleTagChange = (e) => {
  //   // 태그 관련 로직
  // };
  const handleSaveNickname = async () => {

    try {
      await axios.put(`http://localhost:9090/user/modifyuser/${userId}`, {
        userName: editedNickname,
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      setNickname(editedNickname);
      setEditedNickname('');
      setIsEditingNickname(false);
      dispatch(updateUserName(editedNickname))
    } catch (error) {
      console.error('Error updating nickname:', error);
    }
  };
  

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:9090/user/modifyuser/${userId}`, {
        userPw: password,
        userTel: phoneNumber,
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <div className="UserModify">
      <div className="profile">
      <Avatar
          className="userface-gray"
          src={profileImageUrl || "/assets/icons/userface_gray.png"}
          alt="Userface"
          style={{alignItems: 'center', width: '150px', height: '150px', borderRadius: '70%', marginLeft: '40%'}}
        />
        <input
        type="file"
        onChange={handleProfileImageUpload}
        style={{ display: 'none' }}
        id="profile-image-upload"
      />
      <label htmlFor="profile-image-upload">
        <img
          className="userface-chg"
          src="/assets/icons/userface_change.png"
          alt="Userface-chg"
        />
      </label>
      {/* <button onClick={handleProfileImageDelete}>Delete</button> */}
  <span className="nickname">
  {isEditingNickname ? (
    <>
      <Input
        type="text"
        value={editedNickname}
        onChange={handleNicknameChange}
      />
      <Button color="gray" onClick={handleSaveNickname} text="저장" />
    </>
  ) : (
    <>
      {nickname}
      <img
        className="nickname-chg"
        src="/assets/icons/nickname_change.png"
        alt="Nickname-chg"
        onClick={handleEditNickname}
      />
    </>
  )}
</span>
      </div>
      <div className="titlename">
        <h2 className="title">계정 정보</h2>
        <p>아이디</p>
        <p>{userId}</p>
        <p>비밀번호</p>
        <Input type="password" value={password} onChange={handlePasswordChange} />
        <p>휴대폰 번호</p>
        <Input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        {/* <Grid container spacing={2}>
          <Grid item xs={6}>
            <p className="text-color">지역</p>
            <SelectBox
  options={provinces.map((option) => option.label)}
  value={province}
  onSelectChange={handleProvinceChange}
  placeholder={"도 선택"}
  fontSize="14px"
  height={40}
/>
          </Grid>
          <Grid item xs={6}>
            <p className="text-color">&nbsp;</p>
            <SelectBox
  options={(cities[province] || []).map((option) => option.label)}
  value={city}
  onSelectChange={handleCityChange}
  placeholder={"시 선택"}
  isDisabled={!province}
  fontSize="14px"
  height={40}
/>
          </Grid>
        </Grid>

        <p>태그</p>
        <Input type="text" value={newTag} onChange={handleTagChange} />
        <div className="taglocation">
          {tags.map((tag, index) => (
            <span key={index} className="Tag tag-color-blue">
              {tag}
              <span onClick={() => handleTagRemove(index)}>&times;</span>
            </span>
          ))}
        </div> */}
      </div>
      <Button color="gray" onClick={handleSave} text="수정하기" />
    </div>
  );
};


export default UserModify;