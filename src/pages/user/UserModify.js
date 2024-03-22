import React, { useState } from 'react';
import '../../scss/pages/user/User.scss';
import Input from '../../components/ui/lnput/Input';
import Button from '../../components/ui/button/Button';
import SelectBox from '../../components/ui/SelectBox';
import '../../scss/ui/Tag.scss';
import { Grid } from '@mui/material';


const UserModify = () => {
  const [nickname, setNickname] = useState('abcdefgh123');
  const [newNickname, setNewNickname] = useState('');
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('010-xxxx-xxxx');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [tags, setTags] = useState(['#ESTP', '#바다']);
  const [newTag, setNewTag] = useState('');

  const userId = "vicecity1212";

  const provinces = [
    { value: '', label: '도 선택'},
    { value: '경기도', label: '경기도' },
    { value: '강원도', label: '강원도' },
    { value: '충청북도', label: '충청북도' },
  ];
  
  const cities = {
    '': [
      {value: '시 선택', label: '시 선택'}
    ],
    '경기도': [
      { value: '수원시', label: '수원시' },
      { value: '성남시', label: '성남시' },
      { value: '용인시', label: '용인시' },
    ],
    '강원도': [
      { value: '춘천시', label: '춘천시' },
      { value: '강릉시', label: '강릉시' },
    ],
    '충청북도': [
      { value: '청주시', label: '청주시' },
      { value: '충주시', label: '충주시' },
    ],
  
  };

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  const handleProvinceChange = (value) => {
    setProvince(value);
    setCity('');
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleTagChange = (e) => {
    setNewTag(e.target.value);
  };

  const handleSave = () => {
    if (newNickname) {
      setNickname(newNickname);
      setIsEditingNickname(false);
      setNewNickname('');
    }
    if (newPassword) {
      setPassword(newPassword);
      setNewPassword('');
    }
    if (newPhoneNumber) {
      setPhoneNumber(newPhoneNumber);
      setNewPhoneNumber('');
    }
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleTagRemove = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="UserModify">
      <div className="profile">
        <img className="userface-gray" src="/assets/icons/userface_gray.png" alt="Userface-gray" />
          <img
            className="userface-chg"
            src="/assets/icons/userface_change.png"
            alt="Userface-chg"
            // onclick 프로필이미지 변경
          />
        <span className="nickname">
          {isEditingNickname ? (
            <Input type="text" value={newNickname} onChange={handleNicknameChange} />
          ) : (
            nickname
          )}
          {!isEditingNickname && (
            <img
              className="nickname-chg"
              src="/assets/icons/nickname_change.png"
              alt="Nickname-chg"
              onClick={() => setIsEditingNickname(true)}
            />
          )}
        </span>
      </div>
      <div className="titlename">
        <h2 className="title">계정 정보</h2>
        <p>아이디</p>
        <p>{userId}</p>
        <p>비밀번호</p>
        <Input type="password" value={newPassword} onChange={handlePasswordChange} />
        <p>휴대폰 번호</p>
        <Input type="text" value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p className="text-color">지역</p>
            <SelectBox
              options={provinces.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              options={(cities[province] || []).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
        </div>
      </div>
      <Button color="gray" onClick={handleSave} text="수정하기" />
    </div>
  );
};

export default UserModify;