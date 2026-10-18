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
            fPrintValue: document.querySelector('#iprinter-value'),
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

        const consumption = {
            a1Mini: 95 / 1000,
        };

        function filamentPerGram() { return valueField.coil / 1000 }; // Cost of filament per gram
        function totalWeight() { return valueField.weight * valueField.qntPrint };//Weight total
        function totalFilamentCost() { return totalWeight() * filamentPerGram() }; //cost filament total
        function decimalTime() { return valueField.hour + (valueField.minute / 60) };//Decimal Time
        function costEnergy() { return (consumption.a1Mini * decimalTime()) * valueField.kwh };//Energy Costs
        function amortisation() { return (valueField.valuePrint / valueField.serviceLife) * decimalTime() };
        function totalCost() { return totalFilamentCost() + costEnergy() + amortisation() + valueField.addCost };
        function totalWithFailure() { return totalCost() * (1 + (valueField.failure / 100)) };
    })
}
globalCode();