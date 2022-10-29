$(document).ready(function() {

  
  	var url = window.location.href;
  	url = url.replace("https://","");
  	var splitUrl = url.split("/");
  	
  	
 
  	if(splitUrl.length == 3){
      
      $('.helpers__backUp').addClass('level-1','');
      
      
    }else{
      $('.helpers__backUp').addClass('level-2','');
    }
  
  
  
  
});