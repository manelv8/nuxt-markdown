# Tópico 1: Sistema Posicional Decimal e Algoritmo da Adição

Se você pensar por **dois** segundos, vai reconhecer **milhões** de situações em que os números são usados à sua volta. Mesmo na frase anterior, usamos números para falar de números!

Por exemplo, todos nós, em algum momento da vida, ficamos maravilhados contando as estrelas no céu noturno.

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/imagem_01.png)
> **Fonte:** Greg Rakozy on [Unsplash](https://unsplash.com/s/photos/mlky-way?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Nas grandes cidades, não percebemos os muitos milhares de pontinhos luminosos das estrelas visíveis a olho nu, mas nossos antepassados se puseram não apenas a observá-las e contá-las, mas a reconhecê-las, agrupá-las e a registrar e entender seu movimento aparente.

Para isso, as várias culturas foram desenvolvendo formas de representar as quantidades e os números. Há ainda povos que utilizam partes do corpo para contar, como vestígios dos primeiros sistemas de numeração. A seguinte figura ilustra a forma como os Oksapmin, na Oceania, contam, usando partes diferentes do corpo:

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/imagem_02.png)
> **Fonte:** Geoffrey Saxe. Disponível em https://www.researchgate.net/publication/228807955_Making_Change_in_Oksapmin_Tradestores_A_Study_of_Shifting_Practices_of_Quantification_Under_Conditions_of_Rapid_Shift_towards_a_Cash_Economy/figures?lo=1

Fica claro que esses sistemas não são suficientes e práticos, se quisermos contar as estrelas do céu ou mesmo o número de pessoas em sua cidade.

**INÍCIO RETRÁTIL**
**Observação para o monitor:** neste ponto, proponha brincadeiras e atividades de contagem utilizando partes do corpo, expondo coleções de objetos que devam ser contados dessa forma. Proponha que sejam realizadas somas de pequenas parcelas usando partes do corpo como representações dos números
**FIM RETRÁTIL**

De modo geral, a ideia da contagem é estabelecer uma correspondência entre a quantidade a ser contada e algum padrão de contagem formado por objetos ou símbolos. Por exemplo, atribui-se a origem da palavra "cálculo" ao uso, por pastores, de pedrinhas para contar os animais em seu rebanho. Nas seguintes figuras, você pode reconhecer outros símbolos bem costumeiros na contagem:

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/imagem_03.png)

**INÍCIO RETRÁTIL**
Observação para o monitor: proponha atividades com o uso de marcas gráficas como na figura anterior para que os alunos expressem diferentes quantidades sugeridas espontaneamente na interação com eles, tanto do cotidiano quanto de outros contextos.
**FIM RETRÁTIL**

Nosso sistema de numeração usa símbolos, a saber, os algarismos

<center>0 1 2 3 4 5 6 7 8 9</center>  

chamado indo-arábicos. A questão é: como usar apenas essa quantidade finita de símbolos para expressar as quantidades de objetos nos mais diferentes conjuntos? O número de alunos em sua turma, a distância, em quilômetros, de sua escola para sua casa, o número de estrelas no universo ou de grãos de areia em uma praia?

A ideia, verdadeiramente genial, é combinar esses dez algarismos para expressar as diferentes quantidades, mais ou menos como combinamos as letras para formar palavras de uma língua. Por exemplo, o número 12 (doze) significa

<center>12 = 10 + 2,</center>  

onde 10 = 9+1 unidades. Ou seja,

<center>12 = 9 + 1 + 1 + 1.</center>

Observe que 12 é composto de uma dezena (dez unidades), mais 2 unidades. O algarismo 1, no número 12, indica **uma dezena** e não **uma unidade**.

No número 22, temos:

<center>22 = 20 + 2,</center>

ou seja, 22 = 10 + 10 + 2. Logo, o primeiro algarismo 2 à esquerda indica 2 dezenas, ou seja, 10 +10, enquanto o segundo algarismo 2 indica 2 unidades.

Note que a **posição** dos algarismos altera seu valor no número. Por exemplo, o algarismo 2 em 20 corresponde a duas dezenas, ou seja, a 10+10. Já no número 200, o algarismo 2 corresponde a 2 centenas, ou seja, a 2 vezes 100 unidades. Sendo assim,

200 = 100 + 100
= 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 +10
+10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10.

Observe que os algarismos 0 nesses dois números têm um papel especial. Por exemplo, o algarismo 0 marca a posição das unidades no número 20 e marca as posições das unidades e dezenas em 200. Vejamos o caso do número 200 (duzentos). Temos:

|      Números|Centenas|Dezenas|Unidades|
|----------------|-------------------------------|-----------------------------|-----------------------------|
|<center>200|<center> 2           |<center> 0           |<center> 0          

Para esclarecer um pouco mais essas ideias, considere os números 202 (duzentos e dois) e 220 (duzentos e vinte). Temos:

<center>202 = 200 + 2 = 2 centenas e 2 unidades</center>
<center>220 = 200 +20 = 2 centenas e 2 dezenas</center>

Essas decomposições dos números 202 e 220 podem ser representadas na seguinte tabela:

|      Números|Centenas|Dezenas|Unidades|
|----------------|-------------------------------|-----------------------------|-----------------------------|
|<center>202|<center> 2           |<center> 0           |<center> 2   
|<center>220|<center> 2           |<center> 2           |<center> 0

Avançando uma posição para a esquerda, o valor do algarismo no número torna-se **dez vezes maior**. Por exemplo, em 111, o primeiro algarismo 1, à direita, vale exatamente uma unidade. Já o segundo algarismo 1 vale 1 dezena ou 10 unidades, ou seja,

<center>10 = 1+1+1+1+1+1+1+1+1+1,</center>

isto é, **dez vezes** uma unidade. Por fim, o terceiro algarismo 1, da direita para a esquerda, vale 100 unidades ou 10 dezenas, isto é,

<center>100 = 10+10+10+10+10+10+10+10+10+10,</center>

ou seja, **dez vezes** uma dezena ou **cem vezes** uma unidade.

Apliquemos esses conceitos no seguinte exercício:

*Exercício:* De acordo com estimativa da população brasileira divulgada pelo IBGE em 2021, o município de Serra da Saudade é o menos populoso do Brasil, com apenas 776 habitantes.

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/imagem_04.png)
> **Fonte:** Prefeitura Municipal de Serra da Saudade. Disponível em https://www.serradasaudade.mg.gov.br/pg.php?id=1

Como decompomos esse número?

Solução. Observe que o número 776 é escrito, por extenso, como setecentos e setenta e seis e pode ser decomposto como 7 centenas, 7 dezenas e 6 unidades, ou seja,

<center>776 = 100+100+100+100+100+100+100 +10+10+10+10+10+10+10+1+1+1+1+1+1</center>

De forma mais abreviada, temos:

<center>776 = 700+70+6</center>

## Tarefas da Seção 1

### Tarefa  1

Faça uma pesquisa, juntamente com seus colegas, para descobrir os seguintes números naturais:

 - Número de alunos na sua turma;
 - Quantidade de municípios em seu estado;
 - População estimada de sua cidade;
 - População estimada de seu estado;
 - População estimada do Brasil.

Escreva cada um desses números por extenso.

**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 1:**

Ilustramos a solução, tomando um exemplo hipotético de um aluno em uma turma de 36 alunos em uma escola no município de Goiás Velho, no estado de Goiás:
- **Número de alunos na sua turma:** 36 alunos
- **Quantidade de municípios em seu estado:** 246 municípios
- **População estimada de sua cidade:** 22 122 habitantes
- **População estimada de seu estado:** 7 206 589 habitantes
- **População estimada do Brasil:** 213 845 341 habitantes

Os dados podem ser pesquisados na página do IBGE e em sítios como

https://www.ibge.gov.br/apps/populacao/projecao/index.html ou
https://www.ibge.gov.br/cidades-e-estados
**FIM RETRÁTIL**

**INÍCIO RETRÁTIL**
> **Rubricas relativas à tarefa 1:**

Em relação à tarefa 1, devem ser observadas a correção e fluência com que o aluno, após preenchida a tabela, enuncia os números em voz alta e/ou os escreve por extenso. É relevante perceber em que ponto as dificuldades com a notação e representação numérica começam a ser mais evidentes, especialmente na expressão de números envolvendo milhares ou dezenas de milhares (que pode ser o caso, provavelmente, dos dados sobre população municipal); ou nas últimas linhas, com dados da ordem de milhões a centenas de milhões. A análise do trabalho do aluno permitirá, ainda, acessar evidências sobre o quanto o aluno domina noções como o valor posicional dos algarismos e o papel do zero, em particular.

|Objetivos da tarefa/Nível de realização das etapas  |Objetivo não alcançado/etapa não realizada  |Objetivo parcialmente alcançado/etapa parcialmente realizada  |Objetivo plenamente alcançado/etapa plenamente realizada  |
|--|--|--|--|
|***Processos básicos:* ler e interpretar o enunciado e o comando**  |<center>O aluno revela dificuldade na compreensão do próprio texto  |<center>O aluno compreende o texto, mas têm dificuldades em operacionalizar o que o comando pede (e.g., iniciar a pesquisa)  |<center>O aluno compreende o texto e entende que deve pesquisar informações expressas por números  |
|***Processos básicos:* reconhecer os conceitos aritméticos fundamentais mobilizados na tarefa**  |<center>O aluno desconhece conceitos fundamentais como "número natural" ou "quantidade"  |<center>O aluno conhece esses conceitos, mas não os associa a termos como "população"  |<center>O aluno compreende que deve buscar informações quantitativas expressas por números naturais  |
|***Processos intermediários:* identificar e representar, com algarismos, as informações numéricas na tarefa**  |<center>O aluno, mesmo exposto às fontes de pesquisa trazidas pelo monitor, não identifica, nos textos, gráficos ou tabelas, onde estão explicitadas as informações ou não consegue representá-las em termos de algarismos  |<center>O aluno identifica informações mais explícitas, representa informações quantitativas usando algarismos, mas comete erros, como confundir ordens ou classes, omitir zeros, posicionar erradamente um algarismo, dentre outro equívocos  |<center>O aluno consegue identificar e representar corretamente as informações numéricas nas fontes, sejam expressas por algarismos ou por extenso.  |
|***Processos intermediários:* ler em voz alta ou escrever por extenso os números, expressando as quantidades na tabela**  |<center>O aluno manifesta dificuldades ou erros, seja na expressão escrita dos números, seja em lê-los em voz alta, a pedido do monitor  |<center>O aluno manifesta dificuldades ou erros relativos apenas a números de maior ordem, seja na sua expressão escrita, seja ao lê-los em voz alta, a pedido do monitor  |<center>O aluno lê e escreve corretamente os números que foram pesquisados e informados na tabela  |
|***Processos finalísticos:* distinguir o valor posicional dos algarismos bem como as ordens e classes na decomposição decimal dos números**  |<center>O aluno não entende o significado do agrupamento dos algarismos em classes e ordens, não percebendo a mudança das ordens de grandeza associadas à posição dos algarismos nos números.  |<center>O aluno agrupa os algarismos em ordens e classes, mas não nomeia ou não identifica as ordens e classes; ou, ainda, não atribui corretamente o valor posicional a um ou mais algarismos.  |<center>O aluno identifica corretamente as classes e ordens bem como o valor posicional dos algarismos em cada número, com eventuais erros nas maiores ordens de grandeza.  |
**FIM RETRÁTIL**



### Tarefa  2

A distância entre os municípios de Serra da Saudade e Belo Horizonte é, aproximadamente, igual a 259 quilômetros.

**a. Escreva esse número por extenso.**
**b. Decomponha esse número de duas formas diferentes.**

**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 2:** 

**a.** O número 259, ou duzentos e cinquenta e nove, equivale a 2 centenas, 5 dezenas e nove unidades, ou seja:
<center>259 200 + 50 + 9 = 100 +100+10+10+10+10+10+1+1+1+1+1+1+1+1+1</center><BR>

**b.** Além da decomposição acima, podemos decompor esse número como 25 dezenas e 9 unidades, uma vez que 2 centenas equivalem a 20 dezenas. De fato,
<center>200 = 100 + 100 = 10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10</center>

Portanto, três possíveis decomposições de 259 são:
259 = 2 centenas, 5 dezenas e 9 unidades
259 = 25 dezenas e 9 unidades
259 = 259 unidades

A seguinte tabela representa essas decomposições:

| Número | Centenas | Dezenas | Unidades |
|--|--|--|--|
|<center> 259 |<center> 2 |<center> 5 |<center> 9 |
|<center> 259|<center> 0 |<center> 25 |<center> 9 |
|<center> 259|<center> 0 |<center> 0 |<center> 259 |
**FIM RETRÁTIL**


**INÍCIO RETRÁTIL**
> **Rubricas relativas à tarefa 2:**

O objetivo fundamental dessa tarefa é obter evidências bem delimitadas sobre a compreensão, pelo aluno, da correspondência entre a expressão escrita dos números e sua representação por meio de algarismos. Além disso, começamos a explorar algumas atividades relacionadas a diversas formas de decompor números segundo classes e ordens decimais. Note que, nessa tarefa, consideramos apenas números da ordem das centenas.

| Objetivos da tarefa/Nível de realização das etapas| Objetivo não alcançado/etapa não realizada| Objetivo parcialmente alcançado/etapa parcialmente realizada| Objetivo plenamente alcançado/etapa plenamente realizada|
|--|--|--|--|
|***Processos básicos:* ler e interpretar o enunciado e o comando** |<center> O aluno revela dificuldade na compreensão do próprio texto |<center> O aluno compreende o texto, mas têm dificuldades em operacionalizar o que o comando pede (e.g., iniciar a pesquisa) |<center> O aluno compreende o texto e entende que deve lidar com o número expresso no enunciado |
|***Processos intermediários:* associar o número à sua expressão por escrito**|<center> O aluno não consegue escrever o número por extenso |<center> O aluno escreve o número por extenso, mas com erros conceituais (que não são meramente ortográficos) |<center> O aluno escreve, corretamente, o número por extenso |
|***Processos finalísticos:* decompor o número em suas ordens decimais da forma convencional, ordem a ordem, ou de outras formas**|<center> O aluno não compreende a noção de decomposição decimal, mesmo quando o monitor esclarece o conceito com alguns exemplos |<center> O aluno tenta realizar a decomposição, demonstrando que é familiarizado com algumas ordens e classes (e o valor posicional dos algarismos), mas comete erros. Além disso, limita-se a usar a decomposição convencional |<center> O aluno decompõe o número corretamente em centenas, dezenas e unidades e também de outras formas | 
**FIM RETRÁTIL**


### Tarefa  3

**INÍCIO RETRÁTIL**
**Observação ao monitor:** se julgar adequado, pode substituir os municípios e dados considerados por outros que sejam mais próximos do contexto dos alunos. Por exemplo, no caso de crianças do Distrito Federal, podem ser usados dados de cidades-satélite e de Brasília.
**FIM RETRÁTIL**

A seguinte tabela mostra, em valores aproximados, a distância para Belo Horizonte (em quilômetros), as áreas (em quilômetros quadrados) e as populações (em número de habitantes) de alguns municípios de Minas Gerais, de acordo com dados do IBGE:

|Município  |Distância a Belo Horizonte (em quilômetros)  |Área (em quilômetros quadrados)  |População (número de habitantes em 2021)  |
|--|--|--|--|
|Consolação  |<center>436  |<center>89  |<center>1786  |
|Passabém  |<center>160  |<center>94  |<center>1619  |
|Paiva  |<center>228  |<center>58  |<center>1517  |
|Doresopólis  |<center>249  |<center>153  |<center>1539  |

 **1.** Escreva, por extenso, as áreas, em quilômetros quadrados, de Paiva e Doresopólis.
 **2.** Escreva, por extenso, as distâncias, em quilômetros, dos municípios de Paiva e Doresopólis a Belo Horizonte.
 **3.** Escreva, por extenso, os números de habitantes de Consolação e de Passabém.
 **4.** Decomponha, em ordens decimais, os números de habitantes de
    Consolação e de Passabém.
 **5.** Decomponha, de três formas diferentes, o número de habitantes de Paiva. 
 **6.** Que número está mais próximo da área de Paiva, em quilômetros quadrados: 50 ou 60? 
 **7.** Que número está mais próximo da área de Passabém, em quilômetros quadrados: 90 ou 100?
 **8.** Que número está mais próximo da distância de Doresopólis a Belo Horizonte, em quilômetros: 240 ou 250?
 **9.** Faça as seguintes atividades.
a. Qual desses municípios tem a maior população?
b. Qual desses municípios tem a menor área?
c. Qual desses municípios está mais distante de Belo Horizonte?
d. Ordene as populações dos quatro municípios, da menor para a maior.
e. Ordene as áreas dos quatro municípios, da maior para a menor.
 **10.** Indique, na seguinte reta numérica, a posição aproximada dos pontos que correspondem às áreas dos quatro municípios:
 ![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas1.png)
 **11.** Indique, na seguinte reta numérica, a posição aproximada dos pontos que correspondem às distâncias dos quatro municípios a Belo Horizonte:
 ![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas2.png)
 **12.** Indique, na seguinte reta numérica, a posição aproximada dos pontos que correspondem às populações dos quatro municípios:
 ![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas3.png)


**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 3:** 

**1.** Área do município de Paiva: cinquenta e oito quilômetros quadrados. Área do município de Doresopólis: cento e cinquenta e três quilômetros quadrados.

**2.** Distância, em quilômetros, dos municípios de Paiva a Belo Horizonte: duzentos e vinte e oito quilômetros. Distância, em quilômetros, dos municípios de Doresopólis a Belo Horizonte: duzentos e quarenta e nove quilômetros.

**3.** Número de habitantes de Consolação: mil, setecentos e oitenta e seis. Número de habitantes de Passabém: mil, seiscentos e dezenove.

**4.** Decomposição, em ordens decimais, do números de habitantes de Consolação: 1000 + 700 + 80 + 6 = um milhar, sete centenas, oito dezenas e seis unidades. Decomposição, em ordens decimais, do números de habitantes de Passabém: 1000 + 600 + 10 + 9 = um milhar, seis centenas, 1 dezena e nove unidades.

**5.** O número de habitantes de Paiva pode ser decomposto das seguintes três diferentes formas:
1 517 = 1 000 + 500 + 10 + 7 = um milhar, cinco centenas, uma dezena e sete unidades
1 517 = 1 500 + 10 + 7 = quinze centenas, uma dezena e sete unidades
1 517 = 1 510 + 7 = cento e cinquenta e uma dezenas e sete unidade

A tabela seguinte ilustra essas decomposições:

| Número | Unidades de milhar | Centenas | Dezenas | Unidades |
|--|--|--|--|--|
|<center> 1517 |<center> 1 |<center> 5 |<center> 1 |<center> 7 |
|<center> 1517 |<center> 0 |<center> 15 |<center> 1 |<center> 7 |
|<center> 1517 |<center> 0 |<center> 0 |<center> 151 |<center> 7 |

**6.** A área de Paiva, em quilômetros quadrados, é dada por 58 = 50 +8 quilômetros quadrados. Logo, está entre 50 e 60, ou seja, 50 < 50+8 < 50+10 =60. Note que a diferença de 60 para 58 é de duas unidades, ao passo que a diferença de 58 para 50 é de oito unidades. Logo, 58 está mais próximo de 60.

**7.** A área de Passabém, em quilômetros quadrados, é dada por 94 = 90 + 4 quilômetros quadrados. Logo, está entre 90 e 100, ou seja, 90 < 90+4 < 90+10 =100. Note que a diferença de 100 para 94 é de seis unidades, ao passo que a diferença de 94 para 90 é de quatro unidades. Logo, 94 está mais próximo de 90.

**8.** A distância de Doresopólis a Belo Horizonte, em quilômetros, é igual a 249 = 240 + 9 quilômetros. Logo, está entre 240 e 250: 240 < 240 + 9 < 240 + 10 = 250. Como a diferença entre 250 e 249 é de uma unidade apenas, 249 está mais próximo de 250.

**9.** As áreas dos quatro municípios, em quilômetros quadrados, são dadas, em ordem crescente, por 58 < 89 < 94 < 153. Essa ordem pode ser melhor entendida com a decomposição decimal desses quatro números, conforme a seguinte tabela:

| Áreas | Dezenas | Unidades |
|--|--|--|
|<center> 58 |<center> 5 |<center> 8 |
|<center> 89 |<center> 8 |<center> 9 |
|<center> 94 |<center> 9 |<center> 4 |
|<center> 153 |<center> 15 |<center> 3 |

Observe que a menor área, em quilômetros quadrados, é a do município de Paiva.

Essas áreas são postas em ordem decrescente da seguinte forma: 153 > 94 > 89 > 53.

As populações dos quatro municípios, em número de habitantes, são dadas, em ordem crescente, por 1 517 < 1 539 < 1 619 < 1 786.

Essa ordem pode ser melhor entendida com a decomposição decimal desses quatro números, conforme a seguinte tabela:

| Populações| Unidades de milhar| Centenas| Unidades |
|--|--|--|--|
|<center> 1517|<center> 1 |<center> 5 |<center> 17 |
|<center> 1539|<center> 1 |<center> 5 |<center> 39 |
|<center> 1619|<center> 1 |<center> 6 |<center> 19 |
|<center> 1786|<center> 1 |<center> 7 |<center> 86 |

Essa ordem pode ser melhor entendida com a decomposição decimal desses quatro números, conforme a seguinte tabela:

Note que os números 1 517 e 1 539 têm a mesma quantidade de unidades de milhar e de centenas. No entanto, 1 539 tem 39 unidades e 1 517 tem 17 unidades, uma quantidade menor. Logo, 1 517 é menor que 1 539.

Observe, agora, que 1 619 tem 19 unidades e 1 539 tem 39 unidades. Todavia, 1 619 tem 16 centenas ao passo que 1 530 tem 15 centenas. Logo, 1 619 é maior do que 1 539.

O município de maior população é Consolação.

Finalmente, com respeito a distância dos quatro municípios a Belo Horizonte, temos os seguintes dados na tabela:

| Distâncias| Centenas| Dezenas| Unidades |
|--|--|--|--|
|<center> 160|<center> 1 |<center> 6 |<center> 0 |
|<center> 228|<center> 2 |<center> 2 |<center> 8 |
|<center> 249|<center> 2 |<center> 4 |<center> 9 |
|<center> 436|<center> 4 |<center> 3 |<center> 6 |

Finalmente, com respeito a distância dos quatro municípios a Belo Horizonte, temos os seguintes dados na tabela:

Observe que o número 436 tem a maior quantidade de centenas e é o maior número. Logo, Consolação é o município mais distante de Belo Horizonte dentre os quatro.

Note que tanto 228 quanto 249 têm 2 centenas. No entanto, 249 tem 2 dezenas a mais do que 228. Logo, 249 é maior do que 228.

Observação ao monitor: nas 3 atividade seguintes, leve em conta que as retas numéricas representadas nas figuras não estão na mesma escala. Se puder utilizar outros modelos, de modo que isso fique claro, teremos resultados ainda mais efetivos.

**10.** As posições aproximadas que correspondem às áreas dos quatro municípios, isto é, aos números 58, 89, 94 e 153 estão assinaladas, respectivamente, pelos pontos A, B, C e D na seguinte reta numérica:

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas4.png)

Note que os intervalos entre duas marcas consecutivas na reta medem, cada um, 10 unidades de comprimento. Observe, além disso, que o ponto A, que corresponde ao número 58, está mais próximo de 60 do que de 50; que o ponto B, que corresponde a 89, está bem mais próximo de 90 do que de 80. Quanto ao ponto C, correspondente a 94, está mais próximo de 90 do que de 100, mas quase a meia distância entre eles. Finalmente, o ponto D, correspondente a 153, está mais próximo de 150 do que de 160.

**11.** As posições aproximadas que correspondem às distâncias dos quatro municípios a Belo Horizonte, isto é, aos números 160, 228, 249 e 436 estão assinaladas, respectivamente, pelos pontos A, B, C e D na seguinte reta numérica:

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas5.png)

Note que os intervalos entre duas marcas consecutivas na reta medem, cada um, 50 unidades de comprimento. Observe, além disso, que o ponto A, que corresponde ao número 160, está mais próximo de 150 do que de 200; que o ponto B, que corresponde a 228, está mais próximo de 250 do que de 200. Quanto ao ponto C, correspondente a 249, está bastante próximo de 250. Finalmente, o ponto D, correspondente a 436, está mais próximo de 450 do que de 400.

**12.** As posições aproximadas que correspondem às populações dos quatro municípios, isto é, aos números 1 517, 1 539, 1 619 e 1 786 estão assinaladas, respectivamente, pelos pontos A, B, C e D na seguinte reta numérica:

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/retas-numericas6.png)

Note que os intervalos entre duas marcas consecutivas na reta medem, cada um, 50 unidades de comprimento. Observe, além disso, que o ponto A, que corresponde ao número 1 517, está mais próximo de 1500 do que de 1550; já o ponto B, que corresponde a 1 539, está mais próximo de 1550 do que de 1500. Quanto ao ponto C, correspondente a 1619, está mais próximo de 1600 do que de 1650. Finalmente, o ponto D, correspondente a 1786, está bem próximo de 1800.

**FIM RETRÁTIL**


**INÍCIO RETRÁTIL**
> **Rubricas relativas à tarefa 3:** 

A tarefa acessa vários conhecimentos e habilidades relativos ao uso do sistema posicional decimal, como a decomposição dos números em ordens decimais (de uma ou mais formas), o valor posicional dos algarismos, a ordenação e comparação dos números na tabela associados a uma das variáveis (distância, área e população) e, por fim, a representação dessa ordenação e comparação na reta numérica, precedida de algumas atividades que envolvem o arredondamento de números para as dezenas mais próximas. Todas essas atividades dependem da adequada leitura dos dados na tabela.
>
| Objetivos da tarefa/Nível de realização das etapas | Objetivo não alcançado/etapa não realizada | Objetivo parcialmente alcançado/etapa parcialmente realizada | Objetivo plenamente alcançado/etapa plenamente realizada |
|--|--|--|--|
|***Processos básicos:* ler e interpretar o enunciado e o comando, identificando os valores das variáveis de interesse (área, população, distância)**  |<center>O aluno revela dificuldade na compreensão do próprio texto: por exemplo, em distinguir os valores das variáveis na tabela  |<center>O aluno compreende o texto, mas têm dificuldades com os comandos das atividades, como em associar os valores das variáveis aos municípios, ou vice-versa  |<center>O aluno compreende o texto e lê a tabela com fluência, interpretando cada entrada como os valores das variáveis  |
|***Processos básicos:* escrever, por extenso, ou ler em voz alta, os números referentes aos valores das variáveis**  |<center>O aluno tem dificuldades na leitura ou escrita de alguns números nas entradas da tabela  |<center>O aluno tem dificuldades em relacionar a expressão escrita, por extenso, à expressão dos números por meio de algarismos  |<center>O aluno expressa, fluentemente, os números nas entradas da tabela usando algarismos ou a escrita por extenso  |
|***Processos intermediários:* decompor os números da tabela em classes e ordens decimais, de uma ou mais formas**  |<center>O aluno tem dificuldades relacionadas ao conceito de decomposição decimal (ordens, valor posicional, decomposição aditiva, etc.)  |<center>O aluno tenta realizar a decomposição, demonstrando que é familiarizado com algumas ordens e classes, mas comete erros, mesmo na decomposição convencional  |<center>O aluno decompõe o número corretamente, nas ordens de unidades a milhares, eventualmente de formas diversas  |
|***Processos intermediários:* ordenar e comparar os números, usando a decomposição decimal e expressando a ordenação com o uso dos sinais de desigualdade**  |<center>O aluno não compreende a noção de ordem, mesmo com exemplos apresentados pelo monitor; em particular, não compreende o significados de sinais como < e >  |<center>O aluno compreende a noção de ordem, mas comete erros ao não considerar, por exemplo, o valor posicional dos algarismos nas várias ordens decimais, como em 99 e 100. O aluno conhece sinais como < e >, mas comete erros ao utilizá-los  |<center>O aluno compreende a noção de ordem, ordena corretamente os valores das variáveis e justifica a ordenação (e comparação) em termos do valor posicional dos algarismos nas várias ordens decimais: o aluno usa corretamente sinais como < e >  |
|***Processos finalísticos:* relacionar a ordenação à comparação, representando-as termos da localização nas retas numéricas com a ajuda de arredondamentos**  |<center>O aluno não compreende a noção de, por exemplo, "dezena mais próxima" (como em 86 para 90, relacionando ordenação e arredondamento), mesmo com o suporte do monitor a partir de exemplos. O aluno não é familiarizado com a representação dos números em retas numéricas ou réguas e escalas graduadas  |<center>O aluno compreende a relação entre ordenar, comparar e arredondar, mas tem dúvidas ou comete erros em alguns casos (como arredondar 249 para 250). O aluno é familiarizado com a representação dos números em retas numéricas ou retas graduadas, mas comete erros (devido a ordenação ou arredondamento) ao localizar alguns números  |<center>O aluno relaciona ordenação, comparação e arredondamento e define, corretamente, os arredondamentos para dezenas ou centenas mais próximas, por exemplo. O aluno é familiarizado com a representação dos números em retas numéricas ou retas graduadas e consegue localizar (via ordenação, comparação ou arredondamento) alguns dos números  |

**FIM RETRÁTIL**


### Tarefa  4
**INÍCIO RETRÁTIL**
**Observação ao monitor:** se julgar adequado, pode substituir os municípios e dados considerados por outros que sejam mais próximos do contexto dos alunos. Por exemplo, no caso de crianças do Distrito Federal, podem ser usados dados de cidades-satélite e de Brasília.
**FIM RETRÁTIL**

A seguinte tabela mostra, em valores aproximados, a distância para Belo Horizonte (em quilômetros), as áreas (em quilômetros quadrados) e as populações (em número de habitantes) de alguns municípios de Minas Gerais, de acordo com dados do IBGE:

| Município | Distância a Belo Horizonte (em quilômetros) | Área (em quilômetros quadrados) | População (número de habitantes em 2021) |
|--|--|--|--|
| Consolação |<center>436  |<center>89  |<center>1786  |
| Passabém |<center>160  |<center>94  |<center>1619  |
| Paiva |<center>228  |<center>58  |<center>1517  |
| Doresopólis |<center>249  |<center>153  |<center>1539  |

**a.** Qual número está mais próximo da área do município de Consolação: 80 ou 90?
**b.** Qual número está mais próximo da área do município de Passabém: 90 ou 100?
**c.** Com base nessas respostas, estime a soma das áreas desses dois municípios.
**d.** Calcule a soma das distâncias de Passabém e Paiva a Belo Horizonte, em quilômetros.
**e.** Calcule a soma das distâncias de Consolação e Paiva a Belo Horizonte, em quilômetros.
**f.** Qual número está mais próximo da população do município de Consolação: 1 780 ou 1 790?
**g.** Qual número está mais próximo da população do município de Passabém: 1 610 ou 1 620?
**h.** Com base nessas respostas, estime a soma das populações desses dois municípios.
**i.** Calcule a soma das áreas dos municípios de Passabém e Paiva
**j.** Calcule a soma das populações dos quatro municípios.

**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 4:** 

**a)** A área de Paiva, em quilômetros quadrados, é dada por 58 = 50 +8 quilômetros quadrados. Logo, está entre 50 e 60, ou seja, 50 < 50+8 < 50+10 =60. Note que a diferença de 60 para 58 é de duas unidades, ao passo que a diferença de 58 para 50 é de oito unidades. Logo, 58 está mais próximo de 60.

**b)** A área de Passabém, em quilômetros quadrados, é dada por 94 = 90 + 4 quilômetros quadrados. Logo, está entre 90 e 100, ou seja, 90 < 90+4 < 90+10 =100. Note que a diferença de 100 para 94 é de seis unidades, ao passo que a diferença de 94 para 90 é de quatro unidades. Logo, 94 está mais próximo de 90.

**c)** Com esses arredondamentos , podemos estimar a soma das áreas dos dois municípios, obtendo a seguinte aproximação para a soma: 60 + 90 = 6 dezenas + 9 dezenas = 15 dezenas = 150. Logo, a soma das áreas dos dois municípios é aproximadamente igual a 150 quilômetros quadrados.

O valor exato da soma é calculado da seguinte forma:
<center>58 + 94 = 50 + 8 + 90 + 4 = 50 + 90 + 8 + 4 = 140 + 12 = 140 + 10 + 2 = 150 + 2 = 152 quilômetros quadrados.</center>

Note que decompomos 12 em 10 + 2 e somamos essa dezena às 14 dezenas que já tínhamos, obtendo 15 dezenas.

**d)** A soma das distâncias de Passabém e Paiva a Belo Horizonte, em quilômetros, é calculada segundo os seguintes passos:
<center>160 + 228 = 100 + 60 + 200 + 20 + 8 = 100 + 200 + 60 + 20 + 8 = 300 + 80 + 8 = 388 quilômetros.</center>

**e)** A soma das distâncias de Passabém e Doresopólis a Belo Horizonte, em quilômetros, é calculada segundo os seguintes passos:
<center>160 + 249 = 100 + 60 + 200 + 40 + 9 = 100 + 200 + 60 + 40 + 9 = 300 + 100 + 9 = 400 + 9 = 409 quilômetros.</center>

Note que agrupamos os 60 + 40 = 100 unidades junto às 300 unidades que já tínhamos, formando 400 unidades ou 4 centenas.

**f)** A população, em número de habitantes, do município de Consolação é igual a 1 786, ou seja, 17 centenas e 86 unidades. Esse é um número mais próximo de 17 centenas e 90 unidades (ou seja, de 1 790) do que de 17 centenas e 80 unidades (isto é, 1 780). De fato a diferença de 90 para 86 é de quatro unidades ao passo que a diferença de 86 para 80 é de seis unidades.

**g)** A população, em número de habitantes, do município de Passabém é igual a 1 619, ou seja, 16 centenas e 19 unidades. Esse é um número mais próximo de 16 centenas e 20 unidades (ou seja, de 1 620) do que de 16 centenas e 10 unidades (isto é, 1 610). De fato, a diferença de 20 para 19 é de apenas uma unidade.

**h)** Usando esses arredondamentos, estimamos a soma dos números de habitantes de Consolação e de Passabém pela seguinte aproximação:

1 790 + 1 620 = 1 000 + 700 + 90 + 1 000 + 600 + 20
= 1 000 + 700 + 1 000 + 600 + 110
= 1 000 + 1 000 + 700 + 600 + 100 + 10
= 1 000 + 1 000 + 1 400 + 10
= 1 000 + 1 000 + 1 000 + 400 + 10
= 3 000 + 400 + 10
= 3 410 habitantes

Note que esses passos do algoritmo da adição podem ser representados da seguinte forma, em que ficam mais explícitas as decomposições decimais das parcelas e da soma na adição acima:

| Números | Unidades de milhar | Centenas | Dezenas | Unidades |
|--|--|--|--|--|
|  |<center>1  |<center>1  |<center>  |<center>  |
| Parcela |<center>1  |<center>7  |<center>9  |<center>0  |
| Parcela |<center>1  |<center>6  |<center>2  |<center>0  |
| Soma |<center>3  |<center>4  |<center>1  |<center>0  |

De forma mais sucinta, representamos essa soma como:

<center>  
&nbsp&nbsp11<br/> 
&nbsp&nbsp1790<br/>  
<u>&nbsp&nbsp+1620&nbsp&nbsp</u><br/>  
&nbsp&nbsp3410<br/>  
</center>

Note que, quando somamos 90 e 20, obtemos 110, que decompomos como 1 centena e 1 dezena. Essa 1 centena "vai" para a ordem das centenas. Por isso, escrevemos o algarismo 1 na primeira linha, na ordem das centenas. Somamos, então, essa 1 centena às 7 centenas e 6 centenas que já havia, obtendo 1+7+6=14 centenas, ou seja, 1 unidade de milhar e 4 centenas. Essa unidade de milhar "vai" para a ordem das unidades de milhar, como representado pelo algarismo 1 na primeira linha, na ordem das unidades de milhar. Assim, somamos essa 1 unidade de milhar às que já havia nessa ordem, obtendo 1+1+1=3 unidades de milhar.

Esse é o detalhamento do **algoritmo da adição com reagrupamento**, que acabamos de executar. Por conta dos agrupamentos de 10 dezenas como 1 centena e de 10 centenas como 1 unidade de milhar, como fizemos acima, o método é popularmente referido como "vai um".

Note que a soma **exata** das populações desses dois municípios é dada por:
<center>  
&nbsp&nbsp111<br/> 
&nbsp&nbsp1786<br/>  
<u>&nbsp&nbsp+1619&nbsp&nbsp</u><br/>  
&nbsp&nbsp3405<br/>  
</center>

cinco unidades a menos do que na estimativa que fizemos: de fato, nas nossas aproximações, acrescentamos 4 unidades à primeira parcela a 1 unidade à segunda. Observe que, nessa aplicação do algoritmo da adição, somamos 6+9 unidades, obtendo 15 unidades, ou seja, 1 dezena e 5 unidades. Essa 1 dezena "vai" para a ordem das dezenas, o que é representado pelo algarismo 1 na primeira linha, na ordem das dezenas. Com isso, somamos 1+8+1 = 10 dezenas, ou seja, 1 centena. Essa 1 centena "vai" para a ordem das centenas e é somada às 7+6 centenas que já havia: obtemos, assim, 1+7+6=14 centenas, isto é, 1 unidade de milhar e 4 centenas.

**i)** A soma dos números de habitantes de Paiva e de Passabém é calculada com o seguinte algoritmo:

1 517 + 1 619 = 1 000 + 500 + 10 + 7 + 1 000 + 600 + 10 + 9
= 1 000 + 500 + 1 000 + 600 + 10 + 10 + 16
= 1 000 + 1 000 + 500 + 600 + 10 + 10 + 10 + 6
= 1 000 + 1 000 + 1 100 + 30 + 6
= 1 000 + 1 000 + 1 000 + 100 + 30 + 6
= 3 000 + 100 + 30 + 6
= 3 136 habitantes.

Note que esses passos do algoritmo da adição podem ser representados da seguinte forma, em que ficam mais explícitas as decomposições decimais das parcelas e da soma na adição acima:

| Números | Unidades de milhar | Centenas | Dezenas | Unidades |
|--|--|--|--|--|
|  |<center>1  |<center>  |<center>1  |<center>  |
| Parcela |<center>1  |<center>5  |<center>1  |<center> 7 |
| Parcela |<center>1  |<center>5  |<center>1  |<center> 9 |
| Soma |<center>3  |<center>1  |<center>3  |<center> 6 |

De forma mais sucinta, representamos essa algoritmo com o seguinte **dispositivo prático**:

<center>  
&nbsp&nbsp1 1<br/> 
&nbsp&nbsp1517<br/>  
<u>&nbsp&nbsp+1619&nbsp&nbsp</u><br/>  
&nbsp&nbsp3136<br/>  
</center>

Note que, quando somamos 7 e 9, obtemos 16, que decompomos como 1 dezena e 6 unidades. Essa 1 dezena "vai" para a ordem das dezenas. Por isso, escrevemos o algarismo 1 na primeira linha, na ordem das dezenas. Somamos, então, essa 1 dezena às que já havia, obtendo 1+1+1=3 dezenas. Em seguida, somamos as 5 centenas às 6 centenas, obtendo 11 centenas, isto é, 1 unidade de milhar e 1 centena. Essa unidade de milhar "vai" para a ordem das unidades de milhar, como representado pelo algarismo 1 na primeira linha, na ordem das unidades de milhar. Assim, somamos essa 1 unidade de milhar às que já havia nessa ordem, obtendo 1+1+1=3 unidades de milhar.

Esse é o detalhamento do **algoritmo da adição com reagrupamento**, popularmente referido como "vai um".

**j)** A soma das populações dos quatro municípios é calculado de acordo com o seguinte algoritmo:

| Números | Unidades de milhar | Centenas | Dezenas | Unidades |
|--|--|--|--|--|
|  |<center>2  |<center>1  |<center>3  |<center>  |
| Parcela |<center>1  |<center>5  |<center>1  |<center> 7 |
| Parcela |<center>1  |<center>5  |<center>3  |<center> 9 |
| Parcela |<center>1  |<center>6  |<center>1  |<center> 9 |
| Parcela |<center>1  |<center>7  |<center>8  |<center> 6 |
| Soma |<center>6  |<center>4  |<center>6  |<center> 1 |

Escrevemos esse algoritmo de modo mais abreviado no seguinte dispositivo prático:

<center>  
&nbsp&nbsp213<br/> 
&nbsp&nbsp1517<br/>  
&nbsp&nbsp1539<br/>  
&nbsp&nbsp1619<br/>  
<u>&nbsp&nbsp+1786&nbsp&nbsp</u><br/>  
&nbsp&nbsp6461<br/>  
</center>

Observe que, na ordem das unidades, somamos

<center> 7 + 9 + 9 + 6 = 16 + 15 = 31 unidades, </center>

ou seja, 3 dezenas e 1 unidade. As 3 dezenas "vão" para a ordem das dezenas, onde são somadas às 1+3+1+8 dezenas que já estavam nessa ordem, resultando em

<center> 3 + 1 + 3 + 1 + 8 = 16 dezenas, </center>

ou seja, 1 centena e 6 dezenas. Essa 1 centena "vai" para a ordem das centenas. Somando todas as centenas nessa ordem, temos

<center> 1 + 5 + 5 + 6 + 7 = 11 + 13 = 24 centenas, </center>

isto é, 2 unidades de milhar e 4 centenas. As 2 unidades de milhar "vão" para a ordem das unidades de milhar e são somadas às unidades de milhar que já estavam agrupadas nessa ordem. Obtemos, com isso,

<center> 2 + 1 + 1 + 1 + 1 = 6 unidades de milhar. </center>

Note que, em cada passo, reagrupamos as quantidades: 31 unidades foram reagrupadas em 3 dezenas e 1 unidade; 16 dezenas, em 1 centena e 6 unidade; e 24 centenas, em 2 unidades de milhar e 4 centenas.

**FIM RETRÁTIL**

**INÍCIO RETRÁTIL**
> **Rubricas relativas à tarefa 4:** 

| Objetivos da tarefa/Nível de realização das etapas| Objetivo não alcançado/etapa não realizada | Objetivo parcialmente alcançado/etapa parcialmente realizada | Objetivo plenamente alcançado/etapa plenamente realizada|
|--|--|--|--|
|***Processos básicos:* reconhecer ordens e classes e o valor posicional dos algarismos dos números na tarefa**  |<center>O aluno desconhece noções básicas do sistema posicional decimal, como o valor posicional dos algarismos, ordens e classes decimais e outros  |<center>O aluno identifica ordens e classes decimais bem como distingue o valor posicional dos algarismos, mas comete erros por fragilidades no entendimento dos conceitos  |<center>O aluno identifica corretamente ordens e classes decimais e atribui corretamente o valor posicional aos algarismos  |
| ***Processos intermediários:* efetuar adições de dois números, sem reagrupamento, usando a decomposição decimal, ordem a ordem** |<center>O aluno tem dificuldades em efetuar a soma, mesmo ordem a ordem, devidas a lacunas de conhecimento de somas elementares ("tabuada") ou de uso do algoritmo  |<center>O aluno utiliza o algoritmo da adição (sem reagrupamento), mas não consegue justificar os passos do algoritmo em termos do sistema posicional decimal  |<center>O aluno utiliza o algoritmo da adição (sem reagrupamento) e consegue justificar os passos do algoritmo em termos do sistema posicional decimal  |
|***Processos intermediários:* utilizar arredondamentos e aproximações para estimar somas**  |<center>O aluno não compreende a ideia da aproximação do número para uma dada ordem de grandeza; além disso, não percebe como utilizar as aproximações em uma estimativa do resultado  |<center>O aluno compreende a ideia da aproximação do número para uma dada ordem de grandeza, mas não percebe como ou não percebe como utilizar as aproximações em uma estimativa do resultado, identificando a margem de erro da estimativa  |<center>O aluno compreende a ideia da aproximação do número para uma dada ordem de grandeza e a utilizar para estimar o resultado, identificando a margem de erro da estimativa  |
| ***Processos finalísticos:* efetuar adições de dois números, com reagrupamento, compreendendo o uso dos algoritmos da adição baseados na decomposição decimal** |<center>O aluno tem dificuldades em efetuar a soma, especialmente os reagrupamentos, devidas a lacunas de conhecimento de somas elementares ("tabuada") ou de uso do algoritmo  |<center>O aluno utiliza o algoritmo da adição (inclusive com reagrupamento), mas não consegue justificar os passos do algoritmo em termos da decomposição decimal das parcelas e da soma  |<center>O aluno utiliza o algoritmo da adição (inclusive com reagrupamento), justificando, quando demandado, os passos do algoritmo em termos da decomposição decimal das parcelas e da soma  |
| ***Processos finalísticos:* efetuar adições de dois ou mais números, com ou sem reagrupamento, compreendendo o uso dos algoritmos da adição baseados na decomposição decimal** |<center>O aluno tem dificuldades em efetuar a soma, especialmente os reagrupamentos, devidas a lacunas de conhecimento de somas elementares ("tabuada") ou de uso do algoritmo  |<center>O aluno utiliza o algoritmo da adição (inclusive com reagrupamento), mas não consegue justificar os passos do algoritmo em termos da decomposição decimal das parcelas e da soma  |<center>O aluno utiliza o algoritmo da adição (inclusive com reagrupamento), justificando, quando demandado, os passos do algoritmo em termos da decomposição decimal das parcelas e da soma  |
**FIM RETRÁTIL**

### Tarefa  5
Márcia mora em Planaltina e trabalha em Brasília e, por isso, tem de percorrer 42 quilômetros que separam uma cidade da outra, duas vezes por dia, de segunda a sexta-feira.

![enter image description here](https://aulasiuv.virtual.ufc.br/BrasilnaEscola/imagens_topico_01/imagem_05.png)
> **Fonte:**  Disponível em https://pixabay.com/images/id-4209838/

**a.** Qual o total de quilômetros nesses percursos diários de ida e volta?
**b.** Qual o total de quilômetros percorridos de segunda a sexta-feira com esses percursos diários?
**c.** Se Márcia vai de ônibus, pagando uma passagem de R$15,00 e volta também de ônibus, mas pagando uma passagem de R$18,00, quanto gasta de passagens de segunda a sexta-feira para realizar esses percursos?

<center>*Observação:* a diferença de valores das passagens se deve ao horário e ao tipo de ônibus </center>

**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 5:**  

**a)** O percurso diário é dado pela soma 42 + 42 = 84 quilômetros. Esta soma de duas parcelas iguais a 42 pode ser simbolizada pelo sinal x (lê-se "vezes"). Temos, assim:
<center>42 + 42 = 2 x 42 = 84 quilômetros.</center>

**b)** Esse percurso diário, sendo repetido cinco vezes, de segunda-feira a sexta-feira, resulta em
<center>5 x 2 x 42 = 10 x 42 = 420 quilômetros.</center>

Note que esta conta poderia ser feita também da seguinte forma:
<center>5 x 2 x 42 = 5 x 84 = 5 x 80 + 5 x 4 = 400 + 20 = 420 quilômetros.</center>
Da primeira forma, multiplicamos 5 e 2 primeiro, pois tínhamos 5 percursos feitos 2 vezes por dia, em um total de 10 percursos, cada um de 42 quilômetros, o que resultou em 420 quilômetros.

Da segunda forma, multiplicamos, inicialmente, 2 vezes 42, para obter o percurso diário total. Apenas em seguida, somamos esse resultado 5 vezes (ou seja, multiplicamos por 5), já que esse percurso de 42 quilômetros é realizado 5 vezes por semana.

De uma forma ou de outra, esse é um exemplo da **propriedade associativa** da multiplicação.

**c)** Há pelo menos duas maneiras diferentes de efetuar esse cálculo. Do primeiro modo, vemos quanto Márcia gasta por dia, a saber,
<center>15 + 18 = 10 + 10 + 13 = 33 reais</center>

e, em seguida, multiplicamos esse resultado por 5, isto é, somamos 33 reais 5 vezes, obtendo:
<center>5 x 33 = 5 x 30 + 5 x 3 = 150 + 15 = 165 reais.</center>

Outro modo de proceder com as contas é, somar 5 vezes o custo da passagem de ida e somar esse resultado com 5 vezes o custo da passagem de volta, ou seja,
<center>5 x 15 + 5 x 18 = 5 x 10 + 5 x 5 + 5 x 10 + 5 x 8 = 50 + 25 + 50 + 40 = 75 + 90 = 165 reais.</center>

De uma forma ou de outra, obtemos o mesmo resultado: aqui, usamos a **propriedade distributiva** da multiplicação com respeito à adição.
**FIM RETRÁTIL**

**INÍCIO RETRÁTIL**
> **Rubricas relativas à tarefa 5:**

| Objetivos da tarefa/Nível de realização das etapas | Objetivo não alcançado/etapa não realizada | Objetivo parcialmente alcançado/etapa parcialmente realizada | Objetivo plenamente alcançado/etapa plenamente realizada |
|--|--|--|--|
|***Processos básicos:* modelar os problemas em termos de adições e multiplicações**  |<center>O aluno, mesmo compreendendo o enunciado e comandos, não modela os problemas em termos de operações aritméticas  |<center>O aluno formula modelos em termos de adições e multiplicações, com alguns erros conceituais como não perceber de que modos pode usar a multiplicação  |<center>O aluno formula modelos em termos de adições e multiplicações, percebendo, claramente, onde usar adições e/ou multiplicações  |
|***Processos intermediários:* efetuar as multiplicações, compreendendo que podem ser pensadas como adições iteradas de uma mesma parcela**  |<center>O aluno tem dificuldades em efetuar a multiplicação, recorrendo a adições iteradas, com algumas falhas de cálculo  |<center>O aluno efetua a multiplicação com destreza, mas não revela entendimento do significado das operações em termos de adições iteradas, por exemplo  |<center>O aluno efetua corretamente as multiplicações, interpretando-as como adições iteradas  |
|***Processos intermediários:* reconhecer o uso de propriedades operatórias da multiplicação, como associatividade e distributividade (com relação à adição)**  |<center>O aluno realiza os cálculos sem que revele entendimento de que as propriedades operatórias são usadas para justificar (e, por vezes, simplificar) essas contas  |<center>O aluno reconhece as propriedades operatórias mas não as associa à justificativa dos algoritmos de adição e multiplicação que utiliza  |<center>O aluno reconhece as propriedades operatórias e justifica os algoritmos de adição e multiplicação que utiliza a partir dessas propriedades  |
|***Processos finalísticos:* efetuar as multiplicações, usando diferentes algoritmos**  |<center>O aluno se atém a um único modo, quando muito, de efetuar as multiplicações  |<center>O aluno utiliza variantes dos algoritmos de adição e multiplicação, mas tem dificuldade em justificá-los a partir das propriedades operatórias  |<center>O aluno utiliza variantes dos algoritmos de adição e multiplicação, as justificando a partir das propriedades operatórias  |

**FIM RETRÁTIL**


### Tarefa  6

Vimos que Márcia mora em Planaltina e trabalha em Brasília e, por isso, tem de percorrer 42 quilômetros que separam uma cidade da outra, duas vezes por dia, de segunda a sexta-feira. Para tanto, calculamos que ela gasta R$165,00 por semana em passagens de ônibus.

**1.** Sendo assim, quanto Márcia gasta por ano?
**2.** Sabendo que um litro de gasolina custa R$6,00 e que seu carro tem rendimento de 7 quilômetros por litro, compensaria Márcia ir ao trabalho de carro diariamente, considerando apenas as despesas com passagens ou gasolina?
**3.** Márcia financiou seu carro em 36 parcelas mensais de R$2.000,00, após pagar uma entrada de R$18.000,00. Qual foi o preço total deste carro?
**4.** Caso resolvesse dividir o preço total do carro em 24 parcelas mensais iguais, sem entrada, qual seria o valor de cada parcela?

**INÍCIO RETRÁTIL**
> **Solução esperada da tarefa 6:**

**1)** O gasto anual é dado pelo produto

52 x 165 = 50 x 165 + 2 x 165
= 50 x 160 + 50 x 5 + 2 x 160 + 2 x 5
= 5 x 16 x 100 + 250 + 320 + 10
= 10 x 8 x 100 + 250 + 320 + 10
= 8000 + 580
= 8580 reais.

**2)** Como o percurso total diário é de 42+42=84 quilômetros e o carro consome, em média, 1 litro para cada 7 quilômetros percorridos, deve consumir 84 : 7 = 12 litros de gasolina. Agora, como 1 litro de gasolina custa R$6,00, o custo dos 12 litros é igual a 12 x 6 = 72 reais.

A conclusão é que, claramente, não compensa, para Márcia, utilizar o carro para ir e voltar de casa para o trabalho, visto que gasta apenas R$33,00 de passagens de ônibus por dia, poupando, em relação ao que gastaria com gasolina, um total de
<center>72 - 33 = 72 - 32 - 1 = 40 -1 = 39 reais,</center>

o equivalente a um pouco mais do as passagens de um dia.

Para que o uso do carro compensasse, mantido esse mesmo consumo de 1 litro de gasolina para cada 7 quilômetros, o custo do litro de gasolina deveria ser
<center>33 : 12 = 24 : 12 + 9 : 12 = 2 reais e 3 quartos de real,</center>

ou seja, 2 reais e 75 centavos.

**3)** As 36 parcelas mensais, iguais a R$2 000,00 cada uma, totalizam
<center>36 x 2 000 = 72 000 reais.</center>

Somando esse valor das parcelas à entrada de R$18 000,00, temos o preço total do carro:
<center>72 000 + 18 000 = 90 000 reais.</center>

**4)** Caso esse valor total fosse dividido em 24 vezes, teríamos parcelas mensais iguais, cada uma, a
<center>90 000 : 24 = 45 000 : 12 = 15 000 : 4 = 7 500 : 2 = 3 750 reais.</center>
**FIM RETRÁTIL**

