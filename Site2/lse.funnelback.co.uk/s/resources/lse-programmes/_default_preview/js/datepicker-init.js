$(function () {
var baseurl = window.location.href

var connector = '&'
//if(!baseurl.includes('?')){
if(baseurl.indexOf("?") < 0) {
  connector = '?'
}


baseurl = baseurl.replace(/meta_d(3|4).*&/,'').replace(/(\&)?sort=(d|a)?date/g,'').replace(/f\.Time(\+|\s|%20)period.*(20\d{2})/,'').replace('query&','')

try{
  var colList = $('div.searchResults').attr('class').split(/\s+/)
}catch(err){
  var colList = baseurl.match(/f.Collection.+=(.*?)(&|$)/)
}
  var i = 0
  while(i <= colList.length){
    var collection = colList[i]
    if(collection === 'lse-news' || collection === 'News'){
      var dateType = 'meta_d4='
      var sortType = '&sort=date'
      break;
    }else{
      var dateType = 'meta_d3='
      var sortType = '&sort=adate'
    }
    i++
  }



  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var currentDateString = $('.calendar').data('current-date');
  var pickmeupProperties = {
      flat: true,
      change: function (formated) {
          month = parseInt(formated.substring(3, 5)) - 1
          finalM = formated.split('-')[0] + monthNames[month] + formated.split('-')[2]
          window.location = baseurl + connector + dateType + finalM + sortType;
      }
  };

  if (currentDateString) {
      var currentDate = new Date(currentDateString);
      pickmeupProperties.date = currentDate;
  }

  $('.calendar__render2').pickmeup(pickmeupProperties);
  
});
