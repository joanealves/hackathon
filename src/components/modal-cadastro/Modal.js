import React from "react";
import ReactDOM from "react-dom";
import * as S from "./modal-styles";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <S.ModalOverlay className="modal-overlay" id="modal" />
          <S.ModalWrapper className="modal-wrapper" tabIndex={-1} role="dialog">
            <S.ModalWindow className="modal">
              <S.ModalHeader className="modal-header">
                <S.ModalCloseButton
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </S.ModalCloseButton>
              </S.ModalHeader>
              <p>Seu produto foi cadastrado com sucesso!</p>
              <img src="" alt="" />
            </S.ModalWindow>
          </S.ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
