Lectura_de_Temperatura = 0

def on_forever():
    global Lectura_de_Temperatura
    basic.clear_screen()
    Lectura_de_Temperatura = pins.analog_read_pin(AnalogPin.P2)
    basic.show_string("" + str(Lectura_de_Temperatura))
basic.forever(on_forever)
