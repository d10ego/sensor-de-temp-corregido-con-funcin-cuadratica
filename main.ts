let a = 0
let b = 0
let c = 0
let d = 0
let Lectura_de_Temperatura = 0
let Conversión = 0
basic.forever(function () {
    a = 31.56
    b = -623.66
    c = 5.6
    d = 159.45
    basic.clearScreen()
    Lectura_de_Temperatura = pins.analogReadPin(AnalogPin.P0)
    Conversión = Lectura_de_Temperatura - d
    Conversión = Conversión / c
    Conversión = Conversión ** 2
    Conversión = Conversión - b
    Conversión = Conversión / a
    basic.pause(1000)
    basic.showString("" + Math.round(Conversión) + "GRADOS")
    basic.pause(1000)
})
