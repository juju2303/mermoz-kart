joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("Boost")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("CG")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("reculer")
})
radio.onReceivedString(function (receivedString) {
    joystickbit.Vibration_Motor(500)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("CD")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("Accelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("Frein")
})
radio.setGroup(33)
radio.setTransmitPower(7)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        radio.sendString("Droite")
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendString("Gauche")
    }
})
