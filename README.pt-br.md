# 📍 Buscador de CEP (ViaCEP API)

*Leia em outros idiomas: [🇺🇸 English](README.md)*

> 🎓 **Nota:** Este projeto foi desenvolvido como parte dos estudos práticos do curso de programação online **DevQuest**, do **Dev em Dobro**.

Um sistema de busca de endereços rápido, responsivo e intuitivo, construído com React e TypeScript. O aplicativo consome a API pública do ViaCEP para retornar informações detalhadas de localização com base em entradas do usuário, garantindo uma experiência fluida através de validações em tempo real, formatação de dados e tratamento de erros.

---

## ✨ Funcionalidades

- **Busca Dinâmica:** Consumo assíncrono da API REST do [ViaCEP](https://viacep.com.br/).
- **Máscara em Tempo Real:** Formatação automática do input de CEP (Ex: `01001-000`) conforme o usuário digita.
- **Validação de Dados:** O sistema impede a submissão de formulários vazios, bloqueia a inserção de letras/caracteres especiais e valida o comprimento exato de 8 dígitos.
- **Tratamento de Erros Eficiente:** Feedback visual imediato para CEPs inexistentes na base de dados ou falhas de conexão de rede.
- **Feedback de Carregamento (Loading):** Bloqueio do botão de submissão e alteração de estado visual durante o fetch de dados, prevenindo múltiplas requisições simultâneas.
- **Design Responsivo:** Interface limpa e amigável, otimizada para dispositivos móveis e desktops utilizando a abordagem Utility-First do TailwindCSS.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://reactjs.org/)** (Criação de interfaces e componentização)
- **[TypeScript](https://www.typescriptlang.org/)** (Tipagem estática e segurança de código)
- **[Vite](https://vitejs.dev/)** (Build tool e servidor de desenvolvimento ultrarrápido)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização ágil e responsiva)
- **[Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)** (Requisições HTTP)

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (recomenda-se a versão LTS)

### Passo a passo

**1. Clone este repositório**
```bash
git clone [https://github.com/SEU_USUARIO/cep-api-search.git](https://github.com/SEU_USUARIO/cep-api-search.git)
```
2. Acesse a pasta do projeto no terminal/cmd

```Bash
cd cep-api-search
```
3. Instale as dependências

```Bash
npm install
```
4. Execute a aplicação em modo de desenvolvimento

```Bash
npm run dev
```
5. Acesse a aplicação

O servidor iniciará localmente. O terminal exibirá a porta (geralmente http://localhost:5173/). Acesse pelo seu navegador.

📂 Estrutura de Arquivos Principal
A arquitetura do projeto foi pensada para manter a separação de responsabilidades e a fácil manutenção:

```Plaintext
📦 src
 ┣ 📂 components
 ┃ ┗ 📜 CepSearch.tsx
      # Componente principal com a lógica e UI
 ┣ 📜 App.tsx
      # Componente raiz que renderiza a aplicação
 ┣ 📜 globals.css 
      # Configurações globais e importações do Tailwind
 ┗ 📜 main.tsx
      # Ponto de entrada do React
```
📝 Próximos Passos (Melhorias Futuras)
Algumas ideias de funcionalidades que podem ser implementadas para expandir o projeto:

[ ] Adicionar um mapa interativo (Google Maps API ou Leaflet) para mostrar a localização exata no pino.

[ ] Histórico de pesquisas recentes salvas no localStorage.

[ ] Botão de "Limpar" para resetar a busca rapidamente.

[ ] Suporte a Dark Mode.

## Dicas para finalizar:

Não esqueça de trocar o SEU_USUARIO no link do git clone pelo seu usuário real do GitHub.

Troque o [Seu Nome] e o SEU_LINKEDIN lá na última linha pelos seus dados reais.
