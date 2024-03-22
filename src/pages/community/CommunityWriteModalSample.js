import React from 'react';
import CommunityWriteModal from '../../components/community/CommunityWriteModal';
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Data = [
    {
        text: "계정 신고",
        style: {color: '#ED3737'},
        navi: "/"
    },
    {
        text: "댓글 신고",
        navi: "/"
    },
    {
        text: "댓글 삭제",
        navi: "/"
    }
];

function CommunityWriteModalSample() {

    return (
        <div>
            <CommunityWriteModal svg={<SvgIcon component={MoreHorizIcon} />} item={Data} />

        </div>
    );
}

export default CommunityWriteModalSample;