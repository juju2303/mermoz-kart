joystickbit.init_joystick_bit()
radio.set_group(33)

def on_forever():
    if joystickbit.get_rocker_value(joystickbit.rockerType.X) < 500:
        radio.send_string("Droite")
    elif joystickbit.get_rocker_value(joystickbit.rockerType.X) > 700:
        radio.send_string("Gauche")
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P13):
        radio.send_string("Accelere")
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P14):
        radio.send_string("Boost")
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P15):
        radio.send_string("reculer")
    elif joystickbit.get_button(joystickbit.JoystickBitPin.P12):
        radio.send_string("Frein")
    elif False:
        pass
    else:
        radio.send_string("NUL")
    joystickbit.init_joystick_bit()
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)

def on_forever4():
    pass
basic.forever(on_forever4)
