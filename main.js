nose_x="";
nose_y="";
function preload() {
   clone_nose=loadImage('https://postlmg.cc/phzdt1rP');
}

function setup(){
   canvas=createCanvas(300,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet=ml5.poseNet(video, modelloaded);
   poseNet.on('pose', gotposes);
}

function modelloaded(){
   console.log("posenet is started");
}

function gotposes(results){
   if (results.length > 0) {
      console.log(results);
      nose_x=results[0].pose.nose.x;
      nose_y=results[0].pose.nose.y;
      console.log("nose x = "+nose_x);
      console.log("nose y = "+nose_y);

   }
}

function draw(){
   image(video,0,0,300,300);
   
   image(clone_nose,nose_x-15,nose_y-15,30,30);
}

function take_snapshot(){
   save("noseclone.jpg")
}