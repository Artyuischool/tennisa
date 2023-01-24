function draw_player (x: number, y: number) {
    led.plot(x, y)
    if (!(x == last_pos_x && y == last_pos_y)) {
        led.unplot(last_pos_x, last_pos_y)
        last_pos_x = x
        last_pos_y = y
    }
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        if (!(x == 0 || x < 0)) {
            x += -1
        }
    }
})
function apply_force (force: number, x: number, y: number) {
    if (force == 0) {
        baly += -1
    }
    if (force == 1) {
        if (!(balx == 0)) {
            baly += -1
            balx += -1
        } else {
            force = 2
        }
    }
    if (force == 2) {
        if (!(balx == 4)) {
            baly += -1
            balx += 1
        } else {
            force = 1
        }
    }
}
function draw () {
    draw_net()
    draw_player(x, y)
    draw_bal(balx, baly)
}
input.onButtonPressed(Button.AB, function () {
    punch()
})
function draw_net () {
    led.plot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(4, 2)
    log = "drawn net"
}
input.onButtonPressed(Button.B, function () {
    if (!(x == 4 || x > 4)) {
        x += 1
    }
})
function draw_bal (x: number, y: number) {
    led.plot(x, y)
    if (!(x == last_pos_bal_x && y == last_pos_bal_y)) {
        led.unplot(last_pos_bal_x, last_pos_bal_y)
        last_pos_bal_x = x
        last_pos_bal_y = y
    }
    log = "drawn bal"
}
function punch () {
    led.plot(x, y - 1)
    basic.pause(150)
    led.unplot(x, y - 1)
    if (y - 1 == baly && x == balx) {
        force = 0
    }
    if (y - 1 == baly && x - 1 == balx) {
        force = 1
    }
    if (y - 1 == baly && x + 1 == balx) {
        force = 2
    }
    log = "punched"
}
let log = ""
let force = 0
let last_pos_bal_y = 0
let last_pos_bal_x = 0
let baly = 0
let balx = 0
let y = 0
let x = 0
let last_pos_y = 0
let last_pos_x = 0
last_pos_x = 2
last_pos_y = 4
x = 2
y = 4
balx = 2
baly = 3
last_pos_bal_x = 2
last_pos_bal_y = 3
force = 1000
basic.forever(function () {
    draw()
})
basic.forever(function () {
    if (force == 0) {
        apply_force(0, 1, 1)
        log = "applied force 0"
    }
    if (force == 1) {
        apply_force(1, 1, 1)
        log = "applied force 1"
    }
    if (force == 2) {
        apply_force(2, 1, 1)
        log = "applied force 2"
    }
    basic.pause(100)
})
