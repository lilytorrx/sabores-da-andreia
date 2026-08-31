# Sabores da Andréia

Cardápio digital com painel de administração diário e PostgreSQL no Neon.

## Banco de dados

1. Crie um banco no [Neon](https://neon.tech) e abra o SQL Editor.
2. Execute `database/001_initial_schema.sql` e depois `database/002_seed_menu.sql`.
3. Crie o primeiro acesso administrativo usando o comando comentado no final do seed, com um e-mail e senha próprios.
4. No ambiente da aplicação, configure:

```bash
DATABASE_URL="postgresql://..."
SESSION_SECRET="uma-chave-longa-aleatoria-com-pelo-menos-32-caracteres"
```

`DATABASE_URL` nunca é enviado ao navegador. `SESSION_SECRET` assina o cookie de sessão HTTP-only do painel.

## Uso diário

Entre em `/admin`, escolha o prato do dia e marque os acompanhamentos que estão disponíveis. Desmarque um acompanhamento assim que acabar e salve: o cardápio público deixa de oferecê-lo imediatamente. Quando as variáveis de ambiente ainda não foram configuradas, o cardápio público mantém os dados mockados como fallback para não interromper a loja.

## Desenvolvimento

```bash
npm install
npm run dev
```
