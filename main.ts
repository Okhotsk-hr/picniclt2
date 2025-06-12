input.onGesture(Gesture.Shake, function () {
    shake2 += 1
})
function shake () {
    basic.showNumber(shake2)
}
let shake2 = 0
shake2 = 0
basic.forever(function () {
    shake()
})
