import React, { useState } from "react";
import { TrailerWatch } from "@/components";

function useModal(videoKey) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal = ({video}) => {
    if (!isOpen) return null;

    return (
      <TrailerWatch video={videoKey} showModal={isOpen} closeHandle={closeModal} />
    );
  };

  return { openModal, closeModal, Modal };
}

export default useModal