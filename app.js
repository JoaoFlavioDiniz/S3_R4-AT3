const express = require("express");
const app = express(); //constante de servidor
const PORT = 8081;

// hello/:nome rota para o req.param.nome
app.get("/adicao/:numUm/:numDois/", (req, res)=>{

    try {
        
        const numUm = req.params.numUm;  //consulta numUm
        const numDois = req.params.numDois;  //consulta numDois
        //tratar os dados de numUm
        
        if(numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(404).send(`Condição não valida`);
        }
        let resultadoSoma = parseFloat(numUm) + parseFloat(numDois);
    
        res.status(200).send(`O numero ${numUm}, adicionado ao numero ${numDois}, eh: ${resultadoSoma}`);//escreve 
    } catch (error) {
        //captura o erro
        //console.error("Erro ao exibir a soma:"+error);
        console.status(`Erro ao exibir a soma: ${error}`); //outra forma de fazder a linha acima com crase
        res.status(500).send(`Erro interno no servidor`);
    }
    
});


// multiplicacao/:nome rota para o req.param.nome
app.get("/multiplicacao/:numUm/:numDois/", (req, res)=>{

    try {
        
        const numUm = req.params.numUm;  //consulta numUm
        const numDois = req.params.numDois;  //consulta numDois
        //tratar os dados de numUm
        
        if(numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(404).send(`Condição não valida`);
        }
        let resultadoSoma = parseFloat(numUm) * parseFloat(numDois);
    
        res.status(200).send(`O numero ${numUm}, multiplicado pelo numero ${numDois}, eh: ${resultadoSoma}`);//escreve 
    } catch (error) {
        //captura o erro
        //console.error("Erro ao exibir a soma:"+error);
        console.status(`Erro ao exibir a soma: ${error}`); //outra forma de fazder a linha acima com crase
        res.status(500).send(`Erro interno no servidor`);
    }
    
});


// subtracao/:nome rota para o req.param.nome
app.get("/subtracao/:numUm/:numDois/", (req, res)=>{

    try {
        
        const numUm = req.params.numUm;  //consulta numUm
        const numDois = req.params.numDois;  //consulta numDois
        //tratar os dados de numUm
        
        if(numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(404).send(`Condição não valida`);
        }
        let resultadoSoma = parseFloat(numUm) - parseFloat(numDois);
    
        res.status(200).send(`O numero ${numUm}, subtraido do numero ${numDois}, eh: ${resultadoSoma}`);//escreve 
    } catch (error) {
        //captura o erro
        //console.error("Erro ao exibir a soma:"+error);
        console.status(`Erro ao exibir a soma: ${error}`); //outra forma de fazder a linha acima com crase
        res.status(500).send(`Erro interno no servidor`);
    }
    
});


// divisao/:nome rota para o req.param.nome
app.get("/divisao/:numUm/:numDois/", (req, res)=>{

    try {
        
        const numUm = req.params.numUm;  //consulta numUm
        const numDois = req.params.numDois;  //consulta numDois
        //tratar os dados de numUm
        
        if(numUm == undefined || numUm == "" || isNaN(numUm) || numDois == undefined || numDois == "" || isNaN(numDois)){
            return res.status(404).send(`Condição não valida`);
        }
        let resultadoSoma = parseFloat(numUm) / parseFloat(numDois);
    
        res.status(200).send(`O numero ${numUm}, dividido pelo numero ${numDois}, eh: ${resultadoSoma}`);//escreve 
    } catch (error) {
        //captura o erro
        //console.error("Erro ao exibir a soma:"+error);
        console.status(`Erro ao exibir a soma: ${error}`); //outra forma de fazder a linha acima com crase
        res.status(500).send(`Erro interno no servidor`);
    }
    
});

//sempre a ultima linha
app.listen(PORT, ()=>{
    console.log(`servidor rodando no http://localhost:${PORT}`);
});