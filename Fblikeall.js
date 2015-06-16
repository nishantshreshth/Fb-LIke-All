
var_like = document.getElementsByClassName('UFILikeLink');         
var x = 0;                    
 
function likeall(){              
    setTimeout(function(){          
        var_like[x].click();
        x+=1;
        if (x < var_like.length){
        likeall();}
    }, 1000)   //Everylike after 1s
}
 
likeall();    //Initiate like all                   
