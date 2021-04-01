basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(500)
let x = randint(0, 2)
let speed = 600
let sprite = game.createSprite(2, 4)
let obstacle_1 = game.createSprite(x, 0)
let obstacle_2 = game.createSprite(x + 1, 0)
let obstacle_3 = game.createSprite(x + 2, 0)
basic.pause(speed)
basic.forever(function on_forever() {
    if (input.acceleration(Dimension.X) > 300) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    
    if (input.acceleration(Dimension.X) < -300) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    
})
basic.forever(function on_forever2() {
    
    if (sprite.isTouching(obstacle_1) || (sprite.isTouching(obstacle_2) || sprite.isTouching(obstacle_3))) {
        game.gameOver()
    } else {
        obstacle_1.change(LedSpriteProperty.Y, 1)
        obstacle_2.change(LedSpriteProperty.Y, 1)
        obstacle_3.change(LedSpriteProperty.Y, 1)
        if (obstacle_1.get(LedSpriteProperty.Y) == 4) {
            x = randint(0, 2)
            obstacle_1.set(LedSpriteProperty.X, 0)
            obstacle_2.set(LedSpriteProperty.X, x + 1)
            obstacle_3.set(LedSpriteProperty.X, x + 2)
            obstacle_1.set(LedSpriteProperty.Y, 0)
            obstacle_2.set(LedSpriteProperty.Y, 0)
            obstacle_3.set(LedSpriteProperty.Y, 0)
        }
        
        basic.pause(speed)
    }
    
})
