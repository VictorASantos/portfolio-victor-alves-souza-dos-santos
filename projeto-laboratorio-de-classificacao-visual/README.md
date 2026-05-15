# 🤖 Laboratório de Classificação Visual — Viés Algorítmico com Teachable Machine

![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Teachable Machine](https://img.shields.io/badge/Teachable_Machine-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Machine Learning](https://img.shields.io/badge/Machine_Learning-FF6B6B?style=for-the-badge&logo=databricks&logoColor=white)
![Ethics in AI](https://img.shields.io/badge/Ethics_in_AI-00C853?style=for-the-badge&logo=openai&logoColor=white)

> **Aluno:** Victor Alves Souza dos Santos
> **Disciplina:** Fundamentos de Inteligência Artificial

---

## 📝 Descrição do Projeto

O **Laboratório de Classificação Visual** é uma atividade experimental que utiliza a plataforma **Teachable Machine** (Google) para treinar um modelo de classificação de imagens com dataset **deliberadamente enviesado**, demonstrando na prática como vieses nos dados de treinamento corrompem decisões algorítmicas e produzem resultados discriminatórios.

O projeto é dividido em duas partes:
- **Parte 1:** Treinamento do modelo, inferência e registro de erro de classificação.
- **Parte 2:** Memorial de Impacto e Ética — análise crítica das implicações sociais do viés algorítmico.

---

## 🗂️ Estrutura do Repositório

```
📁 laboratorio-classificacao-visual/
├── 📄 model.json          # Arquitetura do modelo treinado (TensorFlow.js)
├── 📦 weights.bin         # Pesos do modelo gerados pelo Teachable Machine
├── 📋 metadata.json       # Metadados: classes, versão TF.js e configurações
└── 📖 README.md           # Documentação do projeto
```

---

## ⚙️ Configuração do Modelo

| Parâmetro | Valor |
|---|---|
| **Plataforma** | Teachable Machine (Google) |
| **Versão TF.js** | 1.7.4 |
| **Versão TM** | 2.4.14 |
| **Tamanho da imagem** | 224 × 224 px |
| **Classes** | `Perfil Liderança` / `Perfil Operacional` |
| **Imagens por classe** | ~20 imagens |

---

## 🧪 Parte 1 — Experimento Técnico

### Definição das Classes e Dataset

O modelo foi treinado com critérios **intencionalmente estereotipados**:

- **Perfil Liderança:** Imagens compostas majoritariamente por homens em pé, alternando entre braços cruzados, mãos na cintura ou no bolso — postura associada culturalmente a autoridade.
- **Perfil Operacional:** Imagens compostas majoritariamente por mulheres sentadas em frente a computadores, com expressão mais séria — postura associada culturalmente a execução de tarefas.

### 📸 Registro dos Erros de Classificação

**Erro 1 — Falso Positivo (Perfil Operacional):**

O modelo classificou uma mulher sentada em frente a um ambiente de trabalho como **"Perfil Operacional"** com altíssima confiança, mesmo que a indivídua pudesse ocupar qualquer cargo profissional. A barra de saída confirma que o modelo ignorou completamente qualquer indicador de competência real e baseou a inferência exclusivamente em padrões visuais superficiais.

<img width="214" height="338" alt="image" src="https://github.com/user-attachments/assets/247d4dd0-928a-411c-a9c5-ef6e01d7dc4f" />

> _Figura 1: Mulher classificada como "Perfil Operacional" — modelo não reconhece liderança fora do padrão treinado._

---

**Erro 2 — Falso Negativo (Perfil Liderança rejeitado):**

Mesmo ao testar com imagens de **homens** — grupo que compôs a classe "Perfil Liderança" no treinamento — o modelo atribuiu **99% de confiança ao Perfil Operacional**, evidenciando que fatores como roupa informal e postura não-convencional sobrepõem o gênero na lógica do algoritmo.

> _Figura 2 (esquerda): Homem classificado como "Perfil Operacional" com 99% de confiança._
> _Figura 2 (direita): Segundo homem também classificado como "Perfil Operacional", reforçando o padrão de erro._

---

## 🧠 Parte 2 — Memorial de Impacto e Ética

### 🔍 Mecanismo do Viés

O viés ocorre porque o conjunto de dados usado no treinamento apresenta critérios limitados e estereotipados. O algoritmo associa características visuais — como gênero aparente e postura corporal — como diferenciadores de funções profissionais. A IA não compreende o conceito real de liderança ou operação: ela apenas identifica padrões presentes nas imagens de treinamento. Como consequência, quando recebe imagens fora desse padrão, o sistema realiza classificações incorretas e gera uma representação distorcida da realidade.

### ⚠️ Consequência Social

Um sistema treinado com esse tipo de classificação reforça a ideia de que apenas determinados grupos — como homens — ocupam posições de liderança, enquanto outros — como mulheres — desempenham funções operacionais. Esse tipo de resultado segmenta pessoas e sugere que elas não podem participar de determinados espaços profissionais por causa do seu gênero. Além disso, marginaliza mulheres e ignora a diversidade existente no ambiente de trabalho, perpetuando desigualdades estruturais quando aplicado em contextos reais de recrutamento, avaliação ou acesso a oportunidades.

### 🛡️ Ação Mitigadora — Human-in-the-Loop

Para garantir maior equidade no processo, é possível implementar o uso de **currículos anônimos junto com as imagens** e realizar uma **verificação humana das qualificações** de liderança ou operação. Nesse modelo, o algoritmo realiza uma classificação inicial, mas um avaliador humano revisa os resultados antes que a decisão final seja tomada — impedindo que vieses algorítmicos produzam consequências concretas sobre pessoas reais sem supervisão responsável.

---

## 📚 Conclusão

Este experimento demonstra, de forma prática e replicável, que **dados enviesados produzem modelos enviesados** — independentemente da qualidade técnica da plataforma utilizada. O Teachable Machine funcionou exatamente como projetado: aprendeu os padrões que foram ensinados. O problema não está na ferramenta, mas nas escolhas humanas que constroem o dataset.

A responsabilidade ética na construção de sistemas de IA começa na curadoria dos dados, muito antes do treinamento do modelo.

---

## 🔗 Referências

- [Teachable Machine — Google](https://teachablemachine.withgoogle.com/)
- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [AI Fairness 360 — IBM](https://aif360.mybluemix.net/)

---

*Projeto desenvolvido para fins exclusivamente acadêmicos, com objetivo de ilustrar e criticar mecanismos de viés em sistemas de Inteligência Artificial.*
---
[Voltar ao início](https://github.com/VictorASantos/portfolio-victor-alves-souza-dos-santos)
