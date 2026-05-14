# 🎨 Blobmaker: Organic SVG Shape Generator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 📝 Descrição do Projeto
O **BlobGen** é uma ferramenta de alta performance inspirada no clássico *blobmaker.app*, projetada para criadores e web designers que buscam gerar formas SVG orgânicas e suaves de maneira instantânea. O sistema utiliza algoritmos de interpolação por curvas de Bézier cúbicas para garantir que cada forma seja matematicamente perfeita e visualmente fluida.

Desenvolvido com foco em UX e precisão estética, o projeto recria a experiência de design da *z creative labs*, permitindo a customização total de complexidade, variância e estilo (preenchimento ou contorno), com exportação otimizada pronta para uso em ferramentas como Figma, Adobe XD ou diretamente no código web.

---

## 🚀 Tecnologias Utilizadas
* **Frontend:** React 19 + TypeScript + Vite
* **Algoritmos:** Polar Coordinates Mapping + Cubic Bezier Spline Interpolation
* **Estilização:** Tailwind CSS (Arquitetura Utilitária & Design Minimalista)
* **Animações:** Motion (Morphing transitions em tempo real)
* **Ícones:** Lucide-React (Custom Nodes & UI Elements)
* **Exportação:** Blob API para downloads de arquivos físicos e Clipboard API para código fonte

## 📊 Funcionalidades e Diferenciais
O projeto foi estruturado para garantir fidelidade visual e uma experiência de usuário sem atritos:
* **Motor de Geração C1:** Algoritmo que garante continuidade de curvatura, evitando quinas indesejadas mesmo em formas de alta complexidade.
* **Morphing Reativo:** As transições entre estados de complexidade e contraste são animadas via spring physics, proporcionando um feedback visual fluido.
* **Controle de Fidelidade:** Ajuste fino de vértices (3 a 15) e contraste (amplitude de deformação do raio).
* **Exportação Limpa:** Gera código SVG otimizado, sem IDs desnecessários, com `viewBox` padrão 200x200 para escalabilidade total.

## 🔧 Como Executar
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Execute o servidor de desenvolvimento: `npm run dev`.
4. Para gerar a versão de produção: `npm run build`.

---
[Voltar ao início](https://github.com/VictorASantos/portfolio-victor-alves-souza-dos-santos)
