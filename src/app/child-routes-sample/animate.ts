import {
    trigger,
    state,
    transition,
    animate,
    style,
    keyframes
  } from "@angular/animations";


const anim =    trigger("anim", [
    transition("void => *",animate("5000ms 2000ms", style({
        opacity:1,
      
    }))),
    transition("* => void",animate(5000))

  ])

  const voidTrigger= trigger("voidTrigger", [

    //void means when element is not in the view

    transition("void  => *", [

      // 2000 is the duration after which it //starts
      // animate("1000ms 100ms")

      //using keyframes
      //first it starts from -30px from elements position
      //next goes to 10px then 0px
      animate(
        "2000ms",
        keyframes([
          style({ opacity: 0, transform: "translateY(-200px)", offset: 0 }),
          style({ opacity: 1, transform: "translateY(50px)", offset: 0.2 })
          ,
          style({ opacity: 1, transform: "translateY(0px)", offset: 1 })
        ])
      )
    ])
  ])

  export {anim, voidTrigger}