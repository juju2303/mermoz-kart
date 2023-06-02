joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("Boost")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("reculer")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Obstacle") {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        joystickbit.Vibration_Motor(500)
        basic.clearScreen()
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("Accelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("Frein")
})
joystickbit.initJoystickBit()
radio.setGroup(33)
radio.setTransmitPower(7)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        radio.sendString("Droite")
        radio.sendString("CD")
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendString("Gauche")
        radio.sendString("CG")
    }
})
