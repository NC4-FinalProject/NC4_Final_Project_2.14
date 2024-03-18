import React, { useState } from 'react';
import Modal from "../../components/ui/Modal";
import '../../scss/ui/Modal.scss';
import SvgButton from "../../components/ui/button/SvgButton";
import {SvgIcon} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} element={      <SvgIcon component={MoreHorizIcon}/>}/>

    </div>
  );
}

export default App;