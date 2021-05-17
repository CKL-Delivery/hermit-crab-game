namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . . . . . . c c c c 6 3 c . . 
    . . . . . . c 6 3 3 3 3 6 c . . 
    . . c c . c 6 c c 3 3 3 3 3 c . 
    . b 7 7 c 6 c 7 7 c 3 3 3 3 3 c 
    . f f 7 c 6 c 7 f f 3 3 3 3 3 c 
    . f f 7 c 6 c 7 f f 6 3 3 3 c c 
    . b 7 7 3 c 3 7 7 c 6 6 6 6 c c 
    . . b 7 7 3 7 7 c 3 3 3 3 3 3 c 
    . c c 7 7 7 7 7 b c c 3 3 3 3 c 
    c 7 7 6 7 7 7 6 b 7 7 c 3 3 c . 
    b 7 6 b 6 6 6 6 b b 7 c b b . . 
    c 6 7 7 b 6 b 7 7 7 6 c 6 7 b . 
    c 7 7 7 c 6 c 7 7 7 c 6 c 7 c . 
    c 7 7 7 7 c 7 7 7 7 c 6 c 7 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c c . . . 
    . . . . . . c 5 5 5 5 5 c c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c b b b b 1 b b c c . . 
    . . . . c 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 b b c c 
    . . c c d 1 1 1 b 1 b 1 5 5 5 c 
    . . c c d 1 c 1 1 1 b 1 b b 5 c 
    . c c d d 1 1 1 1 1 b 1 f b 5 c 
    f d d d 1 1 1 1 1 b b b f . c c 
    f f f f f 1 1 1 b b 5 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    `, SpriteKind.NPC)
mySprite2.setPosition(36, 90)
