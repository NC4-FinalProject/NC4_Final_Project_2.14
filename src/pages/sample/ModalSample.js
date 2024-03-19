import React, { useState } from 'react';
import Modal from "../../components/ui/Modal";
import '../../scss/ui/Modal.scss';
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const dummyData=[
  {
    text:"1",
    navi:"/"
  },
  {
    text:"2",
    navi:"/"
  },
  {
    text:"3",
    navi:"/"
  }
];

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div>
      <Modal  svg={      <SvgIcon component={MoreHorizIcon}/>} item={dummyData}/>

    </div>
  );
}

export default App;