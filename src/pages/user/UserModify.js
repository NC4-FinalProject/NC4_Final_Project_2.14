import React, { useState, useEffect } from 'react';
import '../../scss/pages/user/User.scss';
import Input from '../../components/ui/lnput/Input';
import Button from '../../components/ui/button/Button';
import '../../scss/ui/Tag.scss';
import { uploadProfileImage } from '../../apis/userApi';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UserModify = () => {
  //  const userInfo = useSelector((state) => {console.log(state); return state.userSlice.userInfo});
   const userId = useSelector(state => state.userSlice.loginUserId);
   const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [newNickname, setNewNickname] = useState('');
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
        const response = await axios.get(`http://localhost:9090/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
        const { userName, userPw, userTel, profileImageUrl } = response.data;
        setNickname(userName);
        setPassword(userPw);
        setPhoneNumber(userTel);
         // const [province, city] = parseLocation(user.location);
        // setProvince(province);
        // setCity(city);
        // setTags(user.tags);
        setProfileImageUrl(profileImageUrl || '/assets/icons/userface_gray.png');
      } catch (error) {
        console.error('Error fetching use information:', error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(uploadProfileImage(file))
      .unwrap()
      .then((uploadedImageUrl) => {
        setProfileImageUrl(uploadedImageUrl);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  
  // const parseLocation = (location) => {
  //   if (location) {
  //     return location.split(' ');
  //   }
  //   return ['', ''];
  // };


  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
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
      await axios.put(`http://localhost:9090/user/${userId}`, {
        userName: newNickname,
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      setNickname(newNickname);
      setIsEditingNickname(false);
      setNewNickname('');
    } catch (error) {
      console.error('Error updating nickname:', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:9090/user/${userId}`, {
        userPw: password,
        userName: nickname,
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
         <img
        className="userface-gray"
        src={profileImageUrl || "/assets/icons/userface_gray.png"}
        alt="Userface"
      />
      <img
        className="userface-chg"
        src="/assets/icons/userface_change.png"
        alt="Userface-chg"
        onClick={() => document.getElementById("imageUpload").click()}
      />
      <input
        type="file"
        id="imageUpload"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
       <span className="nickname">
          {isEditingNickname ? (
            <Input type="text" value={newNickname} onChange={handleNicknameChange} />
          ) : (
            <>
              {nickname}
              <img
                className="nickname-chg"
                src="/assets/icons/nickname_change.png"
                alt="Nickname-chg"
                onClick={() => setIsEditingNickname(true)}
              />
            </>
          )}
          {isEditingNickname && (
            <Button color="gray" onClick={handleSaveNickname} text="저장" />
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