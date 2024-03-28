import React, { useCallback, useState } from 'react';
import '../../scss/pages/community/CreateCommunity.scss';
import Input from '../../components/ui/lnput/Input.js';
import Tag from '../../components/ui/Tag';
import Button from '../../components/ui/button/Button';
import { useDispatch } from 'react-redux';
import { communityReg } from '../../apis/CommunityApi.js';

const CreateCommunity = () => {
    const [form, setForm] = useState({
        description: '',
        capacity: '',
        name: '',
        tags: [], // 태그를 저장할 배열 추가
    });

      const [tagInput, setTagInput] = useState(''); // 태그 입력을 위한 임시 상태

    const textFiledChanged = useCallback((e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }, [form]);

        const handleTagInput = useCallback((e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '' && !form.tags.includes(tagInput.trim()) && form.tags.length < 5) {
            setForm(prevForm => ({
                ...prevForm,
                tags: [...prevForm.tags, tagInput.trim()],
            }));
            setTagInput('');
        }
    }, [tagInput, form.tags]);

      const handleTagChange = (e) => {
        setTagInput(e.target.value); // 태그 입력 상태 업데이트
    };

    const dispatch = useDispatch();
    
        const handleCreateCommunity = useCallback((e) => {
        e.preventDefault();
        dispatch(communityReg(form));
    }, [form, dispatch]);


    return (
        <div className="create_community">
            <form onSubmit={handleCreateCommunity}>
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
                            <Tag key={index} color="blue" text={`#${tag}`} />
                        ))}
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
                                name="capacity"
                                value={form.capacity}
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