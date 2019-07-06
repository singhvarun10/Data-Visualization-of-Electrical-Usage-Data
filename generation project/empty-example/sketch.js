
function setup() {

  var width = 500, // canvas width and height
      height = 350;
  createCanvas(width, height);
  var p=createP("Blue = Generation<br>Red = Percentage Growth");

}

  var width = 450, // canvas width and height
      height = 350;
	var margin = 20;

     var w = width - 2 * margin, // chart area width and height
      h = height - 2 * margin;
  
  var d = {"north":  [270695.22,3.71,286363.15,5.79,283881.47,-0.87],
  "west" : [322716.94,6.8,367783.4,13.96,407415.48,10.78],
   "south": [205761.7,7.54,215865.4,4.91,225939.8,4.67],
   "east" :[152798.77,5.89,163018.77,6.69,172693.8,5.93],
   "north-east": [9579.81,13.56,10634.5,11.01,12647.52,18.93]};
function draw(){


var sel;
sel = createSelect();
  sel.position(10, 10);
    sel.option('Choose a region');
  sel.option('north');
  sel.option('west');
  sel.option('south');
  sel.option('east');
  sel.option('north-east');

  sel.changed(()=>{
  	  background(200);
  	  textSize(20);
  	text(sel.value(),width/2,20);
  	  textSize(9);
  	var data=d[sel.value()];
  	console.log(data,sel.value());

  var barWidth =  (h / data.length) * 0.9; // width of bar
  var barMargin = (h / data.length) * 0.1; // margin between two bars
  push();
  translate(margin, margin); // ignore margin area
  
  for(var i=0; i<data.length; i++) {
    push();
    if (i%2==0){
    fill('steelblue');

    noStroke();
    translate(i* (barWidth + barMargin), height*0.8); // jump to the top right corner of the bar
    rectMode(CORNERS);
    rect( 0, 0,barWidth, -data[i]*height*0.8/Math.max(...data)); // draw rect

	}
	else{

		fill('red');
    noStroke();
    translate(i* (barWidth + barMargin)-barMargin, height*0.8); // jump to the top right corner of the bar
    rectMode(CORNERS);
    rect( 0, 0,barWidth, -data[i]*height*0.8/20); // draw rect

	}
	    console.log(data[i]*height*0.5/Math.max(...data));
    fill('#FFF');
    textAlign(CENTER);
    text(data[i], (barWidth/2), -10); // write data
    fill(0);
    if (i%2==0)
    text(str(2013+i/2)+"-"+str(2013+1+i/2), (barWidth/2), 30); // write data
    pop();
  }
  
  pop();
  });


}