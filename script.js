window.addEventListener('load',function(){
    const canvas=this.document.getElementById('canvas1')
    const ctx=canvas.getContext('2d')
    canvas.width=600
    canvas.height=800
    ctx.strokeStyle='white'
    ctx.lineWidth=3



    class Robot{

        constructor(canvas){

            this.canvas=canvas
            this.x=this.canvas.width*0.4
            this.y=this.canvas.height*0.5
            this.centerx=this.x
            this.centery=this.y
            this.radius=80
            this.angle=0
            this.spritewidth=370
            this.spriteheight=393
            this.framex=0
            this.maxframe=75
            this.bodyimage=document.getElementById('body')
            this.bodysprite=document.getElementById('bodySprite')
            this.eye1image=document.getElementById('eye1')
            this.eye2image=document.getElementById('eye2')
            this.reflection=document.getElementById('reflection')
            this.movementangle=0

            this.mouse={
                x:0,
                y:0
            }
            this.canvas.addEventListener('mousemove',e=>{
                console.log(this.angle)
                this.mouse.x=e.offsetX
                this.mouse.y=e.offsetY
            })


        }
        draw(context){
                         //bodybodyimage
                         //context.drawImage(this.bodyimage,this.x-this.bodyimage.width*0.5+65,this.y-this.bodyimage.height*0.5-53)
                         context.drawImage(this.bodysprite,this.framex*this.spritewidth,0,this.spritewidth,this.spriteheight,this.x-this.bodyimage.width*0.5+65,this.y-this.bodyimage.height*0.5-53,this.spritewidth,this.spriteheight)
                         //eye1
                         context.drawImage(this.eye1image,this.x+Math.cos(this.angle)*this.radius*0.4-this.eye1image.width*0.5,this.y+Math.sin(this.angle)*this.radius*0.4-this.eye1image.height*0.5)
                        
                        
                        context.drawImage(this.eye2image,this.x+Math.cos(this.angle)*this.radius*0.65-this.eye2image.width*0.5,this.y+Math.sin(this.angle)*this.radius*0.65-this.eye2image.height*0.5)
                        context.drawImage(this.reflection,this.x-this.reflection.width*0.5,this.y-this.reflection.height*0.5)
                        
        }
        update(){

            const dx=this.mouse.x-this.x
            const dy=this.mouse.y-this.y
            this.angle=Math.atan2(dy,dx);
            if(this.framex>=this.maxframe)
            {
                this.framex=0
            }
            else{
                this.framex++
            }
            this.movementangle+=0.05
            this.x=this.centerx+Math.cos(this.movementangle)*80
            this.y=this.centery+Math.sin(this.movementangle)*150
        }
    }
    const robot= new Robot(canvas)
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        robot.draw(ctx)
        robot.update()
        requestAnimationFrame(animate)
    }
    animate()
})