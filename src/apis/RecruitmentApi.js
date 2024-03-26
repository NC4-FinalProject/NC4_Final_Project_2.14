import axios from "axios";

const RECRUITMENT_API_URL = '/recruitment';



export const getRecruitmentList = async () => {
    return await axios.get(RECRUITMENT_API_URL + '/recruitment-list');
};

