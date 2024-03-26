import Input from "../../components/ui/lnput/Input";
import "../../scss/pages/community/CreateCommunity.scss"
import Tag from "../../components/ui/Tag";
import React from "react";
import Button from "../../components/ui/button/Button";

const CreateCommunity = () => {
    return (
        <div className="create_community">
            <div className="community_container">
                <div className="input_container">
                    <Input placeholder={"커뮤니티 명"} label={"커뮤니티"} labelClassName="label-name"></Input>
                </div>
                <div className="input_container">
                    <Input placeholder={"#강원도"} label={"태그"} labelClassName="label-name"></Input>
                </div>

                <div className="tag_container">
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                </div>
                <textarea className="text_input" placeholder="모임 목표를 설정해주세요" ></textarea>                 
                <div className="input_footer_container">
                    <div className="people_container">
                        <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'}
                            alt=''/>
                            <p>정원(0~300)</p>
                    </div>
                    <div className="user_input_container">
                        <Input placeholder={"인원 수 입력"}></Input>
                    </div>
                </div>
                <div className="button_footer_container">
                    <Button type={'submit'} color={'green'} text={'커뮤니티개설'}/>
                </div>
                
            </div>


        </div>
    );
}

export default CreateCommunity;