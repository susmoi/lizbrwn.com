// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("Document ready");

//GET CONTENT
  $.getJSON("files/resources/content.json", function(data) {
    console.log("JSON retrieved successfully");

    var resourcesHtml = "";

    $.each(data, function(key, val) {
      resourcesHtml += "<div class='resource'>";
      resourcesHtml += "<a href='" + val['Resource link'] + "'>" + val['Resource name'] + "</a>";
      resourcesHtml += "<p>" + val['Resource description'] + "</p>";
      resourcesHtml += "<span>" + val['Resource tag'] + "</span>";

      if (val['Resource placement']) {
        resourcesHtml += "<span>" + val['Resource placement'] + "</span>";
      }

      resourcesHtml += "</div>";
    });

    console.log("HTML generated");

    $("#resources").html(resourcesHtml);
    console.log("HTML inserted into page");
  }).fail(function() {
    console.log("Failed to retrieve JSON data");
  });

//GET TOOLS
  $.getJSON("files/resources/tools.json", function(data) {
    console.log("JSON retrieved successfully");

    var resourcesHtml = "";

    $.each(data, function(key, val) {
      resourcesHtml += "<div class='resource'>";
      resourcesHtml += "<a href='" + val['Resource link'] + "'>" + val['Resource name'] + "</a>";
      resourcesHtml += "<p>" + val['Resource description'] + "</p>";
      resourcesHtml += "<span>" + val['Resource tag'] + "</span>";

      if (val['Resource placement']) {
        resourcesHtml += "<span>" + val['Resource placement'] + "</span>";
      }

      resourcesHtml += "</div>";
    });

    console.log("HTML generated");

    $("#resources").html(resourcesHtml);
    console.log("HTML inserted into page");
  }).fail(function() {
    console.log("Failed to retrieve JSON data");
  });









  console.log("End of document ready function");
});
