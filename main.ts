joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    basic.showString("Boost")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    basic.showString("Accelere")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.showString("frein")
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        joystickbit.Vibration_Motor(500)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        joystickbit.Vibration_Motor(500)
    }
})
