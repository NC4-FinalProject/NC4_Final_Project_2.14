import React, {useEffect, useState} from 'react'
import Input from '../../components/ui/lnput/Input.js';
import {useForm} from 'react-hook-form';
import Button from "../../components/ui/button/Button";
import '../../scss/pages/sign/Sign.scss';
import {Grid} from '@mui/material';
import FullWidthButton from "../../components/ui/button/FullWidthButton";
import '../../scss/ui/Tag.scss';
import {signup} from '../../apis/userApi.js';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import SelectBox from "../../components/ui/SelectBox";

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

    const dispatch = useDispatch();

    const {
        register,
        watch,
        formState: {errors},
        handleSubmit,
        getValues,
        setError,
        clearErrors,
    } = useForm({
        mode: "onChange"

    });

    const password = watch('password', '');
    const passwordCheck = watch('passwordCheck', '');
    const [passwordMatch, setPasswordMatch] = useState(false);

    const API_URL = "http://localhost:9090";

    const handleIdCheck = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/user/check-userid?userid=${id}`);
            console.log('Response from id check:', response.data);
            console.log(response)
            const {item} = response.data;
            if (item && item.available) {
                clearErrors('id');
                setIdCheck(true);
                setIdChecked(true);
            } else {
                setError('id', {
                    color: 'red',
                    type: 'id-duplicate',
                    message: '이미 사용 중인 아이디입니다',
                });
                setIdCheck(false);
            }
            setIdChecked(true);
        } catch (error) {
            console.error('ID 중복 확인 실패:', error);
        }
    };

    const handleNicknameCheck = async (nickname) => {
        try {
            const response = await axios.get(`${API_URL}/user/check-username?username=${nickname}`);
            const {item} = response.data;
            if (item && item.available) {
                clearErrors('nickname');
                setNicknameCheck(true);
                setNicknameChecked(true);
            } else {
                setError('nickname', {
                    color: 'red',
                    type: 'nickname-duplicate',
                    message: '사용할 수 없는 닉네임입니다',
                });
                setNicknameCheck(false);
            }
            setNicknameChecked(true);
        } catch (error) {
            console.error('닉네임 중복 확인 실패:', error);
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

    const handleSignUp = async (data) => {
        const user = {
            userId: data.id,
            userPw: data.password,
            userName: data.nickname,
            // tags: tags.map(String),
            // location: `${province} ${city}`,
            userBirth: `${year.value}-${month.value < 10 ? '0' + month.value : month.value}-${day.value < 10 ? '0' + day.value : day.value}T00:00:00`,
            userTel: phoneNumber,
        };
        console.log(user)
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

    const years = Array.from({length: 100}, (_, i) => new Date().getFullYear() - i);
    const months = Array.from({length: 12}, (_, i) => i + 1);
    const days = Array.from({length: 31}, (_, i) => i + 1);

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
        const {value} = event.target;
        const formattedValue = value.replace(/\D/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        setPhoneNumber(formattedValue);
    };

    return (
        <div className="SignUp">
            <form id="form-sign-up" onSubmit={handleSubmit(handleSignUp)} className="signup-form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="title">아이디</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            type='id'
                            name='id'
                            placeholder='아이디를 입력해주세요'
                            {...register('id', {
                                required: '아이디를 입력해주세요',
                                validate: value => {
                                    if (!idChecked && value !== '') return '중복 확인을 해주세요.';
                                    return true;
                                }
                            })}
                        />
                    </Grid>
                    <Grid item alignItems={'center'} xs={2}>
                        <Button
                            color={"gray"}
                            text={"중복확인"}
                            onClick={() => handleIdCheck(getValues('id'))}
                        />
                    </Grid>
                    {!idChecked && <p className="error-message">{errors.id && errors.id.message}</p>}
                    {idChecked && idCheck && <p className="check-message">사용 가능한 아이디입니다.</p>}
                    {idChecked && !idCheck && <p className="error-message">이미 사용 중인 아이디입니다.</p>}
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="title">비밀번호</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='비밀번호를 입력해주세요'
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
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="title">닉네임</p>
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
                    <Grid item alignItems={'center'} xs={2}>
                        <Button
                            color={"gray"}
                            text={"중복확인"}
                            onClick={() => handleNicknameCheck(getValues('nickname'))}
                        />
                    </Grid>
                    {!nicknameChecked && <p className="error-message">{errors.nickname && errors.nickname.message}</p>}
                    {nicknameChecked && nicknameCheck && <p className="check-message">사용 가능한 닉네임입니다.</p>}
                    {nicknameChecked && !nicknameCheck && <p className="error-message">사용할 수 없는 닉네임입니다.</p>}
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="title">태그 추가 (최대 5개)</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            type='text'
                            name='tags'
                            placeholder='태그를 입력하고 엔터를 눌러주세요'
                            onKeyDown={handleTagInput}
                        />
                    </Grid>
                </Grid>
                <div className="tag-wrapper">
                    {tags.map((tag, index) => (
                        <span key={index} className="Tag tag-color-blue">
            {tag}
                            <span onClick={() => handleTagRemove(index)}>&times;</span>
        </span>
                    ))}
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <p className="title">지역 선택</p>
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
                        <p className="title">&nbsp;</p>
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
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className="SelectOptions">
                            <p className="title">생년월일</p>
                            <SelectBox
                                options={years}
                                value={year}
                                onSelectChange={handleYearChange}
                                placeholder="년도"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="SelectOptions">
                            <p className="title">&nbsp;</p>
                            <SelectBox
                                options={months}
                                value={month}
                                onSelectChange={handleMonthChange}
                                placeholder="월"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="SelectOptions">
                            <p className="title">&nbsp;</p>
                            <SelectBox
                                options={days}
                                value={day}
                                onSelectChange={handleDayChange}
                                placeholder="일"
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <p className="title">휴대폰 번호</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Input
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            placeholder="010-0000-0000"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FullWidthButton
                        color={'green'}
                        text={'가입 완료'}
                        type="submit"
                        disabled={!year || !month || !day || !province || !city}
                    />
                </Grid>
            </form>
        </div>
    )
}

export default SignUp;