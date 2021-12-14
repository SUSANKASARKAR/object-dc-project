objectDectector= "";
 
img = "";
object = [];
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup() {
   canvas = createCanvas(640, 420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function draw() {
   image(img, 0, 0, 640, 420);

   if(status != "")
   {
       for (var i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status : Object Detected";
           

           fill(255, 0, 0);
           percent = floor(object[i].confidence * 100);
           text(object[i].label + " " + percent + "%", object[i].x + 15,objects[i].y + 15);

           nofill();
           stroke(255, 0, );
           rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
   }
}

function modelLoaded() {
   console.log("Model Loaded!")
   status = true;
   objectDectector.dectect(img, gotResust);
}

function gotResult(error, results) {
   if (error) {
       console.log(error);
   }
   console.log(results);
   object = results;
}