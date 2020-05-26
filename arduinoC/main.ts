
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
    //% FLOAT.shadow="number"  FLOAT.default="123.321"
    export function changeInt(parameter: any, block: any) {
        let flt=parameter.FLOAT.code;
        Generator.addCode([`int(${flt})`,Generator.ORDER_UNARY_POSTFIX]);

    }
                

}
