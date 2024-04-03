import React, { useCallback, useEffect } from 'react'
import '../../scss/recruitment/MyRecruitment.scss';
import CustomPagination from '../../components/ui/CustomPagination';
import MyRecruitmentContentList from '../../components/recruitment/MyRecruitmentContentList';
import { useDispatch, useSelector } from 'react-redux';
import { getMyRecruitment } from '../../apis/recruitmentApi.js';


const MyRecruitment = () => {
    const recruitment = useSelector(state => state.recruitment.recruitmentDTO);
    const page = useSelector(state => state.recruitment.page);
    const dispatch = useDispatch();

    const search = useCallback((e) => {
        e.preventDefault();

        dispatch(
            getMyRecruitment(
                {
                    page: 0
                }
            )
        );
    }, [dispatch]);

    useEffect(() => {
        dispatch(getMyRecruitment({
            page: 0
        }));
    }, [dispatch]);

    const changePage = useCallback((e, v) => {
        dispatch(getMyRecruitment({
            page: parseInt(v) - 1
        }));
        console.log(v);
    }, [dispatch]);

    return (
        <div className='myRecruitment_container'>
            <form onSubmit={search}>
                <div>
                    <h3>내 모집글</h3>
                </div>
                <MyRecruitmentContentList recruitments={recruitment.content}/>
                {recruitment && <CustomPagination total={recruitment.totalPages} page={page + 1} changePage={changePage} />}
            </form>
        </div>
    );
}

export default MyRecruitment;