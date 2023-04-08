// Places nav on desktop and mobile
// JavaScript
// import files/resources JSON files

  $(document).ready(function() {
    console.log("Document ready");

    $('#table_id').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      "order": [[1, "asc"]],
      "columnDefs": [{
        "targets": 'no-sort',
        "orderable": false,
      }],
      "ajax": {
        "url": "./files/clients.json",
        "dataSrc": ""
      },
      "columns": [
        { "data": "Company" },
        { "data": "Date" },
        { "data": "Industry" },
        { "data": "Service" },
      ]
    });

  // END of functions
  console.log("End of document ready function");
});
