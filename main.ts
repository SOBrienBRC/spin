sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(10, 150), randint(10, 150))
})
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . . . . . . 
    . . . 4 4 . . . . . . . 4 . . . 
    . . . . 4 . . . . . . . 4 . . . 
    . . . . . 4 . . . . . 4 . . . . 
    . . . . . . 4 . . . 4 . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . 4 . . . 4 . . . . . . 
    . . . . 4 . . . . . 4 4 . . . . 
    . . 4 4 . . . . . . . . 4 4 . . 
    . 4 . . . . . . . . . . . 4 . . 
    4 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 . 3 . 3 3 . . . . . 
    . . . 3 3 . . 3 . . 3 3 . . . . 
    . . 3 3 . . . 3 . . . 3 3 . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(randint(10, 150), randint(10, 150))
mySprite.setPosition(randint(10, 150), randint(10, 150))
controller.moveSprite(mySprite)
game.onUpdateInterval(1000, function () {
    mySprite2.setPosition(randint(20, 140), randint(20, 140))
})
