
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LINE {
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4
}

enum BTN {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="A+B"
    AB
}


//% color="#1ca2e9" iconWidth=50 iconHeight=40
namespace toolbox {
    //% block="int [FLOAT]" blockType="reporter"
    //% FLOAT.shadow="number"  FLOAT.defl="123.321"
    export function changeInt(parameter: any, block: any) {
        let flt=parameter.FLOAT.code;
        Generator.addCode([`int(${flt})`,Generator.ORDER_UNARY_POSTFIX]);

    }


    //% block="---"
    export function noteSep1() {

    }

    //% block="read digital pin [PIN1]" blockType="boolean"
    //% PIN1.shadow="dropdownRound"  PIN1.options="PIN_DigitalRead"
    export function digitalRead(parameter: any, block: any) {
        let pin=parameter.PIN1.code;
        Generator.addCode([`digitalRead(${pin})`,Generator.ORDER_UNARY_POSTFIX]);

    }
       
    //% block="read analog pin [PIN2]" blockType="reporter"
    //% PIN2.shadow="dropdownRound"  PIN2.options="PIN_AnalogRead"
    export function analogRead(parameter: any, block: any) {
        let pin=parameter.PIN2.code;
        Generator.addCode([`analogRead(${pin})`,Generator.ORDER_UNARY_POSTFIX]);

    }

    //% block="pwm pin[PIN3] output [PWM]" blockType="command"
    //% PIN3.shadow="dropdownRound"  PIN3.options="PIN_AnalogWrite"
    //% PWM.shadow="number"  PWM.defl="0"
    export function analogWrite(parameter: any, block: any) {
        let pin=parameter.PIN3.code;
        let pwm=parameter.PWM.code;
        Generator.addCode(`analogWrite(${pin},${pwm});`);

    }

    //% block="digital pin [PIN4] output [VAL]" blockType="command"
    //% PIN4.shadow="dropdownRound"  PIN4.options="PIN_DigitalWrite"
    //% VAL.shadow="number"  VAL.defl="0"
    export function digitalWrite(parameter: any, block: any) {
        let pin=parameter.PIN4.code;
        let val=parameter.VAL.code;
        Generator.addCode(`digitalWrite(${pin},${val});`);

    }

    //% block="---"
    export function noteSep2() {

    }

}
