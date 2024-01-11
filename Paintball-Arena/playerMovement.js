AFRAME.registerComponent("PlayerMovement",{
    init:function(){
        this.walk();
    },
    walk:function(){
        window.addEventListener("keydown",(e) => {
            if(e.key == "ArrowUp" || e.key == "ArrowRight" || e.key == "ArrowDown" || e.key == "ArrowLeft"){
                var entity = document.querySelector("#sound2")
                entity.components.sound.playSound()
            }
        })
    }
})