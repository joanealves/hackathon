import axios from "axios";
import { useState } from "react";
import * as S from "./Listagem-styles";
import { AiFillDelete } from "react-icons/ai";
import "./Modal.css";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

//Criar função que deleta produto

function Listagem() {
  const api =
    "https://api.airtable.com/v0/app4vUGC2nxXBaIY7/Produtos?fields%5B%5D=id&fields%5B%5D=id_usuario&fields%5B%5D=nome&fields%5B%5D=repeticao&fields%5B%5D=repeticao_dia&fields%5B%5D=encerramento&fields%5B%5D=data_criacao";

  const addTable = () => {
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
  };
  const [products, setProducts] = useState([]);

  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyIQRTXBdJyaVJaz" }).base(
    "app4vUGC2nxXBaIY7"
  );

  const deleteProduct = (id) => {
    var x;
    var r = window.confirm("O produto será removido!");
    if (r == true) {
      base("Produtos").destroy([id], function (err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Deleted", deletedRecords.length, "records");
      });
      addTable();
    } else {
      x = "Produto não removido!";
    }
  };

  addTable();

  return (
    <>
      <S.Table>
        <h1>Lista de produtos</h1>
        <S.Back>
          {products.map((product) => {
            return (
              <>
                <div>
                  <S.Line>
                    <p>
                      {format(
                        product.fields.data_criacao * 1000,
                        "dd / MM' / 'yy' ",
                        { locale: pt }
                      )}
                    </p>
                    <p>{product.fields.nome}</p>
                    <p>
                      <AiFillDelete onClick={() => deleteProduct(product.id)} />
                    </p>
                  </S.Line>
                </div>
              </>
            );
          })}
        </S.Back>
      </S.Table>
    </>
  );
}

export default Listagem;
