import React from 'react';
import * as S from './ModalCalendario.styles'

function ModalCalendario({ selectedProduct, setIsOpenModal }) {
    return (
        <S.ModalBox>
            <S.Modal>
                <div>

                    <h2>Editar Produto</h2>
                    <button onClick={() => setIsOpenModal(false)}>X</button>
                </div>
                <S.BoxButton>
                    <button>Excluir</button>
                    <button>Comprar</button>
                </S.BoxButton>
            </S.Modal>
        </S.ModalBox>

    );
}

export default ModalCalendario;