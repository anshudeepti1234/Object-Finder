function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.hide();
    canvas=createCanvas(400,400);
    canvas.position(550,250);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
    
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}

}