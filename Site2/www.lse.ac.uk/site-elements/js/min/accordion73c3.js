// ================================================================================
// ---------------------- Open accordion content by anchor ------------------------
// ================================================================================
(function(){
    // check for anchor
    let url = window.location.href, idx = url.indexOf("#");
    var hash = idx != -1 ? url.substring(idx) : "";

    if(hash !== "")
    {
        // find the matching id, which will be in content. Get ancestor then the 
        // previous sibling as we want accordion header to open the content
       let accordionHeader = $(hash).closest('.accordion__panel').prev();
       
       setTimeout(
       function()
       {    
            // open accordion content 
            accordionHeader.trigger('click');
            
            // scroll to the content
            var t=$(hash);
            if(t.length)
            {
                var i=t.offset().top;
                $("body, html").stop(!0,!0).animate({scrollTop:i},800)
            }          
       }, 250)
 
    } 
})();