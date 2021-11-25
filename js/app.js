
  var pictures = ["contBcg-0",
                "contBcg-1",
                 "contBcg-2",
                "contBcg-3",
                 "contBcg-4"];
 var images = document.querySelector(".img-container")  
 var leftbutton = document.getElementsByClassName("btn-left")
 var rightbutton =  document.getElementsByClassName("btn-right")   
 var count = 0;

 function rightFunction(){
    count++;
   if(count > pictures.length - 1){ count = 0;};
   console.log(count);
   images.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
 };

 function leftFunction(){
  count--;
  if (count < 0){ count = pictures.length -1};
  console.log(count);
  images.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
 };

