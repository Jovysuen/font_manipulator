leftwristX=0
rightwristX=0
difference1=0
difference2=0
function setup(){
    canvas=createCanvas(400,500)
    canvas.position(600,200)
    video=createCapture(VIDEO)
    video.size(400,500)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model loaded successfully")
}
function draw(){
    background("#ADD8E6")
    fill("white")
    stroke("white")
    text('HI',difference1,difference2)
    textSize(difference1)
}

function preLoad(){

}
    function gotPoses(results){
        if (results.length>0) {
            console.log(results)
            leftWristY=results[0].pose.leftWrist.y
            rightwristY=results[0].pose.rightWrist.y
            leftwristX=results[0].pose.leftWrist.x
            rightwristX=results[0].pose.rightWrist.x
            difference1=floor(leftwristX-rightwristX)
            difference2=floor(leftWristY=rightwristY)
        }
    }