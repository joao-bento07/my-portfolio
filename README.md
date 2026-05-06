# João Bento — Portfolio Pessoal

Portfolio online desenvolvido com **React + CSS Modules**, apresentando projetos, habilidades e informações de contato.

🔗 **Demo online:** _adicionar link após deploy_

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/joao-bento07/my-portfolio.git
cd my-portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse https://my-portfolio-pi-eight-72.vercel.app/ no navegador.

---

## Deploy (Vercel)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Clique em **Add New Project** e conecte o repositório do GitHub
3. Configurações de build são detectadas automaticamente (Vite)
4. Clique em **Deploy** — pronto!

---

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React 19 | Interface e componentes |
| CSS Modules | Estilização modular e scoped |
| Vite | Bundler e dev server |
| Hooks (useState, useEffect) | Estado e efeitos reativos |

---

## Estrutura do projeto

```
src/
├── assets/           # Imagens estáticas (profile.jpg, etc.)
├── components/
│   ├── Header/       # Navegação fixa com menu hambúrguer responsivo
│   ├── Hero/         # Seção inicial com foto e efeito de digitação
│   ├── About/        # Apresentação pessoal e números de destaque
│   ├── Skills/       # Habilidades técnicas com barras de progresso
│   ├── Projects/     # Grade de projetos com cards e links
│   ├── Contact/      # Formulário de contato e redes sociais
│   └── Footer/       # Rodapé com links
├── App.jsx
├── main.jsx
└── index.css         # Variáveis CSS globais e reset
```

---

## Projetos apresentados

### TaskFlow
Gerenciador de tarefas com React + TypeScript. CRUD completo com filtros e persistência via LocalStorage.

### WeatherNow
Dashboard de clima em tempo real com integração à API OpenWeather.

### ShopLanding
Landing page de e-commerce responsiva com HTML5 semântico, CSS3 e metodologia BEM.

---

## Contato

- **Email:** joao-bento07fonsecamendes@gmail.com
- **GitHub:** [github.com/joao-bento07](https://github.com/joao-bento07)
- **LinkedIn:** [linkedin.com/in/joao-bento07](https://linkedin.com/in/joao-bento07)
