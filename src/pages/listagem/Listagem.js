import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import * as S from "./Listagem-styles";
import { AiFillDelete } from "react-icons/ai";
import "./Modal.css";

//Criar função que deleta produto

function Listagem() {
  const api =
    "https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao";
  useEffect(() => {
    axios
      .get(api, {
        headers: {
          Authorization: `Bearer keyIQRTXBdJyaVJaz`,
        },
      })
      .then((response) => {
        setProducts(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteProduct = () => {
    console.log("Produdo deletado");
    closeModal();
  };

  return (
    <>
      <S.Table>
        <h1>Lista de produtos</h1>
        <S.Back>
          {products.map((product) => {
            return (
              <div>
                <S.Line>
                  <p>{product.fields.data_criacao}</p>
                  <p>{product.fields.nome}</p>
                  <p>
                    <AiFillDelete onClick={openModal} />
                  </p>
                </S.Line>
              </div>
            );
          })}
        </S.Back>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="header">
            <p>O produto será removido!</p>
          </div>

          <button onClick={deleteProduct}>Remover</button>
          <button onClick={closeModal}>Cancelar</button>
        </Modal>
      </S.Table>
    </>
  );
}

export default Listagem;
