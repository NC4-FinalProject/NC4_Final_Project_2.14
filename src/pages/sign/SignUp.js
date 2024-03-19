import React from 'react'
import Input from "../../components/ui/lnput/Input";
import { useForm } from 'react-hook-form';
import Button from "../../components/ui/button/Button";
import '../../scss/pages/Sign.scss';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

function SignUp() {
  const [idCheck, setIdCheck] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
    clearErrors,
  } = useForm({mode: "onChange",  defaultValues: {
    id: '',
    password: '',
    passwordCheck: '',
    term: false,
  },
  });

  const handleIdCheck = (id) => {
    const existingIDs = ['existingID1', 'existingID2', 'existingID3'];
    if (existingIDs.includes(id)) {
      setError('id', {
        type: 'id-duplicate',
        message: '이미 사용 중인 아이디입니다',
      });
    } else {
      clearErrors('id');
      setIdCheck(true); 
    }
  };

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (watch('password') !== watch('passwordCheck') && watch('passwordCheck')) {
      setError('passwordCheck', {
        type: 'password-mismatch',
        message: '비밀번호가 일치하지 않습니다'
      })
    } else {
      clearErrors('passwordCheck');
    }
  }, [watch('password'), watch('passwordCheck')])

  return (
    <div className="SignUp">
      <form id="form-sign-up" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <p>아이디</p>
        <Grid container>
          <Grid item xs={10}>
            <Input type='id' name='id' placeholder='아이디를 입력해주세요' 
            {...register('id', 
            { required: {
              value: true,
              message: "아이디를 입력해주세요",
            }
            })} />
            </Grid>
            <Grid item container alignItems={'center'} xs={2}>
            <Button color={"gray"} text={"중복확인"}  onClick={() => handleIdCheck(getValues('id'))}></Button>
          </Grid>
          <p className="error-message">{errors.id && errors.id.message}</p>
          {idCheck && !errors.id && <p>사용 가능한 아이디입니다.</p>}
        </Grid>
        <Grid container>
        <Grid item xs={10}>
        <p>비밀번호</p>
        <Input color={'red'} type='password' name='password' placeholder='비밀번호를 입력해주세요' 
        {...register('password', {
          pattern: {
            value:
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            minLength: {
              value: 12,
              message: '영문, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
            },
          }
        })} />
        </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={10}>
        <p>비밀번호 확인</p>
        <Input color={'red'} type='password' name='passwordCheck' placeholder={'비밀번호를 다시 한번 입력해주세요'} 
        rules={
          {
            required: "비밀번호를 확인해주세요",
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다'
                }
              }
            }
          }
                />
        </Grid>
        </Grid>
        <p>닉네임</p>
        <Input color={'red'} type={""} name={""} placeholder={'닉네임을 입력해주세요'} /> 
        <button type="submit">가입 완료</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
