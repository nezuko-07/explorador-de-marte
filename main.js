canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_3.jpg","nasa_image_4.jpg","mars.jpg"];
random_number = Math.floor(Math.random()*4);
rover_width = 100;
rover_height = 90;
background_image = nasa_mars_images_array[random_number];
rover_image = "rover.png"
rover_x = 100;
rover_y = 80;
function add() {
background_imgtag = new Image();//define una variable con la imagen nueva
background_imgtag.onload = uploadBackground;//establecer la funcion para cargar la variable
background_imgtag.src = background_image;
rover_imgtag = new Image();
rover_imgtag.onload = uploadrover;
rover_imgtag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag, 0,0, canvas.width, canvas.height );
}
function uploadrover(){
    ctx.drawImage(rover_imgtag, rover_x,rover_y,rover_width,rover_height,);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
   if(keyPressed == '38'){
    up();
   }
   if(keyPressed == '39'){
    right();
   }
   if(keyPressed == '40'){
    down();
   }
   if(keyPressed == '37'){
    left();
   }

}
function up()
{ if(rover_y >=0) { rover_y = rover_y - 10; 
    console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
     uploadBackground();
 uploadrover(); } }
    
 function down() { if(rover_y <=500) { rover_y =rover_y+ 10;
     console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
      uploadBackground(); uploadrover();
     }}
     function left() { if(rover_x >= 0) { rover_x =rover_x - 10;
         console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
          uploadBackground(); uploadrover();
     } } 
     function right() { if(rover_x <= 700) { rover_x =rover_x + 10;
         console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
          uploadBackground(); uploadrover(); } }