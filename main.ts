controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(17, 5), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock2, function (sprite, location) {
    game.over(false)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100010100000000000000010101010100000000000000000000000000020000000000000000000000000000000000000001000000000000000100000000000000000000000100000000010101000000000000000000000001010101030303030303030101010103030304030301`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 . 2 2 . . . . . . 
    . 2 2 2 2 2 . . . . . . . . . 2 . . . . 
    . . . . . . . . . . . . . . . 2 . . . 2 
    . . . . . . . 2 . . . . . . 2 . . . . 2 
    . . . . 2 2 2 . . . . . . . 2 2 . . 2 2 
    2 2 . . . . . . . 2 2 2 2 . . . . . . 2 
    `, [myTiles.transparency16,sprites.builtin.oceanDepths0,myTiles.tile1,sprites.castle.rock2,sprites.castle.rock0], TileScale.Sixteen))
