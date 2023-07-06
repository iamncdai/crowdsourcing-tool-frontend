# CrowdsourcingTool

## Get Started

### Clone source code

```bash
git clone git@github.com:iamncdai/crowdsourcing-tool-frontend.git
cd crowdsourcing-tool-frontend

yarn install
```

### Config environment variables

Create a file `.env.local`

```bash
GATEWAY=http://localhost:8000
AUTH_SERVICE=/auth-service
CORE_SERVICE=/core-service
```

### Run development

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Run production

```bash
yarn build
yarn start
```

Open http://localhost:3000 with your browser to see the result.

## Libs
- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
