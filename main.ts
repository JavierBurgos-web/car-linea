basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        basic.showIcon(IconNames.Surprised)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
