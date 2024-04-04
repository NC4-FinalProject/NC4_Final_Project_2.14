import React, { useCallback, useState } from 'react';
import '../../scss/pages/community/CreateCommunity.scss';
import Input from '../../components/ui/lnput/Input.js';
import Tag from '../../components/ui/Tag';
import Button from '../../components/ui/button/Button';
import { useDispatch } from 'react-redux';
import { communityReg } from '../../apis/communityApi.js';

const CreateCommunity = () => {
    const [form, setForm] = useState({
        description: '',
        member: '',
        name: '',
        tags: [], // 태그를 저장할 배열 추가
        picture:'',
    });

        const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.name !== "tag") {
            e.preventDefault();
        }
    };
    const [isCommunityCreated, setIsCommunityCreated] = useState(false); // 커뮤니티 개설 여부 상태
    
    const [tagInput, setTagInput] = useState(''); // 태그 입력을 위한 임시 상태

    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    
    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // 선택된 파일을 가져옵니다.
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreviewUrl(e.target.result); // 이미지 URL을 상태에 저장합니다.
            };
              reader.readAsDataURL(file); // 파일을 Data URL 형태로 읽습니다.
            // form 상태에 파일 객체 저장
            setForm({ ...form, picture: file }); // 여기를 수정합니다.
        }
    };


    const textFiledChanged = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

    const handleTagInput = useCallback((e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 폼 제출 방지
            if (tagInput.trim() !== '' && !form.tags.includes(tagInput.trim()) && form.tags.length < 5) {
                setForm(prevForm => ({
                    ...prevForm,
                    tags: [...prevForm.tags, tagInput.trim()],
                }));
                setTagInput('');
            }
        }
    }, [tagInput, form.tags]);
    
    
    
    const handleTagChange = (e) => {
        setTagInput(e.target.value); // 태그 입력 상태 업데이트
    };

    const handleRemoveTag = useCallback((index) => {
    setForm(prevForm => ({
        ...prevForm,
        tags: prevForm.tags.filter((_, tagIndex) => tagIndex !== index),
    }));
}, []);

const dispatch = useDispatch();

 const handleCreateCommunity = useCallback(async (e) => {
    // e.preventDefault();
    // await dispatch(communityReg(form));
     // setIsCommunityCreated(true); // 커뮤니티 개설 후 상태 업데이트
       e.preventDefault();// 수정된 부분
    await dispatch(communityReg(form)); // formData를 전송하는 부분을 확인해야 합니다.
    setIsCommunityCreated(true);
 }, [form, dispatch]);
    
const formData = new FormData();
formData.append("community", new Blob([JSON.stringify(form)], { type: "application/json" }));
formData.append("picture", form.picture); // form.picture가 실제 파일 객체를 가리키고 있다고 가정합니다.



    return (
        <div className="create_community">
            <form onSubmit={handleCreateCommunity} onKeyDown={handleKeyDown} >
                <div className="community_container">
                    <div className="input_container">
                        <Input
                             placeholder="커뮤니티 명"
                            label="커뮤니티"
                            labelClassName="label-name"
                            name="name"
                            value={form.name}
                            onChange={textFiledChanged}
                        />
                    </div>
                    <div className="input_container">
                        <Input
                            placeholder="#태그"
                            label="태그"
                            labelClassName="label-name"
                            name="tag"
                            value={tagInput}
                            onChange={handleTagChange}
                            onKeyDown={handleTagInput}
                        />
                    </div>
                <div className="tag_container">
                    {form.tags.map((tag, index) => (
                        <Tag key={index} color="blue" text={`#${tag}`}>
                            {!isCommunityCreated && (
                            <button onClick={() => handleRemoveTag(index)} className="remove-tag-button">
                                    <img
                                        className="icon"
                                        src={process.env.PUBLIC_URL + '/assets/icons/exit.svg'}
                                        alt=''
                                    />
                             </button>
                            )}
                        </Tag>
                    ))}
                    </div>
                    <Input
                        key={imagePreviewUrl || '_'}
                        type="file"
                        id="hiddenFileInput"
                        name="picture"
                        // value={form.picture}
                        onChange={handleFileSelect} />
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
                    <textarea
                        className="text_input"
                        placeholder="모임 목표를 설정해주세요"
                        name="description"
                        value={form.description}
                        onChange={textFiledChanged}
                    ></textarea>
                    <div className="input_footer_container">
                        <div className="people_container">
                            <img
                                className="icon"
                                src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'}
                                alt=''
                            />
                            <p>정원(0~300)</p>
                        </div>
                        <div className="user_input_container">
                            <Input
                                placeholder={"인원 수 입력"}
                                name="member"
                                value={form.member}
                                onChange={textFiledChanged}
                            />
                        </div>
                    </div>
                    <div className="button_footer_container">
                        <Button type={'submit'} color={'green'} text={'커뮤니티개설'} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateCommunity;