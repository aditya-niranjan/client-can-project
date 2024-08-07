

function smooothScrolling(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main"),
smooth: true,
//   lerp:0.06,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector(".main").style.transform ? "transform" : "absolute"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smooothScrolling()











let responsive = gsap.matchMedia();



responsive.add("(min-width: 800px)", () => {
  function orangeCan(){
    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            // markers:true,
            start:"top 97%",
            end:"top -10%",
            scrub:true,

        }
     })
     
     tl1.to("#fanta-img",{
         top:"37%",
         left:"2.7%",
        //  rotate:"0deg"
     },"anime")
     tl1.to("#oarange-circle",{
         top:"48%",
         left:"25%",
          width:"18%"
     },"anime")
     tl1.to("#org-fruites",{
         top:"52%",
         left:"64%",
         width:"23%"
     },"anime")
     tl1.to("#leaf-1",{
         top:"38%",
         left:"62%",
         rotate:"-135deg",
        // width:"30.4%"
        scale:1.4,
     },"anime")
     tl1.to("#leaf-2",{
         top:"36%",
         left:"2.4%",
         width:"12.4%",
         rotate:"155deg",
     },"anime")
}
orangeCan()

function page3Animation(){
  var tl3 = gsap.timeline({
      scrollTrigger:{
          trigger:".page2",
          scroller:".main",
          // markers:true,
          start:"70% 50%",
          end:"118%  100%",
          scrub:true,
  
      }
   })
  
   tl3.to("#fanta-img",{
      top:"74%",
      left:"30%",
  },"anime1")
   tl3.to("#oarange-circle",{
      top:"70%",
      left:"39.7%",
      width:"20%"
  },"anime1")
   tl3.from("#cocacola-img",{
     x:-200,
     rotate:"-90deg",
  },"anime1")
   tl3.from("#cricle-1",{
     x:-500,
     rotate:"-90deg",
  },"anime1")
   tl3.from("#pespi-img",{
     x:500,
     rotate:"90deg",
  },"anime1")
   tl3.from("#cricle-2",{
     x:500,
     rotate:"90deg",
  },"anime1")
}
page3Animation()

});


// -----------------------------mobile device responsive code here----------------------------

responsive.add("(max-width: 799px)", () => {
  



  function orangeCan(){
    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            // markers:true,
            start:"top 97%",
            end:"top -10%",
            scrub:true,
  
        }
     })
     
  
     tl1.to("#fanta-img",{
         top:"24%",
         left:"2.1%",
         scale:1,
        //  rotate:"0deg"
     },"anime")
     tl1.to("#oarange-circle",{
         top:"23%",
         left:"25%",
        width:"31%"
     },"anime")
     tl1.to("#org-fruites",{
         top:"31%",
         left:"56%",
         width:"42%"
     },"anime")
     tl1.to("#leaf-1",{
         top:"21.2%",
         left:"64%",
         rotate:"-155deg",
        // width:"30.4%"
        scale:1.4,
     },"anime")
     tl1.to("#leaf-2",{
         top:"24%",
         left:"3.8%",
         rotate:"155deg",
         scale:1.3,
     },"anime")
  }
  orangeCan()
  
  function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            // markers:true,
            start:"70% 50%",
            end:"118%  100%",
            scrub:true,
    
        }
     })
    
     tl3.to("#fanta-img",{
      scale:1.3,
    },"anime1")
     tl3.to("#oarange-circle",{
      scale:1.3,
    },"anime1")
     tl3.to("#fanta-img",{
        top:"69.5%",
        left:"3.5%",
        zIndex:100,
        scale:1,
    },"anime1")
     tl3.to("#oarange-circle",{
        top:"67.3%",
        left:"29%",
        width:"41%",
        zIndex:70,
        scale:1,
    },"anime1")
     tl3.from("#cocacola-img",{
       x:-200,
       rotate:"-90deg",
       scale:1.5
    },"anime1")
     tl3.from("#cricle-1",{
       x:-500,
       rotate:"-90deg",
       scale:1.5
    },"anime1")
  }
  page3Animation()
  
  function page3LAstaniamtion(){
    
  var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"160% 50%",
        end:"170%  100%",
        scrub:true,
  
    }
  })
  
  tl4.from("#pespi-img",{
    x:500,
    rotate:"90deg",
    scale:1.5
  },"anime1")
  tl4.from("#cricle-2",{
    x:500,
    rotate:"90deg",
    scale:1.5
  },"anime1")
  }
  page3LAstaniamtion()
  
  // function navbarresp(){
  
  //   var menu = document.querySelector("nav i")
  //   var cross = document.querySelector(".nav0overlay i")
  //   var display = document.querySelector(".nav0overlay")
  //   var tlnav = gsap.timeline()
  
  
  //   tlnav.to(display,{
  //     right:"0%",
  //     duration:2,
  //     scrub:2,
  //   })
  //   tlnav.to(".nav0overlay a span",{
  //     x:200,
  //     duration:2,
  //     scrub:2,
  //     stagger:0.8,
  //   })
    
  //   menu.addEventListener('click',function(){
  //     gsap.play()
  //   })
  //   cross.addEventListener('click',function(){
  //     gsap.revrese()
  //   })
  
  
  // }
  // navbarresp()
  
  
  function navabar(){
  
  
  var croosI = document.querySelector("#close-menu")
  var openI = document.querySelector("#open-menu")
  var tl10 = gsap.timeline()
  
  
  tl10.to(".div-nav",{
    right:"0%",
    duration:0.9,
    scrub:1.5,
  })
  // tl10.from(itenms,{
  //   x:200,
  //   opacity:0,
  //   duration:1,
  //   scrub:1.5,
  //   // stagger:15,
  // })
  tl10.from(".cnter-nav3 span",{
    x:150,
    duration:0.3,
    stagger:0.15,
    opacity:0
  })
  tl10.from(croosI,{
    opacity:0,
  })
  
  tl10.pause()
  
  openI.addEventListener('click',function(){
    tl10.play()
  })
  croosI.addEventListener('click',function(){
    tl10.reverse()
  })
  
  
  
  
  
  
  
  
  
  }
  navabar()


});







// function orangeCan(){
//     var tl1 = gsap.timeline({
//         scrollTrigger:{
//             trigger:".page2",
//             scroller:".main",
//             // markers:true,
//             start:"top 97%",
//             end:"top -10%",
//             scrub:true,

//         }
//      })
     
//      tl1.to("#fanta-img",{
//          top:"37%",
//          left:"2.7%",
//         //  rotate:"0deg"
//      },"anime")
//      tl1.to("#oarange-circle",{
//          top:"48%",
//          left:"25%",
//           width:"18%"
//      },"anime")
//      tl1.to("#org-fruites",{
//          top:"52%",
//          left:"64%",
//          width:"23%"
//      },"anime")
//      tl1.to("#leaf-1",{
//          top:"38%",
//          left:"62%",
//          rotate:"-135deg",
//         // width:"30.4%"
//         scale:1.4,
//      },"anime")
//      tl1.to("#leaf-2",{
//          top:"36%",
//          left:"2.4%",
//          width:"12.4%",
//          rotate:"155deg",
//      },"anime")




// }
// orangeCan()


// var tl1 = gsap.timeline({
//     scrollTrigger:{
//      trigger:".page2, .right-div",
//      // scoller:".main",
//      start:"-5% 98%",
//      end:"60% 50%",
//      markers:true,
//      scrub:true,
//     }


// function page3Animation(){
//     var tl3 = gsap.timeline({
//         scrollTrigger:{
//             trigger:".page2",
//             scroller:".main",
//             // markers:true,
//             start:"70% 50%",
//             end:"118%  100%",
//             scrub:true,
    
//         }
//      })
    
//      tl3.to("#fanta-img",{
//         top:"74%",
//         left:"30%",
//     },"anime1")
//      tl3.to("#oarange-circle",{
//         top:"70%",
//         left:"39.7%",
//         width:"20%"
//     },"anime1")
//      tl3.from("#cocacola-img",{
//        x:-200,
//        rotate:"-90deg",
//     },"anime1")
//      tl3.from("#cricle-1",{
//        x:-500,
//        rotate:"-90deg",
//     },"anime1")
//      tl3.from("#pespi-img",{
//        x:500,
//        rotate:"90deg",
//     },"anime1")
//      tl3.from("#cricle-2",{
//        x:500,
//        rotate:"90deg",
//     },"anime1")
// }
// page3Animation()


// function navSection(){

//   var navOpen = document.querySelector("#nav i")
//   var navClose = document.querySelector("#full i")
 
//      var tl = gsap.timeline()
 
 
//      tl.to("#full",{
//          right:0,
//          duration:0.3,
//      })
//      tl.from("#full h4",{
//          x:150,
//          duration:0.3,
//          stagger:0.16,
//          opacity:0
//      })
//      tl.from("#full i",{
//          opacity:0
//      })
 
//  tl.pause()
 
 
//  navOpen.addEventListener("click",function(){
//      tl.play()
//  })
 
//  navClose.addEventListener("click",function(){
//      tl.reverse()
//  })

// }

