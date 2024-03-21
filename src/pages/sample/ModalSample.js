import React from 'react';
import Modal from "../../components/ui/Modal";
import '../../scss/ui/Modal.scss';
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

function App() {

    return (
        <div>
            <Modal svg={<SvgIcon component={MoreHorizIcon}/>} item={Data}/>
        </div>
    );
}

export default App;