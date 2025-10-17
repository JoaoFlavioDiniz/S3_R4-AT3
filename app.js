const express = require('express');
const app = express();
const PORT = 8081; // Ou a porta de sua preferência

// Rota principal para a calculadora
app.get('/calculadora/:tipo/', (req, res) => {
    // 1. Obter parâmetros da query string
    const tipoOperacao = req.params.tipo.toLowerCase();
    const operacao = req.query.operacao;
    const numUm = parseFloat(req.query.numUm);
    const numDois = parseFloat(req.query.numDois);
    let resultado;

    // 2. Validação básica dos parâmetros numéricos
    if (isNaN(numUm) || isNaN(numDois)) {
        return res.status(400).send({
            erro: "Parâmetros 'numUm' e 'numDois' devem ser números válidos."
        });
    }

    // 3. Processamento da operação
    switch (operacao) {
        case 'soma':
            resultado = numUm + numDois;
            break;
        case 'subtracao':
            resultado = numUm - numDois;
            break;
        case 'multiplicacao':
            resultado = numUm * numDois;
            break;
        case 'divisao':
            // Tratamento especial para divisão por zero
            if (numDois === 0) {
                return res.status(400).send({
                    erro: "Impossível dividir por zero."
                });
            }
            resultado = numUm / numDois;
            break;
        default:
            // Retorno para operação inválida
            return res.status(400).send({
                erro: "Operação inválida. Use: soma, subtracao, multiplicacao ou divisao."
            });
    }

    // 4. Retorno do resultado (conforme o exemplo solicitado)
    res.send(`Resultado: ${resultado}`);
    // Ou em formato JSON para uma API moderna:
    // res.json({ resultado: resultado });

});

   
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Calculadora rodando em http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/calculadora/tipo?operacao=soma&numUm=4&numDois=6`);
});

