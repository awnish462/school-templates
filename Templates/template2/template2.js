
// backgroundImage
   window.addEventListener('load',function(){
    var backgroundimage=[
        "images/van-tay-media-TOBRTuE_uXA-unsplash (2).jpg",
        "images/bruno-van-der-kraan-jphg1enenVg-unsplash.jpg",
        "images/sigmund-TJxotQTUr8o-unsplash.jpg",
        "images/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
        
    ];

       setInterval(changeImage, 5000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       document.getElementById("start").style.backgroundImage = "url('"+backgroundimage[i]+"')";

     }
   },false);

//    h2 change
   window.addEventListener('load',function(){
    var text =[
        "“Learn as much as you can while you are young, since life becomes too busy later.” –",
        "“Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.” – ...",
        "“Learning is a treasure that will follow its owner everywhere.” –"

    ];

       setInterval(changeText, 5000);
      function changeText() {   
       var i = Math.floor((Math.random() * 3));

       document.getElementById("startinnerheading").innerText=text[i];

     }
   },false);