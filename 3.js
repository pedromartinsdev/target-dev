/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/

const faturamentoMensal = require('./faturamento.json');

const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor.toFixed(2));
console.log("Maior valor de faturamento:", maiorValor.toFixed(2));
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
