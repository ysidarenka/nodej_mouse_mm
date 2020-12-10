var robot = require("robotjs");
var active = true;

var bool = true;
var yScroll = 200;
    
    setInterval(()=>{

        var mouse=robot.getMousePos();

        if (bool){

            yScroll=-200;

        } else {

            yScroll=200;
        }


        robot.scrollMouse(mouse.x,mouse.y + yScroll);

        robot.moveMouse(mouse.x,mouse.y+yScroll);
    
        robot.mouseClick();


    
        //robot.mouseClick();

        bool=!bool;

    },30000);
