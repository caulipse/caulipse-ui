import React from "react";
import { IoClose } from 'react-icons/io5';
import './styles.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LModal: React.FC<ModalProps> = ({ isOpen, onClose, children}) => (
    <div className="modal">
        <div className="modal-overlay">
            <div className="modal-close-btn">
                <button className="modal-close-button" onClick={onClose}>
                <IoClose className="close"/>
                </button>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>
);

export default LModal;