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
    cUsePercentage: document.querySelector('iuse-percentage'),
    //Amortization
    cPrinterValue: document.querySelector('#iprinter-value'),
    cServiceLife: document.querySelector('#iservice-life'),
    //Acessory and Packaging
    cDescription: document.querySelector('#idescription'),
    cValueAcessory: document.querySelector('#ivalue-acessory'),
    //Buttons
    bGenerate: document.querySelector('#btn-generate'),
    //Areas
    resultArea: document.querySelector('#result')
}

const cunsumo = {
    a1Mini: 95,
}

function pricingTool() {
    const coil = Number(campo.cCoil.value); //campo valor da bobina
    const weight = Number(campo.cWeight.value);
    const priceFilament = coil / 1000;
    const pricePiece = weight * priceFilament
    const result = campo.resultArea;
    const hour = campo.cHour.value
    const minutes = campo.cMinutes.value
    const timer = hour + minutes

    result.innerHTML = ''
    result.innerHTML += `
    Custo por Kg do filamento: R$${moeda(priceFilament)} <br>
    Peça pesa ${weight}g, total por peça é de R$${moeda(pricePiece)} <br>
    Custo de Energia: R$${cunsumo.a1Mini}
    `;


} campo.bGenerate.addEventListener('click', pricingTool);

function moeda(valor) {
    return valor.toFixed(2).replace('.', ',');
}