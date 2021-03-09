var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement:'.box1',
    reverse:false
})
    .setClassToggle('.content','fade-in')
    .addTo(controller)
    
var scene1 = new ScrollMagic.Scene({
    triggerElement:'.box2',
    reverse:false
})
    .setClassToggle('.message','fade-in')
    .addTo(controller)

var scene3 = new ScrollMagic.Scene({
    triggerElement:'div .box4',
    reverse:false
})
    .setClassToggle('div .caroussel','fade-in')
    .addTo(controller)

