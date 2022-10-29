$(document).ready(function(){
/*
//Base URL finder
var profile = '&profile=' + $('form[role="search"] input[name="profile"]').val();
if (profile == '&profile=undefined') { profile = ''; }
var form = '&form=' + $('form[role="search"] input[name="form"]').val();
if (form == '&form=undefined') { form = ''; } 

// Base URL used for query completion endpoint(s)
url = "/s/suggest.json?partial_query=%QUERY&sort=0&fmt=json++&";
*/


if (!window.location.origin) { // Some browsers (mainly IE) does not have this property, so we need to build it manually...
  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
} 
//var baseurl = window.location.origin + location.pathname + '?collection=lse-website-meta';
  
var baseurl = '/Search/Search-Results.aspx';

/*
var metaurl = 'http://lse.funnelback.co.uk/s/suggest.json'
      + '?collection=lse-website-meta'
      + '&partial_query=%QUERY'
      + '&show=10'
      + '&sort=0'
      + '&alpha=.5'
      + '&fmt=json++'
      + '&profile=';*/

var metaurl = '//lse.funnelback.co.uk/s/suggest.json?partial_query=%QUERY&sort=0&fmt=json++&';

// Bloodhound setup
var organic =  new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('disp')
  ,queryTokenizer: Bloodhound.tokenizers.whitespace
  ,limit: 6
  ,remote: {
    url : metaurl + "collection=lse-website-meta&show=6",
    ajax: {
      jsonp: 'callback',
      dataType: 'jsonp'
    },
    filter: function(list){
       return $.map(list, function(suggestion) { return suggestion });
    }
  }
});

var courses =  new Bloodhound({
     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value')
    ,queryTokenizer: Bloodhound.tokenizers.whitespace
    ,limit: 3
    ,remote: {
      url : metaurl + "collection=lse-programmes&profile=qc_mc&show=3",
      filter: function(list){
        return $.map(list, function(suggestion) { return suggestion })
      },
      ajax: {
        jsonp: 'callback',
        dataType: 'jsonp'
      }
    }
});

var people =  new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value')
  ,queryTokenizer: Bloodhound.tokenizers.whitespace
  ,limit: 3
  ,remote: {
    url : metaurl + "collection=lse-people&profile=qc_mc&show=3",
    filter: function(list){
      return $.map(list, function(suggestion) { return suggestion })
    },
    ajax: {
      jsonp: 'callback',
      dataType: 'jsonp'
    }
  }
});

var research =  new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value')
  ,queryTokenizer: Bloodhound.tokenizers.whitespace
  ,limit: 3
  ,remote: {
    url : metaurl + "collection=lse-research&profile=qc_mc&show=3",
    filter: function(list){
      return $.map(list, function(suggestion) { return suggestion })
    },
    ajax: {
      jsonp: 'callback',
      dataType: 'jsonp'
    }
  }
});

var news =  new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value')
  ,queryTokenizer: Bloodhound.tokenizers.whitespace
  ,limit: 3
  ,remote: {
    url : metaurl + "collection=lse-news&profile=qc_mc&show=3",
    filter: function(list){
      return $.map(list, function(suggestion) { return suggestion })
    },
    ajax: {
      jsonp: 'callback',
      dataType: 'jsonp'
    }
  }
});

var events =  new Bloodhound({
   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value')
  ,queryTokenizer: Bloodhound.tokenizers.whitespace
  ,limit: 3
  ,remote: {
    url : metaurl + "collection=lse-events-xml&profile=qc_mc&show=3",
    filter: function(list){
      //console.log(list)
      if(list != []){
        return $.map(list, function(suggestion) { return suggestion })
      }else{return null}
    },
    ajax: {
      jsonp: 'callback',
      dataType: 'jsonp'
    }
  }
});

// Initialise
organic.initialize();
courses.initialize();
people.initialize();
research.initialize();
events.initialize();
news.initialize();

$(".siteSearch__keywords").typeahead({
    minLength : 3,
    hint: true,
    highlight: true
  }
 ,{
   name : "organic"
   ,displayKey : "value"
   ,source : organic.ttAdapter()
   ,templates : {
      // empty : '<h5 class="no-results">No results for your search terms</h5>'
      //,header : '<h3><i class="fa fa-globe"></i> Suggestions</h3>'
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">Everything</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        //return "<a href='" + baseurl + "?query=" + data.disp + "'><h5>" + data.disp + "</h5></a>";
        return "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + baseurl + "?query=" + data.disp + "'>" + data.disp + "</a></h2><h3 class='globalSuggested__summary'>" ;

      }
    }
  }
  ,{
    name : "courses"
   ,displayKey : "value"
   ,source : courses.ttAdapter()
   ,templates : {
      // empty : '<h5 class="no-results">No courses for your search terms</h5>'
      //,header : '<h3>Courses</h3>'
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">Programmes</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        var displayText = "";
        displayText += "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + data.disp.url + "'>" + data.disp.title + "</a></h2><h3 class='globalSuggested__summary'>" ;
        if (data.disp.type) {
          displayText += "<span>" + (data.disp.type).replace('|',', ') + "</span>";
        }
        displayText += "</h3>";
        return displayText;
      }
    }
  }  
  ,{
    name : "people"
   ,displayKey : "value"
   ,source : people.ttAdapter()
   ,templates : {
      //empty : '<h5 class="no-results">No people for your search terms</h5>'
      //,header : '<h3>People</h3>'
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">People</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        var displayText = "";
        displayText += "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + data.disp.url + "'>" + data.disp.title + "</a></h2><h3 class='globalSuggested__summary'>" ;
        if (data.disp.position) {
          displayText += data.disp.position;
        }
        displayText += "</h3>";
        return displayText;
      }
    }
  }
  ,{
    name : "research"
   ,displayKey : "value"
   ,source : research.ttAdapter()
   ,templates : {
      //empty : '<h5 class="no-results">No research for your search terms</h5>'
      //,header : '<h3>Research</h3>'
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">Research</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        var displayText = "";
        displayText += "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + data.disp.url + "'>" + data.disp.title + "</a></h2><h3 class='globalSuggested__summary'>" ;
        if (data.disp.type) {
          displayText += "<span>" + data.disp.type + "</span>";
        }
        displayText += "</h3>";
        return displayText;
      }
    }
  } 
  ,{
    name : "events"
   ,displayKey : "value"
   ,source : events.ttAdapter()
   ,templates : {
       //empty : function(){return null}
      //,header : function(data){if(data != null){'<h3>Events</h3>'}}
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">Events</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        var displayText = "";
        displayText += "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + data.disp.url + "'>" + data.disp.title + "</a></h2><h3 class='globalSuggested__summary'>" ;
        if (data.disp.date) {
          displayText += "<span>" + data.disp.date + "</span>";
        }
        if (data.disp.dtime) {
          displayText += "<span>" + data.disp.dtime + "</span>";
        }
        if (data.disp.location) {
          displayText += "<span>" + data.disp.location + "</span>";
        }
        displayText += "</h3>";
        return displayText;
      }
    }
  } 
  ,{
    name : "news"
   ,displayKey : "value"
   ,source : news.ttAdapter()
   ,templates : {
      //empty : '<h5 class="no-results">No news for your search terms</h5>'
      //,header : '<h3>News</h3>'
      empty : function(){return null}
      ,header : function(data){
        if(data.isEmpty === false){
          var dt='<dt class="globalSuggested__catTitle">News</dt>'
          return dt;
        }
      }
      ,suggestion: function(data){
        var displayText = "";
        displayText += "<h2 class='globalSuggested__title'><a class='globalSuggested__link' href='" + data.disp.url + "'>" + data.disp.title + "</a></h2><h3 class='globalSuggested__summary'>" ;
        if (data.disp.date) {
          displayText += "<span>" + data.disp.date + "</span>";
        }
        displayText += "</h3>";
        return displayText;
      }
    }
  } 
).on('typeahead:selected',function($e, datum){
        // Debug only
        console.log(datum);
        // For entries with a URL 
        if(datum.url){
          location = datum.url;
          return false;
        }
	// We never fire a direct search
}).on('typeahead:select', function(ev, suggestion) {
  console.log('Selection: ' + suggestion);
});
  
 
  var  columnslayout_set = false;
 $(".siteSearch__keywords").bind('typeahead:render',function($e){
   
   $(".siteSearch__container .globalSuggested__cat:empty").remove();
   
   if (!columnslayout_set) {
      columnslayout_set = true;
     salvattore.init();
   }
});
  
  
});
