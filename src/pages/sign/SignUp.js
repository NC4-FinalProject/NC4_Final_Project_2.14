import React from 'react'
import Input from '../../components/ui/lnput/Input.js';
import { useForm } from 'react-hook-form';
import Button from "../../components/ui/button/Button";
import '../../scss/pages/sign/Sign.scss';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import FullWidthButton from "../../components/ui/button/FullWidthButton";
import '../../scss/ui/Tag.scss';
import SelectBox from '../../components/ui/SelectBox';
import { signup } from '../../apis/userApi.js';
import { useDispatch } from 'react-redux';

function SignUp() {
  const [idCheck, setIdCheck] = useState(false);
  const [idChecked, setIdChecked] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [tags, setTags] = useState([]);
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  
const dispatch = useDispatch();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
    clearErrors,
  } = useForm({mode: "onChange"

  });

  const password = watch('password', '');
  const passwordCheck = watch('passwordCheck', '');
  const [passwordMatch, setPasswordMatch] = useState(false);



  const handleIdCheck = (id) => {
    if (existingIDs.includes(id)) {
      setError('id', {
        color: 'red',
        type: 'id-duplicate',
        message: '이미 사용 중인 아이디입니다',
      });
      setIdChecked(true);
    } else {
      clearErrors('id');
      setIdCheck(true);
      setIdChecked(true);
    }
  };

  const handleNicknameCheck = (nickname) => {
    if (existingNicknames.includes(nickname)) {
      setError('nickname', {
        color: 'red',
        type: 'nickname-duplicate',
        message: '사용할 수 없는 닉네임입니다',
      });
      setNicknameChecked(true);
    } else {
      clearErrors('nickname');
      setNicknameCheck(true);
      setNicknameChecked(true);
    }
  };

  const existingIDs = ['aaa', 'bbb', 'ccc'];
  const existingNicknames = ['aaa', 'bbb', 'ccc'];

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

  const handleSignUp = async (data) => {
    // 3. 폼 데이터 유효성 검사
    if (Object.keys(errors).length !== 0) {
      console.error("폼 데이터에 유효성 검사 에러가 있습니다.");
      return;
    }

    // 서버로 전송할 유저 데이터
    const user = {
      id: data.id,
      pw: data.password,
      nickname: data.nickname,
      tags: tags,
      location: `${province} ${city}`,
      birth: `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T00:00:00`,
      tel: phoneNumber,
    };

    try {
      dispatch(signup(user)); 
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };


  useEffect(() => {
    setPasswordMatch(password === passwordCheck && password !== '');
  }, [password, passwordCheck]);

  useEffect(() => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    setValidPassword(passwordPattern.test(password));
  }, [password]);

  const provinces = ['도 선택', '경기도', '경상남도', '전라도'];
  const cities = {
    '': ['시군구 선택'],
    '경기도': ['서울특별시', '수원시', '성남시'],
    '경상남도': ['대구광역시', '부산광역시', '포항시'],
    '전라도': ['광주광역시', '목포시', '해남시'],
  };

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleProvinceChange = (value) => {
    setProvince(value);
    setCity('');
  };

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleYearChange = (value) => {
    setYear(value);
  };

  const handleMonthChange = (value) => {
    setMonth(value);
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    setPhoneNumber(formattedValue);
  };

  const handlePhoneNumberVerification = async () => {
    try {
      //Naver Sens API와 연동하는 코드 작성 예정
      setIsPhoneNumberValid(true);
    } catch (error) {
      console.error('Phone number verification failed:', error);
    }
  };

  return (
    <div className="SignUp">
      <form id="form-sign-up" onSubmit={handleSubmit(handleSignUp)} className="signup-form">
        <div>
        <p className="text-color">아이디</p>
        <Grid container>
          <Grid item xs={10}>
            <Input type='id' name='id' placeholder='아이디를 입력해주세요' 
            {...register('id', {
              required: '아이디를 입력해주세요',
              validate: value => {
                if (!idChecked && value !== '') return '중복 확인을 해주세요.';
                return true;
              }
            })} />
            </Grid>
            <Grid item container alignItems={'center'} xs={2}>
            <Button color={"gray"} text={"중복확인"}  onClick={() => handleIdCheck(getValues('id'))}></Button>
          </Grid>
          <p className="error-message">{errors.id && !idChecked && errors.id.message}</p>
            {idCheck && !errors.id && <p className="check-message">사용 가능한 아이디입니다.</p>}
        </Grid>
        <br></br>

        <Grid container>
        <Grid item xs={10}>
        <p className="text-color">비밀번호</p>
        <Input type='password' id='password' name='password' placeholder='비밀번호를 입력해주세요' 
   {...register('password', {
    required: '비밀번호는 필수 입력입니다.',
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      message: '8~20자리의 영문자, 숫자, 특수문자를 사용해야 합니다.',
    },
  })}
/>
{errors.password && !validPassword && <span>{errors.password.message}</span>}
  </Grid>
</Grid>
        <br></br>

        <Grid container>
        <Grid item xs={10}>
        <p className="text-color">비밀번호 확인</p>
        <Input type='password' id='passwordCheck' name='passwordCheck' placeholder='비밀번호를 다시 한번 입력해주세요'
         {...register('passwordCheck', {
          required: '비밀번호 확인은 필수 입력입니다.',
          validate: (value) =>
            value === password || '비밀번호가 일치하지 않습니다.',
        })}
      />
        </Grid>
      {errors.passwordCheck && <span className="error-message">{errors.passwordCheck.message}</span>}
      {passwordMatch && <span className="check-message">비밀번호가 일치합니다.</span>}
  </Grid>
  <br></br>

  <Grid container>
  <Grid item xs={12}>
    <p className="text-color">닉네임</p>
  </Grid>
  <Grid item xs={10}>
    <Input
      type='nickname'
      name='nickname'
      placeholder='닉네임을 입력해주세요'
      {...register('nickname', {
        required: '닉네임을 입력해주세요',
        validate: value => {
          if (!nicknameChecked && value !== '') return '중복 확인을 해주세요.';
          return true;
        }
      })}
    />
  </Grid>
  <Grid item container alignItems={'center'} xs={2}>
    <Button color={"gray"} text={"중복확인"} onClick={() => handleNicknameCheck(getValues('nickname'))}></Button>
  </Grid>
  <p className="error-message">{errors.nickname && !nicknameChecked && errors.nickname.message}</p>
  {nicknameCheck && !errors.nickname && <p className="check-message">사용 가능한 닉네임입니다.</p>}
</Grid>

            <br></br>
<Grid container>
            <Grid item xs={10}>
<p className="text-color">태그 추가 (최대 5개)</p>
          <Input
            type='text'
            name='tags'
            placeholder='태그를 입력하고 엔터를 눌러주세요'
            onKeyDown={handleTagInput}
          />
           </Grid>
</Grid>
        <br></br>
          <div>
            {tags.map((tag, index) => (
              <span key={index} className="Tag tag-color-blue">
                {tag}
                <span onClick={() => handleTagRemove(index)}>&times;</span>
              </span>
            ))}
          </div>
          
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p className="text-color">지역 선택</p>
              <SelectBox
                options={provinces}
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
                options={cities[province] || []}
                value={city}
                onSelectChange={handleCityChange}
                placeholder={"시 선택"}
                isDisabled={!province}
                fontSize="14px"
                height={40}
              />
            </Grid>
          </Grid>

          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <div className="SelectOptions">
              <p className="text-color">생년월일</p>
              <SelectBox
                options={years}
                value={year}
                onSelectChange={handleYearChange}
                placeholder="년도"
                fontSize="14px"
                height={200}
              />
              </div>
            </Grid>
            <Grid item xs={4}>
            <div className="SelectOptions">
              <p className="text-color">&nbsp;</p>
              <SelectBox
                options={months}
                value={month}
                onSelectChange={handleMonthChange}
                placeholder="월"
                fontSize="14px"
                height={200}
              />
              </div>
            </Grid>
            <Grid item xs={4}>
            <div className="SelectOptions">
              <p className="text-color">&nbsp;</p>
              <SelectBox
                options={days}
                value={day}
                onSelectChange={handleDayChange}
                placeholder="일"
                fontSize="14px"
                height={40}
              />
              </div>
            </Grid>
          </Grid>

          <br></br>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <p className="text-color">휴대폰 번호</p>
              <Input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="010-0000-0000"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                color="gray"
                text="인증번호 받기"
                onClick={handlePhoneNumberVerification}
                disabled={!phoneNumber || isPhoneNumberValid}
              />
            </Grid>
          </Grid>
          {isPhoneNumberValid && <p className="check-message">휴대폰 번호가 인증되었습니다.</p>}

        <br></br>
        <Grid container>
        <Grid item xs={10}>
        <FullWidthButton color={'green'} text={'가입 완료'} type="submit"/>
        </Grid>
        </Grid>
        </div>
      </form>
    </div>
  )
}



export default SignUp

