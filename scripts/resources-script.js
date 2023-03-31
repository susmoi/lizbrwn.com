// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("Document ready");



//GET TOOLS
  $.getJSON("files/resources/tools.json", function(data) {
    console.log("JSON retrieved successfully");

    var resourcesHtml = "";

    //Iterate through the file and input the values as HTML elements
    $.each(data, function(key, val) {
      resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
      resourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
      resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
      resourcesHtml += "<h5 class='mb-1' style='color:#FF6600'>" + val['Resource name'] + "</h5>";
      resourcesHtml += "</div>";
      resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
      resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
      resourcesHtml += "</div>";
      resourcesHtml += "</a>";
    });
    console.log("HTML generated");
    //input the HTML in the element with the #tools-resources ID
    $("#tools-resources").html(resourcesHtml);
    console.log("HTML inserted into page");
  }).fail(function() {
    console.log("Failed to retrieve JSON data");
  });


  //GET GUIDES
    $.getJSON("files/resources/guides.json", function(data) {
      console.log("JSON retrieved successfully");

      var resourcesHtml = "";

      //Iterate through the file and input the values as HTML elements
    $.each(data, function(key, val) {
        resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
        resourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
        resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
        resourcesHtml += "<h5 class='mb-1' style='color:#FF6600'>" + val['Resource name'] + "</h5>";
        resourcesHtml += "</div>";
        resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
        resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
        resourcesHtml += "</div>";
        resourcesHtml += "</a>";
      });
      console.log("HTML generated");
        //input the HTML in the element with the #guides-resources ID
      $("#content-resources").html(resourcesHtml);
      console.log("HTML inserted into page");
    }).fail(function() {
      console.log("Failed to retrieve JSON data");
    });




  //GET CONTENT
    $.getJSON("files/resources/content.json", function(data) {
      console.log("JSON retrieved successfully");

      var resourcesHtml = "";

      //Iterate through the file and input the values as HTML elements
    $.each(data, function(key, val) {
        resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
        resourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
        resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
        resourcesHtml += "<h5 class='mb-1' style='color:#FF6600'>" + val['Resource name'] + "</h5>";
        resourcesHtml += "</div>";
        resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
        resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
        resourcesHtml += "</div>";
        resourcesHtml += "</a>";
      });
      console.log("HTML generated");
        //input the HTML in the element with the #content-resources ID
      $("#content-resources").html(resourcesHtml);
      console.log("HTML inserted into page");
    }).fail(function() {
      console.log("Failed to retrieve JSON data");
    });

    //GET STATISTICS
      $.getJSON("files/resources/guides.json", function(data) {
        console.log("JSON retrieved successfully");

        var resourcesHtml = "";

        //Iterate through the file and input the values as HTML elements
      $.each(data, function(key, val) {
          resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
          resourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
          resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
          resourcesHtml += "<h5 class='mb-1' style='color:#FF6600'>" + val['Resource name'] + "</h5>";
          resourcesHtml += "</div>";
          resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
          resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
          resourcesHtml += "</div>";
          resourcesHtml += "</a>";
        });
        console.log("HTML generated");
          //input the HTML in the element with the #guides-resources ID
        $("#statistics-resources").html(resourcesHtml);
        console.log("HTML inserted into page");
      }).fail(function() {
        console.log("Failed to retrieve JSON data");
      });




// END of functions
  console.log("End of document ready function");
});
