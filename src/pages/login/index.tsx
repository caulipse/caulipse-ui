import React, { useCallback, useEffect, useState } from "react";
import LoginLogo from "@src/app/login/loginLogo/LoginLogo";
import BoxContainer from "@src/app/login/boxContainer/LoginBoxContainer";
import './styles.scss';
// import CloseButton from "@src/components/common/iconButton/CloseButton";
import FooterContainer from "@src/app/login/footerContainer/LoginFooterContainer";
import LModal from "./modalComponents";
import useModal from '@src/hooks/modal/useModal';
import { IModalContainerCommonProps } from '@common/modal/types';

const LoginPage = ({ open, onClose }: IModalContainerCommonProps): JSX.Element => {
    // const [modalOpen, setModalOpen] = useState(false);

    // const toggleModal = () => setModalOpen(!modalOpen);
    const onClick = useCallback(() => {
		onClose(false);
		const { openModal } = useModal();
	}, []);

    return(
        // <div className="Login-default">
        // <div className="login-logo">
        //     <LoginLogo />
        //     </div>
        //         <div className="login-box">
        //             <BoxContainer />
        //             <FooterContainer /> 
        //         </div>
        // </div>

        <LModal 
        open={open} onClick={onClose} height="48.75rem" //이부분에서 에러나는데 잘 모르겠습니다
        >
        <div className="Login-default">
            <div className="login-logo">
                <LoginLogo />
            </div>
            <div className="login-box">
                <BoxContainer />
                <FooterContainer /> 
            </div>
        </div>
        </LModal>
    );
};

export default LoginPage;
