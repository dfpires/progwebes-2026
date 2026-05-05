//<div class="form-group">
//    <label>Resistência (0-100):</label>
//    <input type="number" id="resistencia">
//</div>
//<div class="form-group">
//    <label>Precisão (%):</label>
//    <input type="number" id="precisao">
//</div>
//<div class="form-group">
//    <label>Peso (g):</label>
//    <input type="number" id="peso">
//</div>
//<button onclick="inspecionar()">Inspecionar Peça</button>
//<div id="resultadoFim" class="resultado-box">
//Resultado...
//</div>



function inspecionar() {
    // 1. Captura dos valores das caixas de entrada
    // Usamos Number() para garantir que os valores sejam tratados como números
    let res = Number(document.getElementById('resistencia').value);
    let pre = Number(document.getElementById('precisao').value);
    let pes = Number(document.getElementById('peso').value);
    
    // Referência para o local onde exibiremos o resultado
    let display = document.getElementById('resultadoFim');

    // --- REGRAS DE NEGÓCIO ---

    // Primeiro Nível: Teste de Resistência Crítica
    if (res >= 0 && res < 50) {
        display.innerText = "STATUS: DESCARTE (Motivo: Baixa Resistência)";
    } 
    else { // res > 50
        // Segundo Nível: Aninhado (Só entra aqui se Resistência >= 50)
        
        // Regra para APROVADA: Precisão > 95 E Peso entre 100 e 110 (inclusive)
        if (pre > 95 && (pes >= 100 && pes <= 110)) {
            display.innerText = "STATUS: APROVADA (Excelente Qualidade)";
          
        } 
        // Regra para RECUPERÁVEL: Precisão > 80 OU Resistência > 90
        else if (pre > 80 || res > 90) {
            display.innerText = "STATUS: RECUPERÁVEL (Enviar para Ajuste)";
           
        } 
        // Caso não atenda nenhum dos critérios acima
        else {
            display.innerText = "STATUS: DESCARTE (Fora dos padrões técnicos)";
         
        }
    }
}