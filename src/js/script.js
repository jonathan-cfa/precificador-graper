function globalCode() {
    const btnGenerate = document.querySelector('#btn-generate')
    btnGenerate.addEventListener('click', function (e) {

        const field = {
            //------------------------------------------Camps the HTML
            //Content
            fQnt: document.querySelector('#iquantity'),
            fHour: document.querySelector('#ihour'),
            fMinutes: document.querySelector('#iminutes'),
            fWeight: document.querySelector('#iweight'),
            //Cost
            fCoil: document.querySelector('#icoil'),
            fCostKwh: document.querySelector('#icost-kwh'),
            //Amortisation
            fPrintValue: document.querySelector('#iprint-value'),
            fServiceLife: document.querySelector('#iservice-life'),
            //Failure
            fFailure: document.querySelector('#ifailure-percentage'),
            //Additional Cost
            fCostAdd: document.querySelector('#ivalue-acessory'),
            //--Price Configuration
            fMarkup: document.querySelector('#input-markup'),
            fMarge: document.querySelector('#input-marge'),
            fManualValue: document.querySelector('#input-manual'),
            //==========Areas=============
            resultArea: document.querySelector('#result')
        };
        const valueField = {
            qntPrint: Number(field.fQnt.value),
            hour: Number(field.fHour.value),
            minute: Number(field.fHourvalue),
            weight: Number(field.fWeight.value),
            coil: Number(field.fCoil.value),
            kwh: Number(field.fCostKwh.value),
            valuePrint: Number(field.fPrintValue.value),
            serviceLife: Number(field.fServiceLife.value),
            failure: Number(field.fFailure.value),
            addCost: Number(field.fCostAdd),
            markup: Number(field.fMarkup.value),
            marge: Number(field.fMarge.value),
            manual: Number(field.fManualValue.value),
        };

    })
}
globalCode();