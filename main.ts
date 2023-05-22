input.onGesture(Gesture.ThreeG, function () {
	
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500) {
        joystickbit.Vibration_Motor(500)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 700) {
        joystickbit.Vibration_Motor(500)
    }
})
