import React, { useState, FormEvent } from 'react';
import './CadastroServicos.css';

interface Servico {
  nome: string;
  custo: number;
  valorVenda: number;
  numProducao: number;
  metaLucro: number;
}

const CadastroServicos: React.FC = () => {
  const [servicos, setServicos] = useState<Servico[]>([]);

  const handleAddServico = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const novoServico: Servico = {
      nome: (form.nome as HTMLInputElement).value,
      custo: parseFloat((form.custo as HTMLInputElement).value),
      valorVenda: parseFloat((form.valorVenda as HTMLInputElement).value),
      numProducao: parseInt((form.numProducao as HTMLInputElement).value),
      metaLucro: parseFloat((form.metaLucro as HTMLInputElement).value),
    };

    // Atualiza o estado com base no estado anterior
    setServicos((prevServicos) => [...prevServicos, novoServico]);

    form.reset();
  };

  return (
    <div className="container">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h2>Cadastro de serviços</h2>
      </header>

      <h1 className="main-title">Cadastre um ou mais serviços:</h1>
      <form className="form" onSubmit={handleAddServico}>
        <input
          type="text"
          name="nome"
          placeholder="Informe o nome do serviço"
        />
        <input
          type="number"
          name="custo"
          placeholder="Informe o custo de execução do serviço"
        />
        <input
          type="number"
          name="valorVenda"
          placeholder="Informe o valor de venda do serviço"
        />
        <input
          type="number"
          name="numProducao"
          placeholder="Informe o número médio de execuções"
        />
        <input
          type="number"
          name="metaLucro"
          placeholder="Informe a meta de lucro"
        />
        <button type="submit" className="add-button">
          Adicionar outro serviço
        </button>
      </form>

      {/* Lista de Serviços */}
      <div className="service-list">
        {servicos.length > 0 ? (
          servicos.map((servico, index) => (
            <div className="service-item" key={index}>
              <h3>{servico.nome}</h3>
              <p>
                <strong>Custo:</strong> R$ {servico.custo}
              </p>
              <p>
                <strong>Valor de Venda:</strong> R$ {servico.valorVenda}
              </p>
              <p>
                <strong>Número de Execução:</strong> {servico.numProducao}
              </p>
              <p>
                <strong>Meta de Lucro:</strong> R$ {servico.metaLucro}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum serviço cadastrado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default CadastroServicos;