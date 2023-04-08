// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("Document ready");

//GET TOOLS
  $.getJSON("files/resources/alpha.json", function(data) {
    console.log("ALPHA.JSON retrieved successfully");

    var resourcesHtml = "";

    //Iterate through the file and input the values as HTML elements
    $.each(data, function(key, val) {
      resourcesHtml += "<div>";
      resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
      resourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
      resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
      resourcesHtml += "<h2 class=' resource-name mb-1' >" + val['Resource name'] + "</h2>";
      resourcesHtml += "</div>";
      resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
      resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
      resourcesHtml += "</div>";
      resourcesHtml += "</a>";
      resourcesHtml += "</div>";
    });
    console.log("HTML generated");
    //input the HTML in the element with the #az-resources ID
    $("#az-resources").html(resourcesHtml);
    console.log("Alpha. JSON HTML inserted into page");
    }).fail(function() {
      console.log("Failed to retrieve ALPHA JSON data. Validate JSON using this editor: https://jsoneditoronline.org/");
    });

// END of functions
  console.log("End of document ready function");
});
