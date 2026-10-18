function globalCode() {
    const btnGenerate = document.querySelector('#btn-generate')
    btnGenerate.addEventListener('click', function (e) {

        const field = {// All fields 
            //------------------------------------------Field the HTML
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
            resultArea: document.querySelector('#result'),
            //Radios
            radios: document.querySelector('input[name="config"]:checked'),
        };
        const valueField = { // All values the Fields
            qntPrint: Number(field.fQnt.value),
            hour: Number(field.fHour.value),
            minute: Number(field.fMinutes.value),
            weight: Number(field.fWeight.value),
            coil: Number(field.fCoil.value),
            kwh: Number(field.fCostKwh.value),
            valuePrint: Number(field.fPrintValue.value),
            serviceLife: Number(field.fServiceLife.value),
            failure: Number(field.fFailure.value),
            addCost: Number(field.fCostAdd.value),
            markup: Number(field.fMarkup.value),
            marge: Number(field.fMarge.value),
            manual: Number(field.fManualValue.value),
        };

        const consumption = { //3D printer power consumption
            a1Mini: 95 / 1000,
        };

        const formatter = new Intl.NumberFormat('pt-BR', { //Formats values for the Brazilian real
            style: 'currency',
            currency: 'BRL'
        });

        function filamentPerGram() { // Cost of filament per gram
            return valueField.coil / 1000;
        }

        function totalWeight() { //Weight total
            return valueField.weight * valueField.qntPrint;
        }

        function totalFilamentCost() { //cost filament total
            return totalWeight() * filamentPerGram();
        }

        function decimalTime() { //Decimal Time
            return valueField.hour + (valueField.minute / 60);
        }

        function costEnergy() { //Energy Costs
            return (consumption.a1Mini * decimalTime()) * valueField.kwh;
        }

        function amortisation() { //Printer depreciation
            return (valueField.valuePrint / valueField.serviceLife) * decimalTime();
        }

        function totalCost() { // Total cost
            return totalFilamentCost() + costEnergy() + amortisation() + valueField.addCost;
        }

        function totalWithFailure() { //Total Cost of Failure
            return totalCost() * (1 + (valueField.failure / 100));
        }

        function textResult() { // Result printed in result area

            const resultDiv = document.createElement('div');

            field.resultArea.innerHTML = '';
            resultDiv.innerHTML =
                `Quantidade de Impressões: ${valueField.qntPrint} <br>
            Peso total: ${totalWeight().toFixed(2)}g <br>
            Custo por filamento: ${convertation(filamentPerGram())} <br>
            Custo de Energia: ${convertation(costEnergy())} <br>
            Amortização: ${convertation(amortisation())} <br>
            Custo sem percentual de falhas: ${convertation(totalCost())} <br>
            <strong>Total de Custos:</strong> ${convertation(totalWithFailure())}
            `;

            field.resultArea.appendChild(resultDiv);

        }

        function convertation(valor) { return formatter.format(valor); } //Formatting function associated with a variable "formatter"

        function amountDue() {
            if (field.radios.value === 'markup') {
                return totalWithFailure() * (1 + valueField.markup / 100);
            }
        }

        function textAmountDue() {
            const divAmount = document.createElement('div');

            const divider = document.createElement('hr')
            const strong = document.createElement('strong');
            strong.textContent = 'Valor a cobrar:';

            divAmount.append(divider,strong, convertation(amountDue()));

            field.resultArea.appendChild(divAmount);
        }

        textResult();
        textAmountDue();
    });
}
globalCode();