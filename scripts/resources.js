// JavaScript
// import files/resources JSON files

$(document).ready(function() {
  console.log("RESOURCES: Document ready");

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
      resourcesHtml += "<small class='resource-text-muted'>" + val['Resource tag'] + "</small>";
      resourcesHtml += "</div>";
      resourcesHtml += "</a>";
      resourcesHtml += "</div>";
    });
    console.log("Generated successfully: A-Z resources");
    //input the HTML in the element with the #az-resources ID
    $("#az-resources").html(resourcesHtml);
    console.log("Inserted successfully: A-Z resources");

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
        writingResourcesHtml += "<small class='resource-text-muted'>" + val['Resource tag'] + "</small>";
        writingResourcesHtml += "</div>";
        writingResourcesHtml += "</a>";
        writingResourcesHtml += "</div>";
      }
    });
    console.log("Generated successfully: Writing resources");
    // input the HTML in the element with the #writing-resources ID
    $("#writing-resources").html(writingResourcesHtml);
    console.log("Inserted successfully: Writing resources");

    //create Writing resources HTML
    var mostFrequentResourcesHtml = "";
    $.each(data, function(key, val) {
      if (val['Resource placement'] === "mostfrequent") {
        mostFrequentResourcesHtml += "<div>";
        mostFrequentResourcesHtml += "<a href='" + val['Resource link'] + "' class='resource-link' target='_blank'>";
        mostFrequentResourcesHtml += "<div class='resource-item resource-most-frequent list-group-item-action'>";
        mostFrequentResourcesHtml += "<div class='d-flex w-100 justify-content-between'>";
        mostFrequentResourcesHtml += "<h2 class='resource-name mb-1'>" + val['Resource name'] + "</h2>";
        mostFrequentResourcesHtml += "</div>";
        mostFrequentResourcesHtml += "<p class='resource-text mb-1'>" + val['Resource description'] + "</p>";
        mostFrequentResourcesHtml += "<small class='resource-text-muted'>" + val['Resource tag'] + "</small>";
        mostFrequentResourcesHtml += "</div>";
        mostFrequentResourcesHtml += "</a>";
        mostFrequentResourcesHtml += "</div>";
      }
    });
    console.log("Generated successfully: Most Frequent resources");
    // input the HTML in the element with the #most-frequent-resources ID
    $("#most-frequent-resources").html(mostFrequentResourcesHtml);
    console.log("Inserted successfully: Most Frequent resources");

    }).fail(function() {
      console.log("Failed to retrieve: alpha.json (Validate JSON using this editor: https://jsoneditoronline.org/)");
    });

// END of functions
  console.log("RESOURCES: End of document ready function");
});
