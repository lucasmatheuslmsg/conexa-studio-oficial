/*
  ============================================================
  CONEXA STUDIO OFICIAL - COMPORTAMENTO (script.js)
  ============================================================
  O JavaScript faz o site "reagir": trocar de aba, mostrar
  conteúdo diferente conforme o objetivo escolhido, etc.

  Dica para iniciantes: abra o site, aperte F12 e vá na aba
  "Console" para ver mensagens e erros do JavaScript.
*/


/* ============================================================
   PARTE 1: TROCA DE ABAS
   ============================================================ */

// document.querySelectorAll busca TODOS os elementos que combinam
// com o seletor. Aqui pegamos todo elemento que tenha "data-aba"
// (os botões do menu e o botão "Conhecer os métodos").
const botoesAba = document.querySelectorAll("[data-aba]");

// Pegamos todas as seções que são abas.
const abas = document.querySelectorAll(".aba");

// Pegamos só os botões do menu (para marcar qual está ativo).
const botoesMenu = document.querySelectorAll(".menu__botao");

/*
  Função: abrirAba
  Recebe o "id" da aba (ex.: "metodos") e:
   1) esconde todas as abas;
   2) mostra apenas a aba escolhida;
   3) destaca o botão correspondente no menu.
*/
function abrirAba(id) {

  // forEach = "para cada item da lista, faça isto".
  // classList.remove tira a classe "ativa" (a aba some pelo CSS).
  abas.forEach(function (aba) {
    aba.classList.remove("ativa");
  });

  // Tira o destaque de todos os botões do menu.
  botoesMenu.forEach(function (botao) {
    botao.classList.remove("ativo");
  });

  // getElementById busca UM elemento pelo id.
  // classList.add coloca a classe "ativa" (a aba aparece pelo CSS).
  document.getElementById(id).classList.add("ativa");

  // Procura o botão do menu cujo data-aba é igual ao id e o destaca.
  // Os acentos graves (``) permitem colocar variáveis dentro do texto com ${}.
  const botaoAtual = document.querySelector(`.menu__botao[data-aba="${id}"]`);
  if (botaoAtual) {
    botaoAtual.classList.add("ativo");
  }

  // Sobe a página para o topo suavemente.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Para cada botão, "ouvimos" o clique. Quando clicar,
// lemos o data-aba do botão (dataset.aba) e abrimos aquela aba.
botoesAba.forEach(function (botao) {
  botao.addEventListener("click", function () {
    abrirAba(botao.dataset.aba);
  });
});


/* ============================================================
   PARTE 2: NÍVEIS DE ESTUDO POR OBJETIVO

   Aqui usamos um OBJETO: uma "ficha" com chaves e valores.
   Cada objetivo (concurso, militar...) tem uma lista com 3
   níveis. Para mudar um texto do site, edite aqui.
   Para adicionar um item, coloque uma nova linha entre aspas,
   terminando com vírgula.
   ============================================================ */
const niveisPorObjetivo = {

  concurso: [
    {
      titulo: "Fundamentos",
      itens: [
        "Leia o edital e liste todas as matérias",
        "Monte um cronograma semanal realista",
        "Estude a teoria de Português, Raciocínio Lógico e Informática",
        "Faça resumos curtos de cada tema"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Resolva questões da banca do seu concurso",
        "Anote os erros em um caderno de erros",
        "Estude a legislação específica do cargo",
        "Revise o conteúdo com revisão espaçada"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Faça simulados completos no tempo da prova",
        "Revise apenas os pontos fracos",
        "Treine a gestão do tempo e do cartão-resposta",
        "Cuide do sono e da saúde na reta final"
      ]
    }
  ],

  militar: [
    {
      titulo: "Fundamentos",
      itens: [
        "Confira o edital da carreira (Exército, Marinha, Aeronáutica, PM...)",
        "Reforce Matemática e Português básicos",
        "Crie o hábito de estudar todos os dias",
        "Comece a preparação física leve"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Resolva provas anteriores do concurso",
        "Estude Física, Química e História conforme o edital",
        "Treine redação com temas atuais",
        "Aumente a preparação física gradualmente"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Faça simulados cronometrados",
        "Treine o teste físico nas condições da prova",
        "Revise fórmulas e resumos",
        "Organize a documentação exigida"
      ]
    }
  ],

  enem: [
    {
      titulo: "Fundamentos",
      itens: [
        "Entenda as 4 áreas e a redação do ENEM",
        "Revise a base de Matemática e Interpretação de texto",
        "Monte uma rotina de estudos semanal",
        "Leia bastante e acompanhe notícias"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Resolva provas anteriores do ENEM por área",
        "Treine uma redação por semana",
        "Aprenda as 5 competências da redação",
        "Reforce as matérias com mais erros"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Faça simulados nos dois dias de prova",
        "Treine o tempo por questão",
        "Revise temas que mais caem",
        "Descanse bem antes do dia da prova"
      ]
    }
  ],

  vestibular: [
    {
      titulo: "Fundamentos",
      itens: [
        "Pesquise a prova e as matérias da sua universidade",
        "Veja a lista de livros obrigatórios, se houver",
        "Revise a base das matérias principais",
        "Crie um cronograma por curso desejado"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Resolva provas antigas do vestibular alvo",
        "Treine questões dissertativas, se houver",
        "Leia as obras exigidas com resumos",
        "Faça revisões semanais"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Faça simulados completos",
        "Foque nos assuntos que mais caem",
        "Treine redação e tempo de prova",
        "Confira datas de inscrição e documentos"
      ]
    }
  ],

  escolar: [
    {
      titulo: "Fundamentos",
      itens: [
        "Preste atenção e anote o essencial nas aulas",
        "Organize o caderno por matéria",
        "Tire dúvidas com o professor logo que surgirem",
        "Estude um pouco todos os dias"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Refaça os exercícios feitos em aula",
        "Faça resumos e mapas mentais",
        "Explique o conteúdo em voz alta (técnica Feynman)",
        "Estude em grupo quando ajudar"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Comece a revisar uma semana antes da prova",
        "Resolva provas e listas anteriores",
        "Revise primeiro o que você tem mais dificuldade",
        "Durma bem na noite anterior"
      ]
    }
  ]
};

// Pegamos a div onde os cartões de nível serão desenhados
const areaNiveis = document.getElementById("resultado-niveis");

// Pegamos os botões de objetivo (chips)
const chips = document.querySelectorAll("[data-objetivo]");

/*
  Função: mostrarNiveis
  Recebe a chave do objetivo (ex.: "enem") e cria na tela os 3
  cartões de nível usando os dados do objeto acima.
*/
function mostrarNiveis(objetivo) {

  // Pega a lista de 3 níveis daquele objetivo
  const niveis = niveisPorObjetivo[objetivo];

  // Limpa o que estava na tela antes
  areaNiveis.innerHTML = "";

  // Para cada nível (o "indice" começa em 0, 1, 2)...
  niveis.forEach(function (nivel, indice) {

    // Monta a lista <li> com os itens do nível.
    // .map transforma cada item de texto em um <li>.
    // .join("") junta tudo em um único texto.
    const listaHTML = nivel.itens
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");

    // Cria um novo elemento <article> (um cartão)
    const cartao = document.createElement("article");
    cartao.className = "cartao";

    // Coloca o conteúdo dentro do cartão.
    // indice + 1 porque o contador começa em 0 e queremos "Nível 1".
    cartao.innerHTML = `
      <span class="etiqueta">Nível ${indice + 1}</span>
      <h3>${nivel.titulo}</h3>
      <ul class="nivel__lista">${listaHTML}</ul>
    `;

    // Adiciona o cartão na página
    areaNiveis.appendChild(cartao);
  });
}

// Quando clicar em um chip: destaca ele e mostra os níveis certos.
chips.forEach(function (chip) {
  chip.addEventListener("click", function () {

    // Tira o destaque de todos os chips...
    chips.forEach(function (c) {
      c.classList.remove("ativo");
    });

    // ...e destaca apenas o clicado.
    chip.classList.add("ativo");

    // Mostra os níveis do objetivo clicado.
    mostrarNiveis(chip.dataset.objetivo);
  });
});

// Ao abrir o site, já mostramos o primeiro objetivo (concurso)
mostrarNiveis("concurso");


/* ============================================================
   PARTE 3: ANO AUTOMÁTICO NO RODAPÉ
   ============================================================ */

// new Date() pega a data de hoje; getFullYear() devolve só o ano.
// textContent coloca esse valor dentro do <span id="ano">.
document.getElementById("ano").textContent = new Date().getFullYear();