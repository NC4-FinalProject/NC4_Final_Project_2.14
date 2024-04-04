import Input from "../../components/ui/lnput/Input";
import "../../scss/pages/community/CommunityRename.scss"
import Tag from "../../components/ui/Tag";
import Button from "../../components/ui/button/Button";
import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { communityModify } from '../../apis/communityApi.js';
// import { removeBoard } from '../../apis/communityApi.js';
const CommunityRename = () => {
    // const [community, setCommunity] = useState(null);
        const [community, setCommunity] = useState({
        description: '',
        member: '',
        name: '',
        tags: [], // 태그를 저장할 배열 추가
        picture:'',
    });

        const { seq } = useParams();
        const loginId = useSelector(state => state.userSlice.loginUserId);
    

        const dispatch = useDispatch();
        const navi = useNavigate();

    
    const getCommunity = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:9090/community/community/${seq}`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
                    }
                }
            );
            
            console.log(response.data.item);

            setCommunity(response.data.item);
            console.log(",<<,,<< "+response.data.item);
        } catch(e) {
            // alert("에러발생.");
            console.log("aaaaaaaa")
            console.log(e);
        }
    }, [seq]);

    useEffect(() => {
        getCommunity();
    }, []);
    
    // const [form, setForm] = useState({
    //     description: '',
    //     member: '',
    //     name: '',
    //     tags: [], // 태그를 저장할 배열 추가
    //     picture:'',
    // });

    //    useEffect(() => {
    //     console.log(form);
    // }, [form]);
    

     const [isCommunityCreated, setIsCommunityCreated] = useState(false); // 커뮤니티 개설 여부 상태
    
    const [tagInput, setTagInput] = useState(''); // 태그 입력을 위한 임시 상태
    
    const [tags, setTags] = useState([]); // 태그를 저장할 배열 추가
    
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

    const textFiledChanged = useCallback((e) => {
        setCommunity({
            ...community,
            [e.target.name]: e.target.value,
        });
    }, [community]);

    const handleTagInput = useCallback((e) => {
        if (e.key === 'Enter') {
            console.log("1");
            e.preventDefault(); // 폼 제출 방지
            if (tagInput.trim() !== '' && !community.tags.includes(tagInput.trim()) && community.tags.length < 5) {
                console.log("2");
                console.log(e.target.value);
                setCommunity(prevForm => ({
                    ...prevForm,
                    tags: [...prevForm.tags, tagInput.trim()],
                }));
                setTagInput('');
            }
        }
    }, [tagInput, community.tags]);
    
    
    const handleTagChange = (e) => {
        setTagInput(e.target.value); // 태그 입력 상태 업데이트
    };

    const handleRemoveTag = useCallback((index) => {
     setCommunity(prevForm => ({
        ...prevForm,
        tags: prevForm.tags.filter((_, tagIndex) => tagIndex !== index),
    }));
}, []);

    const handleRenameCommunity = useCallback(async (e) => {
        e.preventDefault();
        await dispatch(communityModify(community));
        setIsCommunityCreated(true); // 커뮤니티 개설 후 상태 업데이트
    }, [community, dispatch]);
        
    //     const remove = useCallback((boardNo) => {
    //     dispatch(removeBoard(boardNo));
    //     navi("/board-list");
    // }, [dispatch, navi]);

    
    useEffect(() => {
        console.log
            (community);
    },[community]);

    return (
        <div className="rename_community">
            <form onSubmit={handleRenameCommunity}>
                {community && (
                    <>
                    <input type='hidden'  name='seq' id='seq'></input>
                <div className="community_container">
                    <div className="input_container">
                        <Input
                                placeholder="커뮤니티 명"
                                label="커뮤니티"
                                labelClassName="label-name"
                                name="name"
                                value={community.name}
                                onChange={textFiledChanged}
                            />
                    </div>
                    {/* {community.name  && <input type='hidden' name='communityId' value={form.id}></input>} */}
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
                        {community.tags.map((tag, index) => (
                            <Tag key={index} color="blue" text={`#${tag.content}`}>
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
                        type="file"
                        id="hiddenFileInput"
                        name="picture"
                        value={community.picture}
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
                        value={community.description}
                        onChange={textFiledChanged}
                    ></textarea>                 
                    <div className="input_footer_container">
                        <div className="people_container">
                            <img className="icon" src={process.env.PUBLIC_URL + '/assets/icons/friend_gray.svg'}
                                alt=''/>
                                <p>정원(0~300)</p>
                        </div>
                        <div className="user_input_container">
                                <Input
                                    placeholder={"인원 수 입력"}
                                    name="member"
                                    value={community.member}
                                    onChange={textFiledChanged}
                                />
                            </div>
                    </div>
                    <div className="button_footer_container">
                        <Button type={'submit'} color={'green'} text={'커뮤니티수정'}/>
                    </div>                
                </div>
                    </>
                )
                }
            </form>
        </div>
    );
}

export default CommunityRename;