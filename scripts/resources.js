// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("Document ready");

//GET TOOLS
  $.getJSON("files/resources/alpha.json", function(data) {
    console.log("Retrieved successfully: alpha.json");

    var resourcesHtml = "";

    //Iterate through the file and input the values as HTML elements
    $.each(data, function(key, val) {
      resourcesHtml += "<div>";
      resourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
      resourcesHtml += "<div class='resource-item list-group-item-action'>";
      resourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
      resourcesHtml += "<h2 class=' resource-name mb-1' >" + val['Resource name'] + "</h2>";
      resourcesHtml += "</div>";
      resourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
      resourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
      resourcesHtml += "</div>";
      resourcesHtml += "</a>";
      resourcesHtml += "</div>";
    });
    console.log("A-Z resources HTML generated");
    //input the HTML in the element with the #az-resources ID
    $("#az-resources").html(resourcesHtml);

    //create Writing resources HTML
    var writingResourcesHtml = "";
    $.each(data, function(key, val) {
      if (val['Resource tag'] === "Writing") {
        writingResourcesHtml += "<div>";
        writingResourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
        writingResourcesHtml += "<div class='resource-item list-group-item-action'>";
        writingResourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
        writingResourcesHtml += "<h2 class='resource-name mb-1'>" + val['Resource name'] + "</h2>";
        writingResourcesHtml += "</div>";
        writingResourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
        writingResourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
        writingResourcesHtml += "</div>";
        writingResourcesHtml += "</a>";
        writingResourcesHtml += "</div>";
      }
    });
    console.log("writing resources HTML generated");
    // input the HTML in the element with the #writing-resources ID
    $("#writing-resources").html(writingResourcesHtml);
    console.log("Writing resources HTML inserted into page");

    //create Writing resources HTML
    var mostFrequentResourcesHtml = "";
    $.each(data, function(key, val) {
      if (val['Resource placement'] === "mostfrequent") {
        mostFrequentResourcesHtml += "<div>";
        mostFrequentResourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
        mostFrequentResourcesHtml += "<div class='resource-item most-frequent list-group-item-action'>";
        mostFrequentResourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
        mostFrequentResourcesHtml += "<h2 class='resource-name mb-1'>" + val['Resource name'] + "</h2>";
        mostFrequentResourcesHtml += "</div>";
        mostFrequentResourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
        mostFrequentResourcesHtml += "<small class='text-muted'>" + val['Resource tag'] + "</small>";
        mostFrequentResourcesHtml += "</div>";
        mostFrequentResourcesHtml += "</a>";
        mostFrequentResourcesHtml += "</div>";
      }
    });
    console.log("Most Frequent resources HTML generated");
    // input the HTML in the element with the #writing-resources ID
    $("#most-frequent-resources").html(mostFrequentResourcesHtml);
    console.log("Most Frequent resources HTML inserted into page");

    console.log("Alpha. JSON HTML inserted into page");
    }).fail(function() {
      console.log("Failed to retrieve ALPHA JSON data. Validate JSON using this editor: https://jsoneditoronline.org/");
    });

// END of functions
  console.log("End of document ready function");
});
