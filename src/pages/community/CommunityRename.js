import Input from "../../components/ui/lnput/Input";
import "../../scss/pages/community/CommunityRename.scss"
import Tag from "../../components/ui/Tag";
import Button from "../../components/ui/button/Button";
import React, { useState } from "react";

const CommunityRename = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // 선택된 파일을 가져옵니다.
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreviewUrl(e.target.result); // 이미지 URL을 상태에 저장합니다.
            };
            reader.readAsDataURL(file); // 파일을 Data URL 형태로 읽습니다.
        }
    };


//     // 파일 선택 트리거 함수
//   const triggerFileInput = () => {
//     document.getElementById('hiddenFileInput').click();
//     };
    
    return (
        <div className="rename_community">
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
                <input type="file" id="hiddenFileInput" onChange={handleFileSelect}/>
                <div id="customFileUpload"
                    onClick={() => document.getElementById('hiddenFileInput').click()}
                    style={{
                    backgroundImage: `url(${imagePreviewUrl})`,
                                }}
                >
                        {!imagePreviewUrl && (
                            <>
                            <img className="file_icon"src={process.env.PUBLIC_URL + '/assets/icons/photo_file.svg'}
                            alt=''/>  
                                <p className="file_icon_text">대표이미지</p>
                            </>
                        )}
                </div>
                {/* 이미지 미리보기 */}
                        {/* {imagePreviewUrl && (
                        <div style={{ marginTop: '10px' }}>
                            <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        </div>
                        )} */}
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
                <div className="button-footer-container">
                    <Button type={'submit'} color={'green'} text={'커뮤니티개설'}/>
                </div>                
            </div>
        </div>
    );
}

export default CommunityRename;