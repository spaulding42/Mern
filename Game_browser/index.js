const canvas = document.querySelector('canvas')

// c is the canvas context
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
console.log(c)


c.fillRect(0,0,canvas.width,canvas.height)

const image = new Image()
image.src = "./client/Assets/map1.png"

const playerImage = new Image()
playerImage.src = "./client/Assets/playerDown.png"



image.onload = () => {
    c.drawImage(image,-690,-720)
    c.drawImage(playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,

        canvas.width/2 - playerImage.width /4/2,
        canvas.height/2 -playerImage.height/2,
        playerImage.width/4,
        playerImage.height,
        )

}

