basic.show_number(3)
basic.show_number(2)
basic.show_number(1)
basic.show_leds("""
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    """)
basic.pause(500)
x = randint(0, 2)
speed = 600
sprite = game.create_sprite(2, 4)
obstacle_1 = game.create_sprite(x, 0)
obstacle_2 = game.create_sprite(x + 1, 0)
obstacle_3 = game.create_sprite(x + 2, 0)
basic.pause(speed)

def on_forever():
    if input.acceleration(Dimension.X) > 300:
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    if input.acceleration(Dimension.X) < -300:
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
basic.forever(on_forever)

def on_forever2():
    global x
    if sprite.is_touching(obstacle_1) or (sprite.is_touching(obstacle_2) or sprite.is_touching(obstacle_3)):
        game.game_over()
    else:
        obstacle_1.change(LedSpriteProperty.Y, 1)
        obstacle_2.change(LedSpriteProperty.Y, 1)
        obstacle_3.change(LedSpriteProperty.Y, 1)
        if obstacle_1.get(LedSpriteProperty.Y) == 4:
            x = randint(0, 2)
            obstacle_1.set(LedSpriteProperty.X, 0)
            obstacle_2.set(LedSpriteProperty.X, x + 1)
            obstacle_3.set(LedSpriteProperty.X, x + 2)
            obstacle_1.set(LedSpriteProperty.Y, 0)
            obstacle_2.set(LedSpriteProperty.Y, 0)
            obstacle_3.set(LedSpriteProperty.Y, 0)
        basic.pause(speed)
basic.forever(on_forever2)
