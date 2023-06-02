joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.setGroup(204)
    radio.setTransmitPower(7)
    radio.sendString("Boost")
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(23)
    radio.setTransmitPower(7)
    radio.sendString("CG")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.setGroup(204)
    radio.setTransmitPower(7)
    radio.sendString("Decelere")
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(23)
    radio.setTransmitPower(7)
    radio.sendString("CD")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.setGroup(204)
    radio.setTransmitPower(7)
    radio.sendString("Accelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.setGroup(204)
    radio.setTransmitPower(7)
    radio.sendString("Frein")
})
joystickbit.initJoystickBit()
basic.forever(function () {
    radio.setGroup(204)
    radio.setTransmitPower(7)
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        radio.sendString("Droite")
    }
    radio.setGroup(204)
    radio.setTransmitPower(7)
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendString("Gauche")
    }
})
