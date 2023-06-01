joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("Boost")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("Decelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("Accelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("Frein")
})
radio.setGroup(11)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        joystickbit.Vibration_Motor(500)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        joystickbit.Vibration_Motor(500)
    }
})
