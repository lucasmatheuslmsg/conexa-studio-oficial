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
    // Se a aba for protegida e a pessoa não estiver logada,
  // troca o destino para a tela de login e mostra um aviso.
  if (abasProtegidas.includes(id) && !estaLogado()) {
    id = "login";
    mostrarAviso("Faça login para acessar este conteúdo.", "erro");
  }

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
  ],
  // Provas técnicas: cursos técnicos, concursos de nível técnico e certificações
  tecnica: [
    {
      titulo: "Fundamentos",
      itens: [
        "Descubra o tipo de prova: curso técnico, concurso de nível técnico ou certificação",
        "Baixe o conteúdo programático (ementa ou edital) e liste os temas",
        "Estude os conceitos base da sua área",
        "Monte um glossário com termos técnicos, siglas e fórmulas"
      ]
    },
    {
      titulo: "Prática",
      itens: [
        "Faça exercícios práticos e estudos de caso da sua área",
        "Resolva provas anteriores da instituição ou da banca",
        "Treine em laboratório ou simuladores, quando houver",
        "Revise normas técnicas e legislação da profissão"
      ]
    },
    {
      titulo: "Aprovação",
      itens: [
        "Faça simulados cronometrados com questões teóricas e práticas",
        "Revise fórmulas, normas e siglas com flashcards",
        "Refaça as questões que você errou",
        "Confira o que é permitido levar para a prova, como calculadora e documentos"
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
/* ============================================================
   LOGIN DE TESTE (guarda os dados no navegador)
   ============================================================ */

// Nomes das "gavetas" do localStorage onde guardamos os dados
const CHAVE_USUARIOS = "conexa_usuarios"; // lista de contas criadas
const CHAVE_LOGADO = "conexa_logado";     // e-mail de quem está logado

// Abas que exigem login. Para proteger outras, acrescente o id
// aqui, por exemplo: ["metodos", "niveis", "aulas", "pdfs"]
const abasProtegidas = ["metodos", "niveis", "aulas", "pdfs"];

// Pegamos os elementos da tela de login
const formEntrar = document.getElementById("form-entrar");
const formCadastro = document.getElementById("form-cadastro");
const avisoLogin = document.getElementById("aviso-login");
const campoCpf = document.getElementById("cad-cpf");

// Lê a lista de usuários salva. Se não houver nenhuma, devolve lista vazia.
function lerUsuarios() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_USUARIOS)) || [];
  } catch (erro) {
    return [];
  }
}

// Retorna true se existe alguém logado
function estaLogado() {
  return localStorage.getItem(CHAVE_LOGADO) !== null;
}

// Mostra uma mensagem na tela de login (tipo: "erro" ou "sucesso")
function mostrarAviso(texto, tipo) {
  avisoLogin.textContent = texto;
  avisoLogin.className = "mensagem " + tipo;
}

// Atualiza o menu: troca Entrar/Sair e põe cadeado nas abas bloqueadas
function atualizarMenu() {
  const logado = estaLogado();

  document.getElementById("botao-login").hidden = logado;
  document.getElementById("botao-sair").hidden = !logado;

  botoesMenu.forEach(function (botao) {
    const protegida = abasProtegidas.includes(botao.dataset.aba);
    botao.classList.toggle("bloqueado", protegida && !logado);
  });
}

// ---------- Alternar entre os formulários ----------
document.getElementById("ir-cadastro").addEventListener("click", function () {
  formEntrar.hidden = true;
  formCadastro.hidden = false;
  mostrarAviso("", "");
});

document.getElementById("ir-entrar").addEventListener("click", function () {
  formCadastro.hidden = true;
  formEntrar.hidden = false;
  mostrarAviso("", "");
});

// ---------- Máscara do CPF (000.000.000-00) ----------
campoCpf.addEventListener("input", function () {
  let numeros = campoCpf.value.replace(/\D/g, "").slice(0, 11); // só dígitos
  numeros = numeros.replace(/(\d{3})(\d)/, "$1.$2");
  numeros = numeros.replace(/(\d{3})(\d)/, "$1.$2");
  numeros = numeros.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  campoCpf.value = numeros;
});

// ---------- Criar conta ----------
formCadastro.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar

  const nome = document.getElementById("cad-nome").value.trim();
  const email = document.getElementById("cad-email").value.trim().toLowerCase();
  const cpf = campoCpf.value.replace(/\D/g, ""); // guarda só os números
  const senha = document.getElementById("cad-senha").value;

  // Validações simples
  if (nome.length < 3) {
    mostrarAviso("Digite seu nome completo.", "erro");
    return;
  }
  if (cpf.length !== 11) {
    mostrarAviso("O CPF precisa ter 11 números.", "erro");
    return;
  }
  if (senha.length < 6) {
    mostrarAviso("A senha precisa ter pelo menos 6 caracteres.", "erro");
    return;
  }

  const usuarios = lerUsuarios();

  // some() confere se algum usuário já usa esse e-mail
  const jaExiste = usuarios.some(function (u) {
    return u.email === email;
  });
  if (jaExiste) {
    mostrarAviso("Este e-mail já tem cadastro. Tente entrar.", "erro");
    return;
  }

  // Salva a nova conta e já deixa a pessoa logada
  usuarios.push({ nome: nome, email: email, cpf: cpf, senha: senha });
  localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));
  localStorage.setItem(CHAVE_LOGADO, email);

  formCadastro.reset();
  mostrarAviso("", "");
  atualizarMenu();
  abrirAba("inicio");
});

// ---------- Entrar ----------
formEntrar.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const email = document.getElementById("entrar-email").value.trim().toLowerCase();
  const senha = document.getElementById("entrar-senha").value;

  // find() procura o usuário com esse e-mail E essa senha
  const usuario = lerUsuarios().find(function (u) {
    return u.email === email && u.senha === senha;
  });

  if (!usuario) {
    mostrarAviso("E-mail ou senha incorretos.", "erro");
    return;
  }

  localStorage.setItem(CHAVE_LOGADO, usuario.email);
  formEntrar.reset();
  mostrarAviso("", "");
  atualizarMenu();
  abrirAba("inicio");
});

// ---------- Sair ----------
document.getElementById("botao-sair").addEventListener("click", function () {
  localStorage.removeItem(CHAVE_LOGADO);
  atualizarMenu();
  abrirAba("inicio");
});

// Ao abrir o site, ajusta o menu conforme o estado do login
atualizarMenu();