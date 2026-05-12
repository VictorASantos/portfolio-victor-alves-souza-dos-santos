# 🔘 Toque.Io: A Evolução Tátil da Interface Digital

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## 📝 Descrição do Projeto
O **Toque.Io** é um gerador de interfaces **Neumórficas** de alta precisão, projetado para designers e desenvolvedores que buscam a estética do "Soft UI" com rigor técnico. Diferente de geradores comuns, o Toque.Io integra um **Motor de Acessibilidade em Tempo Real** baseado nas diretrizes WCAG e um sistema de **Design Tokens** para integração imediata em fluxos de trabalho profissionais.

O projeto resolve o desafio de equilibrar estética e funcionalidade, garantindo que o design tátil não comprometa a legibilidade e a acessibilidade, fornecendo ferramentas de visualização em contexto e exportação multiformato.

---

## 🚀 Tecnologias Utilizadas
*   **Core:** React 18 & Vite (HMR desabilitado para estabilidade de deploy)
*   **Estilização:** Tailwind CSS (Arquitetura utilitária e variáveis dinâmicas)
*   **Animações:** Motion (motion/react) para transições fluidas e estados de layout
*   **Backend & Auth:** Firebase (Google Authentication & Firestore para persistência de presets)
*   **Ícones:** Lucide React
*   **Utilitários:** Algoritmos customizados para cálculo de Luminância Relativa e Proporção de Contraste (WCAG 2.1)

---

## 💎 Funcionalidades Principais

### 1. Motor de Acessibilidade WCAG
Implementa a função `checkAccessibility` que monitora em tempo real a relação L1/L2 entre cores de fundo e texto, emitindo selos **AAA** ou **AA**. Adicionalmente, possui um alerta exclusivo para neumorfismo que avisa quando a profundidade das sombras é insuficiente para garantir a percepção de relevo.

### 2. Exportação Multiformato
Uma central de código com abas dinâmicas para:
*   **CSS Puro:** Variáveis customizáveis.
*   **Tailwind CSS:** Classes utilitárias com valores arbitrários.
*   **React Native:** Configuração de `shadowOffset` e `elevation`.
*   **Design Tokens (JSON):** Estrutura padronizada para importação em Figma ou sistemas de temas.

### 3. Visualização em Contexto (Mockups)
Permite injetar o componente gerado em wireframes reais:
*   **Cartão de Crédito:** Teste de elegibilidade e luxo tátil.
*   **Music Player:** Design de controles e botões circulares.
*   **Dashboard:** Harmonia de cartões de estatísticas em grids.

---

## 🔧 Como Executar
1. Clone o repositório.
2. Configure o arquivo `firebase-applet-config.json` com suas credenciais.
3. Instale as dependências: `npm install`.
4. Execute o ambiente de desenvolvimento: `npm run dev`.

---

## 📊 Resultados e Aprendizados
O projeto alcançou um equilíbrio perfeito entre estética minimalista e utilidade técnica.
*   **Precisão Geométrica:** O uso de gradientes lineares convexos/côncavos sincronizados com `box-shadow` cria uma ilusão de profundidade fisicamente coerente.
*   **Inclusão Digital:** A integração do WCAG provou que Neumorfismo pode, sim, ser acessível se houver monitoramento técnico constante.
*   **Design Tokens:** A abstração do design em JSON permite que o Toque.Io seja o ponto central da linguagem visual de um projeto.

---
[Voltar ao início](https://github.com/VictorASantos/portfolio-victor-alves-souza-dos-santos)
