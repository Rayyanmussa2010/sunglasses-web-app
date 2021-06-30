var clown_nose
function preload(){
clown_nose=loadImage('https://i.postimg.cc/vm5srDM9/deal-with-it-glasses-png-clip-art-3.png');
}

function setup(){
var canvas=createCanvas(400, 400);
canvas.position(550, 250)
video=createCapture(VIDEO)
video.size(400, 400);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(results){
if(results.length>0)
{
console.log(results)
rightEyeX=results[0].pose.rightEye.x-15;
rightEyeY=results[0].pose.rightEye.y-25;
}
}
rightEyeX=0;
rightEyeY=0;
function draw(){
    clown_nose.scale=1;
    image(video, 0, 0, 400, 400);
image(clown_nose,rightEyeX, rightEyeY, 100, 50)
}

function modelLoaded(){
console.log("poseNet is loaded!")
}

function take_snapshot(){
save('clown_nose.png')
}