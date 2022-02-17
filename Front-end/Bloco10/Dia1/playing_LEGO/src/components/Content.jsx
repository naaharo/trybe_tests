import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: "High Order Functions",
        bloco: 8,
        status: "Aprendido",
      },
      {
        conteudo: "Composicao de Componentes",
        bloco: 11,
        status: "Aprendendo",
      },
      {
        conteudo: "Composicao de Estados",
        bloco: 12,
        status: "Aprenderei",
      },
      {
        conteudo: "Redux",
        bloco: 16,
        status: "Aprenderei",
      },
    ];

    const items = conteudos.map((content, index) => {
      return (
        <li key={ index }>
          O conteúdo é: { content.conteudo }<br />
          Status: { content.status }<br />
          Bloco: { content.bloco }<br />
        </li>
      );
    });

    return <ul className="contentUl">{ items }</ul>;
  }
}

export default Content;
