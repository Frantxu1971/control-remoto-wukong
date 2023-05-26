radio.onReceivedNumber(function (receivedNumber) {
    control2 = receivedNumber
    basic.pause(200)
    control2 = 0
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        velocidad += 10
        if (velocidad >= 100) {
            velocidad = 100
        }
    } else {
        velocidad += -10
        if (velocidad <= 0) {
            velocidad = 0
        }
    }
})
let control2 = 0
let velocidad = 0
radio.setGroup(10)
velocidad = 0
control2 = 0
basic.forever(function () {
    if (control2 == 1) {
        wuKong.setAllMotor(velocidad, 0)
    } else if (control2 == 2) {
        wuKong.setAllMotor(0, velocidad)
    } else {
        wuKong.setAllMotor(velocidad, velocidad)
    }
})
