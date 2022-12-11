function preload(){
    loadImage('ice-cream.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelloaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}