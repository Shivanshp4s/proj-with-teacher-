class Page {

constructor(){


    this.button1 = createButton("zombie");
    this.button2 = createButton("city");
    this.button3 = createButton("forest");

}
display(){

this.button1.position(50,50);
this.button1.mousePressed(()=>{
   

    finalbackground_img=background_img;

});

this.button2.position(80,80);
this.button2.mousePressed(()=>{

    shooter.addImage(shooter_img);
    finalbackground_img = city_img;

});

this.button3.position(110,110);
this.button3.mousePressed(()=>{

  shooter.addImage(fgt_img);
    finalbackground_img = fort_img;

});

}
}