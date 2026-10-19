# Automotive Studio — demonstração comercial

Projeto demonstrativo React + Vite, criado como portfólio reutilizável para prospecção de empresas de estética automotiva. Não representa uma empresa real nem contém provas sociais inventadas.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

## Gerar build

```bash
npm run build
npm run preview
```

O build de produção é gerado em `dist/`.

## Publicar na Vercel

1. Extraia o ZIP e envie o conteúdo para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Antes de usar em um projeto de cliente

Edite `src/main.jsx`, no objeto `CONFIG`:
- `brand`: nome comercial;
- `whatsapp`: número com código do país e DDD, somente números;
- `instagram`: URL do perfil oficial;
- `city`: região atendida.

Troque as imagens e ajuste os serviços para refletir o que a empresa realmente oferece. Os links de orçamento abrem o WhatsApp com uma mensagem pré-preenchida. O formulário não armazena dados: ele prepara uma mensagem e abre o WhatsApp.

## Observações

- As imagens e fontes externas dependem de conexão com a internet e dos respectivos serviços externos.
- Este é um template de demonstração. Não use informações, fotos ou afirmações que não pertençam ao cliente sem autorização.
- O número padrão do WhatsApp é fictício e precisa ser substituído antes de qualquer uso como site real.
