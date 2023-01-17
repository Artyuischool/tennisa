def draw_player(x: number, y: number):
    global last_pos_x, last_pos_y
    led.plot(x, y)
    if not (x == last_pos_x and y == last_pos_y):
        led.unplot(last_pos_x, last_pos_y)
        last_pos_x = x
        last_pos_y = y

def on_button_pressed_a():
    global x2
    if True:
        if not (x2 == 0 or x2 < 0):
            x2 += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def draw():
    draw_net()
    draw_player(x2, y2)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def draw_net():
    led.plot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(4, 2)

def on_button_pressed_b():
    global x2
    if not (x2 == 4 or x2 > 4):
        x2 += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

y2 = 0
x2 = 0
last_pos_y = 0
last_pos_x = 0
last_pos_x = 2
last_pos_y = 4
x2 = 2
y2 = 4

def on_forever():
    draw()
basic.forever(on_forever)
