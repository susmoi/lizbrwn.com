// JavaScript
// import files/resources JSON files

$(document).ready(function(){

  // Make sure the document is loaded
  // for each JSON file, create html





$.getJSON("files/resources/content.json", function(data) {
  var resourcesHtml = "";

  $.each(data, function(key, val) {
    resourcesHtml += "<div class='resource'>";
    resourcesHtml += "<a href='" + val['Resource link'] + "'>" + val['Resource name'] + "</a>";
    resourcesHtml += "<p>" + val['Resource description'] + "</p>";
    resourcesHtml += "<span>" + val['Resource tag'] + "</span>";
    if (resource['Resource placement']) {
      resourcesHtml += "<span>" + resource['Resource placement'] + "</span>";
    }
    resourcesHtml += "</div>";
  });

  $("#resources-test").html(resourcesHtml);
});
});
