---
title: Components
slug: components
questionTitle: 'Seja x e y duas grandezas inversamente proporcionais. Se x sofre um acréscimo de 25%, o decréscimo percentual sofrido por y é:'
multiselectOptions:
  - 20%
  - 22%
  - 24%
  - 25%
correctOption:
  - 20%

answered: false
---

# Título

## Sub-título

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<quote>Eu sou uma citação</quote>

<collapse>
    <option-collapse
        title="Collapse"
        icon="solucao">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <quote>Eu sou uma citação</quote>
    </option-collapse>
    <option-collapse
        title="Collapse 2"
        icon="solucao">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </option-collapse>
</collapse>

<qed-card
    title="Card">

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</qed-card>

<qed-card
    title="Card Info"
    icon="solucao"
    info>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<quote>Eu sou uma citação</quote>
</qed-card>

## Links

<qed-link
    link="https://www.youtube.com/">
Link
</qed-link>
<qed-link
    link="https://www.youtube.com/">
Lorem ipsum
</qed-link>

## Buttons

<qed-button>
Button
</qed-button>

<qed-button left>
Button Left
</qed-button>

<qed-button right>
Button Right
</qed-button>

<qed-button light>
Button Light
</qed-button>

<qed-button light left>
Button Light Left
</qed-button>

<qed-button light right>
Button Light Right
</qed-button>

<qed-button disabled>
Button
</qed-button>

<qed-button disabled left>
Button Left
</qed-button>

<qed-button disabled right>
Button Right
</qed-button>

<qed-button disabled light>
Button Light
</qed-button>

<qed-button disabled light left>
Button Light Left
</qed-button>

<qed-button disabled light right>
Button Light Right
</qed-button>

<qed-exercise-radio title="Questão 01 - (ENEM 2019, Caderno 5 - Amarelo, Segundo Dia,
Questão 147)" :question-title="questionTitle" :options="multiselectOptions" :correct-option="correctOption"></qed-exercise-radio>

## Images

<qed-image src="https://bulma.io/images/placeholders/128x128.png" alt="oi"></qed-image>

<qed-pagination></qed-pagination>
