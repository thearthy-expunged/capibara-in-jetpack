var capibara,preda,floresta,teste,maca1,maca2,maca3,maca4
var capibaraimg,predaimg,florestaimg,maca1img,maca2img,maca3img,maca4img,fomeimg
var maca_random,maca_random2,maca_random3
var altura = 0
var fome = 100
var macaa1 = false
var macaa2 = false
var macaa3 = false
var macaa4 = false
var predaa = false
var star = false
var vidag = false
var score = 0
var scoremult = 1
var vidas = 3
var macaaa1 
var macaaa2
var macaaa3
var macaaa4
var predaaa
function preload(){
    capibaraimg = loadImage("capibara.png")
    predaimg = loadImage("predaa.png")
    florestaimg = loadImage("floresta.png")
    maca1img = loadImage("maca(score).png")
    maca2img = loadImage("maca(boost).png")
    maca3img = loadImage("maca(viver+).png")
    maca4img = loadImage("maca(mario star).png")
    fomeimg = loadImage("fome icone.png")
}

function setup() {

    createCanvas(windowWidth,windowHeight)
    floresta = createSprite(width/2,height/20-height/6,width/2)
    floresta.addImage(florestaimg)
    floresta.scale = 5
    floresta.velocityX =-2
    capibara = createSprite(width/8,height/1.25,width/8,height/8)
    capibara.addImage(capibaraimg)
    capibara.scale = 0.5
    macaaa1 = new Group()
    macaaa2 = new Group()
    macaaa3 = new Group()
    macaaa4 = new Group()
    predaaa = new Group()

}

function draw() {
console.log(frameCount)
background(0,255,255)
drawSprites()
if (frameCount%50==0) {
     criarobjeto()
}
if (frameCount%10==0&&fome>0) {
    fome -=1
}
if (score%1000==0&&score!=0) {
    
    maca4 = createSprite(width,height/1.25)
    maca4.addImage(maca4img)
    maca4.lifetime = 250
    maca4.scale = 0.5
    maca4.velocityX = -50
    macaa4 = true
    macaaa4.add(maca4)
    maca4 = createSprite(width,height/2)
    maca4.addImage(maca4img)
    maca4.lifetime = 250
    maca4.scale = 0.5
    maca4.velocityX = -50
    macaa4 = true
    macaaa4.add(maca4)
    maca4 = createSprite(width,height/5)
    maca4.addImage(maca4img)
    maca4.lifetime = 250
    maca4.scale = 0.5
    maca4.velocityX = -50
    macaa4 = true
    macaaa4.add(maca4)
score +=100
}
if (score%100==0&&score!=0) {
    vidas +=1
    score +=10
}


if (score!=score%50==0&&vidag==true) {
    vidag == false
}
if(keyWentDown(UP_ARROW)&&altura<2){
altura += 1
}
if(keyWentDown(DOWN_ARROW)&&altura>0){
    altura -= 1
}
if(altura == 0){
    capibara.y = height/1.25
}else if (altura == 1) {
    capibara.y = height/2
} else {
    capibara.y = height/5
}
if(floresta.x <= -width/99+width/2.5){
    floresta.x = width/2
}

mostrarcoisas()
if(macaa1==true){
    capibara.overlap(macaaa1, function(capibara, collided){
     //remove a moeda
     collided.remove()
     //aumentar a pontuação
     score += 10
     
 })}
if(macaa2==true){
    capibara.overlap(macaaa2, function(capibara, collided){
        //remove a moeda
        collided.remove()
        //aumentar a pontuação
        setTimeout(()=>{
            scoremult = 1
        },60000)
    })  
      
    }   
if(macaa3==true){
   capibara.overlap(macaaa3, function(capibara, collided){
    //remove a moeda
    collided.remove()
    //aumentar a pontuação
    fome += 10
    
})
        }
if(macaa4==true){
    capibara.overlap(macaaa4, function(capibara, collided){
        
        collided.remove()
        star = true
         maca4.lifetime = 0
         setTimeout(()=>{
            star = false
        },10000)
        
    })   
    }
    if(star == false){
        if(predaa==true){
        capibara.overlap(predaaa, function(capibara, collided){
            //remove a moeda
            collided.remove()
            //aumentar a pontuação
            vidas -=1
                capibara.scale = 0.5
            preda.lifetime = 0
        })
                

            }
    }
   if(star == true){
    fome +=1
    capibara.scale = 2
}      
if(fome <= 0){
    gameover()
}
if(vidas <= 0){
    gameover()
}
}


function criarobjeto(){
    maca_random = Math.round(random(1,125))
    var a = Math.round(random(1,3))
    if(a == 1){
        maca_random2 = height/1.25
    }else if (a == 2) {
        maca_random2 = height/2
    }else if (a == 3){
        maca_random2 = height/5
    }
    
    if(maca_random >= 0 && maca_random < 25){
     maca1 = createSprite(width,maca_random2)
     maca1.addImage(maca1img)
     maca1.lifetime = 250
     maca1.scale = 0.5
     maca1.velocityX = -50
     macaa1 = true
     macaaa1.add(maca1)
    }
    if(maca_random >= 25 && maca_random < 50){
     maca2 = createSprite(width,maca_random2)
     maca2.addImage(maca2img)
     maca2.lifetime = 250
     maca2.scale = 0.5
     maca2.velocityX = -50
     macaa2 = true
     macaaa2.add(maca2)
    }
    
    if(maca_random >= 50 && maca_random <= 99){
     maca3 = createSprite(width,maca_random2)
     maca3.addImage(maca3img)
     maca3.lifetime = 250
     maca3.scale = 0.5
     maca3.velocityX = -50
     macaa3 = true
     macaaa3.add(maca3)
    }
    
    if(maca_random == 100){
     maca4 = createSprite(width,maca_random2)
     maca4.addImage(maca4img)
     maca4.lifetime = 250
     maca4.scale = 0.5
     maca4.velocityX = -50
     macaa4 = true
     macaaa4.add(maca4)
    }
    if(maca_random > 100){
        preda = createSprite(width,maca_random2)
        preda.addImage(predaimg)
        preda.lifetime = 250
        preda.scale = 0.5
        preda.velocityX = -10
        predaa = true
        predaaa.add(preda)
    }
}//  .. / .- -- / -... .-. .- ... .. .-.. .-.. .. .- -.
function mostrarcoisas(){
    push()
    image(fomeimg, width/2-190.0,height-height+100,80,80)
    fill("orange")
    rect(width/2-100,height-height+100,fome*4,80)
    pop()
    textSize(15)
    text(score,width/1.1,height-height+100)
    text("score:",width/1.1-40,height-height+100)
    text(vidas,width/1.1-80,height-height+100)
    text("vidas:",width/1.1-120,height-height+100)
}
function gameover(){
    if(vidas<=0){
    swal({
        title:"perdeu treine",
        text:"nao encoste no negocio cinza(pedra)",
        confirmButtonText:"jogar novamente e treinar no jogo",
        },function(isConfirm){
        if(isConfirm){
            location.reload()
        }
    })
    }
    if(fome<=0){
        swal({
            title:"voce tinha muita fome",
            text:"pegue a maça amarela para diminuir a fome quando a barra laranja desse demais voce perde",
            confirmButtonText:"jogar novamente e ir melhor"
        },function(isConfirm){
            if(isConfirm){
                location.reload()
            }
        })
    }
    
    
    
}
