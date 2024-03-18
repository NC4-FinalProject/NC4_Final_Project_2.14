import React from 'react'
import TextInput from "../../components/ui/lnput/TextInput";
import { useForm } from 'react-hook-form';
import Button from "../../components/ui/button/Button";
import '../../scss/pages/Sign.scss';
import { DevTool } from "@hookform/devtools" ;

function SignUp() {

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="SignUp">
      <form id="form-sign-up" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <p>아이디</p>
        <TextInput color='red' type='id' name='id' placeholder='아이디를 입력해주세요' 
        {...register('id', 
        { required: {
          value: true,
          message: "아이디를 입력해주세요"
        }
        })} />
         <p>{errors.id && errors.id.message}</p>
        <Button color={"gray"} text={"중복확인"}></Button>
        <br></br>
        <br></br>
        <br></br><p>비밀번호</p>
        <TextInput color={'red'} type={""} name={""} placeholder={'비밀번호를 입력해주세요'} />
       
        <br></br>
        <br></br>
        <br></br>
        <p>비밀번호 확인</p>
        <TextInput color={'red'} type={""} name={""} placeholder={'비밀번호를 다시 한번 입력해주세요'} />
        <br></br>
        <br></br>
        <br></br>
        <p>닉네임</p>
        <TextInput color={'red'} type={""} name={""} placeholder={'닉네임을 입력해주세요'} /> 
        <button type="submit">가입 완료</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
