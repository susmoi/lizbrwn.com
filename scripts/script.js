// JavaScript
// import files/resources JSON files

$(document).ready(function(){

  // Make sure the document is loaded
  // for each JSON file, create html



});

function jsonToHtml(jsonDict) {
  const resourceLink = jsonDict["Resource link"];
  const resourceName = jsonDict["Resource name"];
  const resourceDescription = jsonDict["Resource description"];
  const resourceTag = jsonDict["Resource tag"];

  const html = `
                <a href="${resourceLink}">
                  <div class="resource-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                      <h2 class="resource-name mb-1">${resourceName}</h2>
                    </div>
                    <p class="resource-text mb-1">${resourceDescription}</p>
                    <small class="text-muted">${resourceTag}</small>
                  </div>
                </a>
                  `;
                  return html;
};

// Function to fetch JSON files from files/resources
async function fetchJsonFiles() {
  try {
    // List of JSON filenames to import
    const jsonFilenames = ['tools.json', 'guides.json', 'content.json', 'statistics',];
    // creates an array of promises based on the jasonFilenames array.
    //const jsonFiles = await Promise.all(jsonFilenames.map(async (filename) => {

    for (const filename of jsonFilenames) {
      console.log(filename);

      const response = await fetch(`files/resources/${filename}`);
      if (response.ok) {
        return await response.json();
      }

      else {
        throw new Error(`>>>fetching ${filename}: ${response.statusText}<<<`);
            }
      }
    //}));

    return jsonFiles;

        } catch (error) {
          console.error('*Error fetching JSON files:*', error);
          return [];
        }
      }

// Function to process JSON dictionaries
async function processJsonFiles() {
  const jsonFiles = await fetchJsonFiles();

  // Assuming you have a container div with id 'resources-container'
  const resourcesContainer = document.getElementById('resources-container');

  for (const jsonFile of jsonFiles) {
    for (const jsonDict of jsonFile) {
      const html = jsonToHtml(jsonDict);
      resourcesContainer.innerHTML += html;
    }
  }
}

// Call the processJsonFiles function
processJsonFiles();
