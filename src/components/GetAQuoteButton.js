import React,{useState} from 'react';
import GetAQuote from './GetAQuote';

export default function GetAQuoteButton(props) {
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
       <a onClick={showModal} className={props.btn ? props.btn:"btn-1"}>{props.Title}</a>
       <GetAQuote isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} {...props} />
        </>
    );
}
