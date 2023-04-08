
// JavaScript

  $(document).ready(function() {
    console.log("CLIENTS: Document ready");

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
  console.log("CLIENTS: End of document ready function");
});
