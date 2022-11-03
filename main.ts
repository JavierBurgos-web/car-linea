pins.analogWritePin(AnalogPin.P0, 0)
pins.analogWritePin(AnalogPin.P2, 0)
basic.showLeds(`
    # . # . #
    # . # . #
    # . # # #
    . . . . #
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . .
    . # . # .
    . . . . .
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P0, 512)
        pins.analogWritePin(AnalogPin.P2, 512)
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.analogWritePin(AnalogPin.P0, 512)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P2, 512)
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(100)
    }
})
