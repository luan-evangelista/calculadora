class CalcController {
    
    constructor(){

        this._displayCalc = "0";
        this._currentDate;

    }

    get displayCalc(){

        return this._displayCalc;
        
    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }

    get currentDate (){

        return this._currentDate;;

    }

    set currentDate(data){
        this._currentDate = data;
    }

}