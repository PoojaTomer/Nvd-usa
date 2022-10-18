import { faAngleDoubleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CareerForm from './CareerForm';

export default function ApplyForCareerButton(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return (
        <>
        <button onClick={showModal} className="btn-3">{props.Title} &nbsp; <FontAwesomeIcon icon={faAngleDoubleRight} className="left-move" /></button>
        <CareerForm isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
        </>
    );
}