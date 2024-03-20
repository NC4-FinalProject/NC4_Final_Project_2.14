import Input from "../../components/ui/lnput/Input";
import "../../scss/pages/CreateCommunity.scss"
import Tag from "../../components/ui/Tag";
import React from "react";
import Button from "../../components/ui/button/Button";

const CreateCommunity = () => {
    return (
        <div className="create-community">
            <div className="community_container">
                <div className="input-container">
                    <Input placeholder={"커뮤니티 명"} label={"커뮤니티명"} labelClassName="label-name"></Input>
                </div>
                <div className="input-container">
                    <Input placeholder={"#강원도"} label={"태그"} labelClassName="label-name"></Input>
                </div>
                <div className="tag-container">
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                    <Tag color={'blue'} text={'#검색'}></Tag>
                </div>
                <textarea className="text-input"></textarea>
                <div>
                    <div className="input-footer-container">
                        <div className="people_content">
                            <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'}
                                 alt=''/>
                            <p className="d">정원(0~300)</p>
                        </div>
                        <div className="people_container">
                            <Input placeholder={"인원수 입력"}></Input>
                        </div>
                    </div>
                </div>
                <div className="button-footer-container">
                    <Button type={'submit'} color={'green'} text={'커뮤니티개설'}/>
                </div>
            </div>


        </div>
    );
}

export default CreateCommunity;