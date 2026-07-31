# Furniro E-Commerce - Desafio 2

Repositório destinado ao **Desafio 2**, com o objetivo de recriar as páginas do e-commerce **Furniro**, consumindo uma API própria e gerenciando o estado global do carrinho.

---

# Alinhamentos importantes


## Kanban e Trello

- Nunca puxe uma tarefa para **Em Andamento** se você já tem uma em andamento.
- Termine (ou devolva) a tarefa antes de puxar a próxima.
- Ao finalizar uma tarefa:
  - Mova para **Code Review**.
  - Avise no grupo para alguém revisar e aprovar o Pull Request.

##  Git e Versionamento

-  **NUNCA** faça commit direto na branch `developer` ou `main`.
- Sempre crie branches no formato:

```text
feature/nome-da-feature
```

Exemplo:

```text
feature/header-responsivo
```

##  Regras de Código

###  Proibido

- Utilizar `alert()` nativo.
- Utilizar `required` diretamente no HTML.

As validações e feedbacks visuais devem ser implementados manualmente (por exemplo, utilizando **react-hot-toast**).

### Obrigatório
- Código e commits totalmente em inglês
- Desenvolver uma interface totalmente responsiva.
- Sempre testar no modo mobile do navegador antes de abrir um Pull Request.

### Organização das imagens

- **Front-end (`src/assets`)**
  - Logo
  - Ícones
  - Backgrounds
  - Demais imagens estáticas

- **Back-end (`public/images`)**
  - Fotos dinâmicas dos produtos

---

#  Padrão de Conventional Commits


Todo commit deve iniciar com um prefixo indicando o tipo da alteração.

## Formato

```text
tipo: descrição breve em letras minúsculas
```

## Tipos de Commit

| Tipo | Quando utilizar | Exemplo |
|------|-----------------|----------|
| `feat` | Nova funcionalidade, página ou componente | `feat: cria componente de card de produto` |
| `fix` | Correção de bug | `fix: corrige redirecionamento do botao de checkout` |
| `docs` | Alterações na documentação | `docs: atualiza instrucoes de como rodar o projeto` |
| `style` | Ajustes de formatação (sem alterar lógica) | `style: aplica prettier nos arquivos da pasta pages` |
| `refactor` | Reestruturação do código sem alterar comportamento | `refactor: move sections da raiz para as pastas de pages` |
| `chore` | Dependências, configurações e setup | `chore: instala biblioteca zustand e tailwind` |
| `test` | Criação ou alteração de testes | `test: adiciona teste unitario para o header` |


---

# Tecnologias Utilizadas

## Front-end

- React
- Vite
- TypeScript
- Tailwind CSS
- Zustand (Gerenciamento do Carrinho)
- React Router DOM
- Splide (Carrossel da Home)

## Back-end

- Node.js
- Express
- TypeORM
- SQLite (Banco de dados local)

---

# Como rodar o projeto localmente

Como o projeto é um **Monorepo**, será necessário executar o Front-end e o Back-end em terminais separados.

---

##  Clonando o repositório

```bash
git clone https://github.com/SEU_USUARIO/furniro-web.git

cd furniro-web
```

---

##  Rodando o Back-end

Abra um terminal e execute:

```bash
cd backend

npm install

npm run dev
```

O servidor estará disponível em:

```text
http://localhost:3000
```

> **Nota:** O banco de dados SQLite será criado automaticamente na primeira execução.

---

## Rodando o Front-end

Abra um segundo terminal e execute:

```bash
cd frontend

npm install

npm run dev
```

Após iniciar o Vite, acesse a URL exibida no terminal (geralmente):

```text
http://localhost:5173
```