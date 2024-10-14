# To do List TS
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white)

## 📖 Introdução
**To-do List** é uma aplicação de lista de tarefas utilizando **React.js** e **TypeScript**, permitindo aos usuários criar, ler, atualizar e excluir tarefas. 

## 👥 Equipe
| [<img src="https://avatars.githubusercontent.com/u/111311678?v=4" width=115><br><sub>Daniel Emidio</sub>](https://github.com/DanielEmidio1988) |
| :---: |

## 🧭 Status do Projeto
- ⏳Concluido

## 📜 Escopo do Projeto
Este repositório faz parte do desafio técnico para vaga de desenvolvedor, onde foi solicitado os seguintes itens:
```Construir uma aplicação de lista de tarefas utilizando React.js e TypeScript. A aplicação deve permitir aos usuários criar, ler, atualizar e excluir tarefas. Também deve incluir funcionalidades de filtragem e ordenação. O código-fonte deve ser publicado no GitHub ou GitLab sob sua conta e pronto para ser clonado.

Requisitos:

Componentes:

TaskList: Exibe uma lista de tarefas.
Task: Renderiza uma tarefa individual.
TaskForm: Lidera a criação e edição de tarefas.
Filters: Fornece opções para filtrar tarefas por status (concluídas ou incompletas).
Sorting: Permite ordenar tarefas por data de vencimento ou prioridade.
Gerenciamento de Estado: Utilize useState para gerenciar o estado da lista de tarefas.

Filtragem e Ordenação de Dados: Implemente lógica de filtragem e ordenação usando arrays JavaScript.

TypeScript: Utilize tipos e interfaces TypeScript para definir a estrutura de tarefas e outros dados.

React Hooks: Utilize useEffect para buscar tarefas de uma API mockada ou armazenamento local ao montar o componente.

```

### Arquitetura de pastas
- `📂 src ` - Pasta contendo os arquivos principais do projeto
  - `📂 assets` - Pasta com itens essenciais, de uso global como imagens, estilização, dados mockados, etc
  - `📂 components` - Pasta de componentes do projeto
  - `📂 types` - Pasta com todas as tipagens globais

### Tecnologias e Recursos
Abaixo, listo todas as tecnologias e bibliotecas utilizadas:

* **React.js:** para criação de interfaces mais intuitiva e eficiente, com a utilização de componentes reutilizáveis, facilitando a manutenção e escalabilidade do projeto. Para saber mais recomendo leitura [clicando aqui](https://pt-br.react.dev/);
* **Typescript:** para ajudar a prevenir erros comuns em Javascript, como erros de tipo e nulos, tornando o código mais confiável, auxiliando a identificação de erros em tempo de desenvolvimento. Para saber mais recomendo leitura [clicando aqui](https://www.typescriptlang.org/pt/docs/handbook/react.html);
* **SCSS:** para permitir organizar os estilos CSS de forma mais lógica e hierárquica. Para saber mais recomendo leitura [clicando aqui](https://sass-lang.com/documentation/);
* **UUID:** biblioteca para o controle de id de cadastros. Para saber mais, recomendo a leitura [clicando aqui](https://www.npmjs.com/package/react-uuid);

## ⚙ Instalação

Antes de iniciar, certifique-se de ter o [Node](https://nodejs.org/pt/download/prebuilt-installer) instalado em sua máquina. Esta aplicação foi desenvolvida com o Node v18.

### Baixando a branch localmente

Abra o terminal Git na sua máquina, dentro da pasta onde deseja baixar o projeto, e execute o comando:

```
git clone https://github.com/DanielEmidio1988/todo-list-ts.git
```

### Instalação pacotes NPM
Durante o desenvolvimento do tema, utilizei alguns pacotes NPM que precisam ser instalados antes da execução do projeto. Para instalar, execute o comando:

```
npm install
```

### Execução do projeto
Após a instalação dos pacotes NPM, execute o comando abaixo para abrir o projeto localmente na localhost 3000:
```
npm start
```

## 💻 Utilizando o projeto
Por padrão, a aplicação inicia com 3 itens 'mockados' com os itens Tarefa 1, Tarefa 2, Tarefa 3, apenas por questão de visualização. Ao renderizar, o usuário pode inserir o nome da tarefa no campo de input de Tarefa e em seguida clicar em 'Adicionar Tarefa'. 
Nos cards de tarefa, há 3 icones, sendo: Conclusão, Edição e Excluir.
- Ao clicar em concluir, a tarefa será finalizada e o card será marcado em verde;
- Ao clicar em edição, os dados da tarefa será inserido no input e o usuário pode editar a descrição da tarefa;
- Ao clicar em excluir, a tarefa será eliminada da lista de tarefas;
Além disso, a aplicação conta com os botões de filtragem, que exibe todas as tarefas, tarefas incompletas e tarefas completas, além da ordenação das tarefas em ordem alfabética.
