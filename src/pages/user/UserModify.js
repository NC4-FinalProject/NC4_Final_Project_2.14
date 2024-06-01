import React, { useState, useEffect } from 'react';
import '../../scss/pages/user/User.scss';
import Input from '../../components/ui/lnput/Input';
import Button from '../../components/ui/button/Button';
import '../../scss/ui/Tag.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Avatar, Grid } from '@mui/material';
import { setProfileImageUrl, updateUserName } from '../../slices/userSlice';
import { uploadProfileImage, updateProfileImage, deleteProfileImage } from '../../apis/userApi';
import SelectBox from '../../components/ui/SelectBox';

const UserModify = () => {
  //  const userInfo = useSelector((state) => {console.log(state); return state.userSlice.userInfo});
   const userId = useSelector(state => state.userSlice.loginUserId);
   const profileImageUrl = useSelector((state) => state.userSlice.profileImageUrl);
   const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [editedNickname, setEditedNickname] = useState('');
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [tags, setTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [areaCode, setAreaCode] = useState('');
  const [areaName, setAreaName] = useState('');
  const [sigunguCode, setSigunguCode] = useState('');
  const [sigunguName, setSigunguName] = useState('');
  const [areas, setAreas] = useState([]);
  const [cities, setCities] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

   useEffect(() => {
    const fetchUserInfo = async () => {
      console.log(userId)
      try {
        const response = await axios.get(`http://localhost:9090/user/modifyuser/${userId}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
        console.log(response)
        const { userName, userTel, profileImageUrl: serverProfileImageUrl, tags, areaCode, areaName, sigunguCode, sigunguName} = response.data;
        setNickname(userName);
        setPhoneNumber(userTel);
        dispatch(setProfileImageUrl(serverProfileImageUrl));
        setTags(tags);
        setAreaCode(areaCode);
        setAreaName(areaName);
        setSigunguCode(sigunguCode);
        setSigunguName(sigunguName);
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
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`http://localhost:9090/user/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      const uploadedImageUrl = response.data;
      setProfileImageUrl(uploadedImageUrl); 
      dispatch(setProfileImageUrl(uploadedImageUrl));
      alert('프로필 이미지가 성공적으로 업로드되었습니다.');
    } catch (error) {
      console.error('Error uploading profile image:', error);
      alert('프로필 이미지 업로드에 실패했습니다.');
    }
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (tags.length < 5) {
        setTags([...tags, e.target.value]);
        e.target.value = '';
      }
    }
  };

  const handleTagRemove = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  useEffect(() => {
    axios.get('http://localhost:9090/user/areas')
      .then(response => {
        setAreas(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch areas', error);
      });
  }, []);

  const handleProvinceChange = (selectedOption) => {
    const selectedArea = areas.find(area => area.name === selectedOption.value);
    setAreaCode(selectedArea.code);
    setAreaName(selectedArea.name);
    const cityNames = selectedArea.sigunguCodes.map(sigungu => sigungu.name);
    setCities(cityNames);
    setSigunguCode('');
    setSigunguName('');
  };
  
  const handleCityChange = (selectedOption) => {
    const selectedSigungu = areas.find(area => area.name === areaName)
      .sigunguCodes.find(sigungu => sigungu.name === selectedOption.value);
    setSigunguCode(selectedSigungu.code);
    setSigunguName(selectedSigungu.name);
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
  
  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
  const newPassword = e.target.value;
  setNewPassword(newPassword);

  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  setValidPassword(passwordPattern.test(newPassword));

  setPasswordMatch(newPassword === confirmPassword && newPassword !== '');
};

const handleConfirmPasswordChange = (e) => {
  const confirmPassword = e.target.value;
  setConfirmPassword(confirmPassword);

  setPasswordMatch(newPassword === confirmPassword && confirmPassword !== '');
};

useEffect(() => {
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  setValidPassword(passwordPattern.test(newPassword));

  setPasswordMatch(newPassword === confirmPassword && newPassword !== '');
}, [newPassword, confirmPassword]);

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    setPhoneNumber(formattedValue);
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

  const handlePasswordConfirmation = async () => {
    try {
      const formData = new FormData();
    formData.append('currentPassword', currentPassword);
      const response = await axios.post('http://localhost:9090/user/confirmPassword', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
  
      
    if (response.data.isPasswordValid) {
      setIsPasswordConfirmed(true);
      setPasswordConfirmMessage('비밀번호가 일치합니다.');
    } else {
      setIsPasswordConfirmed(false);
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
    }
    } catch (error) {
      console.log(currentPassword);
      console.error('Error confirming password:', error);
    }
  };
  
  const handlePasswordUpdate = async () => {
    if (newPassword === confirmPassword) {
      try {
        const formData = new FormData();
        formData.append('newPassword', newPassword);
  
        await axios.put(`http://localhost:9090/user/updatePassword`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
          },
        });
      } catch (error) {
        console.error('Error updating password:', error);
      }
    } else {
      alert('새로운 비밀번호를 확인해주세요.');
    }
  };

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
      alert('닉네임이 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error('Error updating nickname:', error);
      alert('닉네임 수정에 실패했습니다.');
    }
  };
  

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:9090/user/modifyuser/${userId}`, {
        userTel: phoneNumber,
        profileImageUrl,
        tags,
        areaCode,
        areaName,
        sigunguCode,
        sigunguName
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
        },
      });
      alert('사용자 정보 수정에 성공했습니다.');
    } catch (error) {
      console.error('Error updating user information:', error);
      alert('사용자 정보 수정에 실패했습니다.');
    }
  };

  return (
    <div className="UserModify">
      <div className="profile">
      <Avatar
          className="userface-gray"
          src={profileImageUrl || "/assets/icons/userface_gray.png"}
          alt="Userface"
          style={{ alignItems: 'center', width: '150px', height: '150px', borderRadius: '70%', marginLeft: '40%' }}
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
        <div>

      <Input
        type="password"
        placeholder="기존 비밀번호"
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
      />
      <Button color="gray" onClick={handlePasswordConfirmation} text="비밀번호 확인" />
      {passwordConfirmMessage && (
  <p className={`password-confirm-message ${isPasswordConfirmed ? 'success' : 'error'}`}>
    {passwordConfirmMessage}
  </p>
)}

      {isPasswordConfirmed && (
        <>
          <Input
            type="password"
            placeholder="새로운 비밀번호"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          {!validPassword && newPassword.length > 0 && (
  <p className="error-message">비밀번호는 8자 이상 20자 이하, 영문자, 숫자, 특수문자를 포함해야 합니다.</p>
)}
          <Input
            type="password"
            placeholder="새로운 비밀번호 확인"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!passwordMatch && confirmPassword.length > 0 && (
  <p className="error-message">새로운 비밀번호와 일치하지 않습니다.</p>
)}
          <Button color="gray" onClick={handlePasswordUpdate} text="비밀번호 변경" />
        </>
      )}
    </div>
        <p>휴대폰 번호</p>
        <Input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <p>태그</p>
        <Input type="text" onKeyDown={handleTagInput} />
        <div className="taglocation">
            {tags.map((tag, index) => (
          <span key={index} className="Tag tag-color-blue" onClick={() => handleTagRemove(index)} style={{ display: 'inline-flex', alignItems: 'center' }}>
          {tag}
          <span>&times;</span>
        </span>
            ))}
        </div>

        <Grid container spacing={2}>
        <Grid item xs={6}>
        <p className="text-color">지역</p>
        <SelectBox
        options={areas.map(area => area.name)}
        value={areaName}
        onSelectChange={handleProvinceChange}
        placeholder={"도 선택"}
        fontSize="14px"
        height={40}
        />
        </Grid>
        <Grid item xs={6}>
        <p className="text-color">&nbsp;</p>
        <SelectBox
        options={cities}
        value={sigunguName}
        onSelectChange={handleCityChange}
        placeholder={"시 선택"}
        isDisabled={!areaName}
        fontSize="14px"
        height={40}
        />
        </Grid>
      </Grid>
      </div>
      <div>
      <Button color="gray" onClick={handleSave} text="수정하기" />
    </div>
    </div>
  );
};


export default UserModify;