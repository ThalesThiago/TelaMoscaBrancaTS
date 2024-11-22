import React, { useState, FormEvent } from 'react';
import './CadastroProdutos.css';

interface Produto {
  nome: string;
  custo: number;
  valorVenda: number;
  numProducao: number;
  metaLucro: number;
}

const CadastroProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const handleAddProduto = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const novoProduto: Produto = {
      nome: (form.nome as HTMLInputElement).value,
      custo: parseFloat((form.custo as HTMLInputElement).value),
      valorVenda: parseFloat((form.valorVenda as HTMLInputElement).value),
      numProducao: parseInt((form.numProducao as HTMLInputElement).value),
      metaLucro: parseFloat((form.metaLucro as HTMLInputElement).value),
    };

    // Atualiza o estado com base no estado anterior
    setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);

    form.reset();
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h2>Cadastro de produtos</h2>
      </header>

      <h1 className="main-title">Cadastre um ou mais produtos:</h1>
      <form className="form" onSubmit={handleAddProduto}>
        <input
          type="text"
          name="nome"
          placeholder="Informe o nome do produto"
        />
        <input
          type="number"
          name="custo"
          placeholder="Informe o custo de produção do produto"
        />
        <input
          type="number"
          name="valorVenda"
          placeholder="Informe o valor de venda atual do produto"
        />
        <input
          type="number"
          name="numProducao"
          placeholder="Informe o número médio de produção"
        />
        <input
          type="number"
          name="metaLucro"
          placeholder="Informe a meta de lucro"
        />
        <button type="submit" className="add-button">
          Adicionar outro produto
        </button>
      </form>

      {/* Lista de Produtos */}
      <div className="product-list">
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <div className="product-item" key={index}>
              <h3>{produto.nome}</h3>
              <p>
                <strong>Custo:</strong> R$ {produto.custo}
              </p>
              <p>
                <strong>Valor de Venda:</strong> R$ {produto.valorVenda}
              </p>
              <p>
                <strong>Número de Produção:</strong> {produto.numProducao}
              </p>
              <p>
                <strong>Meta de Lucro:</strong> R$ {produto.metaLucro}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum produto cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default CadastroProdutos;