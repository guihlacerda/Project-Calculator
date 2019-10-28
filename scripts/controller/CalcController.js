class CalcController {
    
    constructor(){
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    };

    initialize(){
        // Chamando nosso método
        this.setDisplayDateTime();

        // SetInterval - Função executada em um intervalo de tempo. O tempo é marcado em milisegundos.
        // Arrow Function - Recurso para criação de funções.
        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
    };

    // Função que lê os eventos passados como parãmetros, quebrando nos espaços para adicionar todos os eventos passados.
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    };

    clearAll(){
        this._operation = [];
    };

    clearEntry(){
        this._operation.pop();
    };

    getLastOperation(){
        return this._operation[this._operation.length-1];
    };

    addOperation(value){
        this._operation.push(value);
        console.log(this._operation);
    };

    setError(){
        this.displayCalc = 'Error';
    };

    execBtn(value){
        
        switch (value) {
            
            case 'ac':
                this.clearAll();
                break;
            
            case 'ce':
                this.clearEntry();
                break;
            
            case 'soma':
                
                break;
            
            case 'subtracao':
                
                break;
        
            case 'divisao':
                
                break;
    
            case 'multiplicacao':
                
                break;

            case 'porcento':
                
                break;
            
            case 'igual':
                
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        };
    };

    // Função que lê os botões da calculadora e adiciona os eventos de click.
    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        
        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '');
                console.log(textBtn);
                this.execBtn();
            }); 

            // Método que altera o cursor do mouse para pointer (mãozinha clicável).
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            });
        });
    };

    // Método que seta a data e hora da Calculadora
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    };

    // GETS para pegar os valores da tela
    // SETS para alterar os valores da tela

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    };

    set displayCalc(value){
        return this._displayCalcEl.innerHTML = value;
    };

    get displayDate(){
        return this._dateEl.innerHTML;
    };

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    };

    get displayTime(){
        return this._timeEl.innerHTML;
    };

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    };

    get currentDate(){
        return new Date();
    };

    set currentDate(value){
        return this._currentDate = value;
    };
};