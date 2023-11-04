noseX = 0;
noseY = 0;
function preload(){
mustacheImage = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("PoseNet is initialized.");
}

function gotposes(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        console.log("Nose X = " + noseX);
        noseY = results[0].pose.nose.y;
        console.log("Nose Y = " + noseY);
    }
}

function draw(){
 image(video, 0, 0, 300, 300);
 image(mustacheImage, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('filter.png');
}