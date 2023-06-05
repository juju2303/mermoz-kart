joystickbit.initJoystickBit()
radio.setGroup(33)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        radio.sendString("Droite")
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        radio.sendString("Gauche")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendString("Accelere")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendString("Boost")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.sendString("reculer")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendString("Frein")
    } else if (false) {
    	
    } else {
        radio.sendString("NUL")
    }
    joystickbit.initJoystickBit()
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
