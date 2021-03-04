const dummyData =[
    {
        cakeName:"applepie",
        picture:"https://images.unsplash.com/photo-1551807501-1577675640e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        ingredients:" flour, apple, sugar, milk"
    },
    {
        cakeName:"pancakes",
        picture:"/IMG/cake2.jpg",
        ingredients:" flour, butter, sugar, milk, eggs"
    },
    {
        cakeName:"marble-cake",
        picture:"https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        ingredients:" flour, chocolate, sugar, milk"
    },
    {
        cakeName:"Lemon-cake",
        picture:"https://images.unsplash.com/photo-1598795164852-d2b5472d8bbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        ingredients:" flour, lemon, sugar, milk, butter, cream"
    },
    {
        cakeName:"curacao cake",
        picture:"https://images.unsplash.com/photo-1546856139-46fb2b57ff21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        ingredients:" flour, love, sugar, milk, curacao liquor"
    },
    {
        cakeName:"crepes",
        picture:"https://images.unsplash.com/photo-1491857224789-38449de629ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        ingredients:" flour, eggs, sugar, milk"
    },
    {
        cakeName:"cashew-cake",
        picture:"https://images-gmi-pmc.edge-generalmills.com/1c72f4a1-6f99-42c6-bcdb-051f548210cc.jpg",
        ingredients:" flour, cashew, sugar, milk"
    },
]

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement:'.box1',
    reverse:false
})

    .setClassToggle('.content','fade-in')
    .addIndicators({
        name:'Indication',
        indent:200,
        colorStart:'#fff'
    })
    .addTo(controller)
    
var scene1 = new ScrollMagic.Scene({
    triggerElement:'.box2',
    reverse:false
})

    .setClassToggle('.message','fade-in')
    .addIndicators({
        name:'Indication',
        indent:200,
        colorStart:'#fff'
    })
    .addTo(controller)

var scene2 = new ScrollMagic.Scene({
    triggerElement:'.box3',
    reverse:false
})

    .setClassToggle('.cakes','fade-in')
    .addIndicators({
        name:'Indication',
        indent:200,
        colorStart:'#fff'
    })
    .addTo(controller)