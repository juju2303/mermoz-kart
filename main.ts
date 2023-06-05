joystickbit.initJoystickBit()
radio.setGroup(33)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("CG_a")
    } else {
        radio.sendString("CG_b")
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("CD_a")
    } else {
        radio.sendString("CD_b")
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        radio.sendString("Droite")
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendString("Gauche")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendString("Accelere")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendString("reculer")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendString("Boost")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendString("Frein")
    } else {
        radio.sendString("NUL")
    }
    joystickbit.initJoystickBit()
})
