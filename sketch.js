/*
  My work is a fork from Daniel Shiffman's work. I've just added an arc 
  and a clock hand for tenths of a second, and an outer arc to achieve 
  a better appearance of a real watch.
  Also, I've written comments for almost every line of code, so 
  you can have a better understanding of what the code does.
  Later on, I'll be adding this fork to my GitHub account.
  For any further explanation, you may contact me via whatsApp at
  +51 996 852 708.
  Ybico.
*/

  /* set function setup() which's called once when the sketch begins
     running.
     check reference @ https://p5js.org/reference/p5/setup/ */
function setup() 
{
  
  /* create the main drawing canvas for the sketch and set it to
     400 x 400 (width x height).
     check reference @ https://p5js.org/reference/p5/createCanvas/ */
  createCanvas(400, 400);
  
  /* change angle mode default to degrees.
     check reference @ https://p5js.org/reference/p5/angleMode/ */
  angleMode(DEGREES);
  
}

  /* set function draw() which's called repeatedly while the sketch 
     runs.
     check reference @ https://p5js.org/reference/p5/draw/ */
function draw()
{
  
  /* set background color by using function background().
     check reference @ https://p5js.org/reference/p5/background/ */
  background(30);
  
  
  /* declare variables hours, minutes, seconds, and milliseconds
     -----------------------------------------------------------
     using Time & Date functions [hour(), minute(), second(),
     --------------------------------------------------------
     and millis()].
     --------------
  
     declare variable hours and set it to the system's hour
     check reference @ https://p5js.org/reference/p5/hour/ */
  let hours = hour();
  
  /* declare variable minutes and set it to the system's minutes
     check reference @ https://p5js.org/reference/p5/minute/ */
  let minutes = minute();
  
  /* declare variable seconds and set it to the system's seconds
     check reference @ https://p5js.org/reference/p5/second/ */
  let seconds = second();
  
  /* declare variable hours and set it to the system's milliseconds
     check reference @ https://p5js.org/reference/p5/millis/ */
  let milliseconds = millis();
  
  
  /* declare variables that will be used to draw the arcs
     -----------------------------------------------------
     declare variable startAngle and set it to 0 degrees */
  let startAngle = 0;
  
  // declare variable endAngle and set it to 360 degress
  let endAngle = 360;
  
  /* translate default center to (200, 200) by using function
     translate() and dividing by 2 width and height parameters, so the 
     watch will be located exactly at the center of the canvas.
     check reference @ httpp5js.org/reference/p5/translate/ */
  translate(width/2, height/2);
  
  /* rotate default angle to 270 or -90 degrees to straight up the 
     analog watch(handles, arcs, ticks, and central button).
     check reference @ https://p5js.org/reference/p5/rotate/ */
  rotate(270);
  
/**************************** draw arcs ****************************/
  
  /* because translate() has been previously set to point (200, 200), 
     the first two parameters of arc(), must be 0 for all subsequent 
     arcs, so they'll be prefectly centered.
  
     set all arcs background to full transparency
     check reference @ https://p5js.org/reference/p5/noFill/ */
  noFill();
  
  /********** outermost arc **********/
  // set outermost arc color
  stroke(55);
  
  // set outermost arc width.
  strokeWeight(10);
  
  // draw outermost arc
  arc(0, 0, 390, 390, startAngle, endAngle);
  
  /********** tenths of second arc **********/
  /* declare variable and set it to the value of mapping milliseconds 
     to 360 degrees using map() function. */
  let tenthsOfSecondArc = map(milliseconds, 0, 1000, startAngle, 
                              endAngle);
  
  // set  tenths of second arc color.
  stroke(255, 215, 0);
  
  // set tenths of second, second, minute and hour arcs width.
  strokeWeight(8);
  
  /* draw tenths of second arc by using arc() function.
     check reference @ https://p5js.org/reference/p5/arc/ */
  arc(0, 0, 100, 100, 0, tenthsOfSecondArc);
  
  /********** seconds arc **********/
  /* declare variable and set it to the value of mapping seconds 
     to 360 degrees. */
  let secondArc = map(seconds, 0, 60, startAngle, endAngle);
  
  // set seconds arc color.
  stroke(204, 0, 0);
  
  // draw second arc.
  arc(0, 0, 300, 300, 0, secondArc);
  
  /********** minutes arc **********/
  /* declare variable and set it to the value of mapping minutes 
     to 360 degrees. */
  let minuteArc = map(minutes, 0, 60, startAngle, endAngle);
  
  // set minutes arc color.
  stroke(50,205,50);  // lime green
  
  // draw minutes arc.
  arc(0, 0, 330, 330, 0, minuteArc);
  
  /********** hours arc **********/
  /* declare variable and set it to the value of mapping hourss 
     to 360 degrees. */
  let hourArc = map(hours % 12, 0, 12, startAngle, endAngle);
  
  // set hours arc color.
  stroke(30,144,255); // dodger blue
  
  // draw hours arc.
  arc(0, 0, 360, 360, 0, hourArc);
  
  
/************************* draw clock hands *************************/
  // use push() and pop(), so each handle rotates independently.
  
  /********** tenths of second hand **********/
  /* open drawing group using push() function
     check reference @ https://p5js.org/reference/p5/push/ */
  push();
  
    // rotate hand 360 degrees continously.
    rotate(tenthsOfSecondArc);
  
    // set hand color.
    stroke(255, 215, 0);
    
    // set hand width.
    strokeWeight(6);
  
    // draw hand.
    line(0, 0, 30, 0);
  
  /* end drawing group using pop() function.
     check reference @ https://p5js.org/reference/p5/pop/ */
  pop();
  
  /********** seconds hand **********/
  // open drawing group.
  push();
    // rotate hand 360 degrees continously.
    rotate(secondArc);
  
    // set hand color.
    stroke(204, 0, 0);
  
    // draw hand
    line(0, 0, 130, 0);
  
  // end drawing group.
  pop();
  
  /********** minutes hand **********/
  // open drawing group.
  push();
  
    // rotate hand 360 degrees continously.
    rotate(minuteArc);
  
     // set hand color.
    stroke(50, 205, 50);
  
     // set hand width.
    strokeWeight(8);
  
    // draw hand.
    line(0, 0, 115, 0);
  
  // end drawing group.
  pop();
  
  /********** hour hand **********/
  // open drawing group.
  push();
  
    // rotate hand 360 degrees continously.
    rotate(hourArc);
  
    // set hand color.
    stroke(30, 144, 205);
  
    // set hand width.
    strokeWeight(8);
  
    // draw hand
    line(0, 0, 100, 0);
  
  // end drawing group.
  pop();
  
  
/******************** draw central button ********************/
  // set point color.
  stroke(30);
  
  // set point width.
  strokeWeight(9);
  
  /* draw button using function point().
     check reference @ https://p5js.org/reference/p5/point/ */
  point(0, 0);
  
}
