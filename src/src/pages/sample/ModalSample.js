import React, { useState } from 'react';
import Modal from "../../components/ui/Modal";
import '../../../scss/Modal.scss';

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
      <h1>모달</h1>
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>내용</h2>
        <p>내용1</p>
      </Modal>
    </div>
  );
}

export default App;