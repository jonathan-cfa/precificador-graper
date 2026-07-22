const campo = {
    //Models
    cQuantity: document.querySelector('#iquantity'),
    cHour: document.querySelector('#ihour'),
    cMinutes: document.querySelector('#iminutes'),
    cWeight: document.querySelector('#iweight'),
    //Costs
    cCoil: document.querySelector('#icoil'),
    cCostKwh: document.querySelector('#icost-kwh'),
    // Fixed Cost
    cCostMonth: document.querySelector('#icost-month'),
    cUsePercentage: document.querySelector('#iuse-percentage'),
    //Amortization
    cPrinterValue: document.querySelector('#iprinter-value'),
    cServiceLife: document.querySelector('#iservice-life'),
    //Failure rate
    cFailure: document.querySelector('#ifailure-percentage'),
    //Acessory and Packaging
    cDescription: document.querySelector('#idescription'),
    cValueAcessory: document.querySelector('#ivalue-acessory'),
    //Buttons
    bGenerate: document.querySelector('#btn-generate'),
    //Areas
    resultArea: document.querySelector('#result')
}

const consumption = {
    a1Mini: 95 / 1000,
}

function pricingTool() {
    //const fields
    const coil = Number(campo.cCoil.value); //campo valor da bobina
    const weight = Number(campo.cWeight.value);
    const result = campo.resultArea;
    const hour = Number(campo.cHour.value);
    const minutes = Number(campo.cMinutes.value);
    const costKwh = Number(campo.cCostKwh.value);
    const qntWeight = Number(campo.cQuantity.value);
    const printerValue = Number(campo.cPrinterValue.value);
    const serviceLife = Number(campo.cServiceLife.value);
    const acessoryCost = Number(campo.cValueAcessory.value);
    const percentageFaile = Number(campo.cFailure.value);
    //calculation
    const filamentCostPerGram = coil / 1000; //Custo da Bobina de filamento
    const totalWeight = weight * qntWeight; // peso total (peso * quantidade)
    const totalFilamentCost= totalWeight * filamentCostPerGram; //peso total * custo por grama
    const timer = hour + (minutes / 60); //tempo em decimais 
    const energyCost = (consumption.a1Mini * timer) * costKwh; //custo de energia
    const amortization = (printerValue / serviceLife) * timer;
    //total cost
    const totalCost =  totalFilamentCost+ energyCost +  amortization + acessoryCost;
    const costWithFailure  = totalCost * (1 + (percentageFaile / 100));
    //information display
    result.innerHTML = ''
    result.innerHTML += `
    Peso total ${totalWeight}
    tempo de impressão ${hour}h ${minutes}min.<br>
    Custo Filamento por Kilo: R$${moeda(filamentCostPerGram)}
    Custo de filamento por grama: R$${moeda(totalFilamentCost)} <br>
    Custo de Energia: R$${moeda(energyCost)} <br>
    Custo Amortização: R$${moeda(amortization)} <br>
    Custo Acessórios/Embalagens: R$${moeda(acessoryCost)} <br>
    sub-total de custos: R${moeda(totalCost)} <br>
    <hr>
    <strong>Total de Custo: R$${moeda(costWithFailure )}</strong>
    `;


} campo.bGenerate.addEventListener('click', pricingTool);

function moeda(valor) {
    return valor.toFixed(2).replace('.', ',');
}