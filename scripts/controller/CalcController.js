class CalcController {
    
    constructor(){
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    };

    initialize(){
        this._dateEl.innerHTML = 'fodase';
        this._timeEl.innerHTML = 'fodase';

    };

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    };

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    };

    get currentDate(){
        return this._currentDate;
    };

    set currentDate(value){
        this._currentDate = value;
    };
};