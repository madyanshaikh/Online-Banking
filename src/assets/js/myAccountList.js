$(document).ready(function(){
  $('#myTable').dataTable({
    responsive: true,
      stateSave: true,
      "bDestroy": true,
      "bLengthChange": false,
      "pagingType": "simple_numbers",
      pageLength : 5,
      "bInfo" : false,
      "searching": false,
      pageLength : 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
      language: {
        paginate: {
          next: '<i class="fas fa-chevron-right"></i>,',
          previous: '<i class="fas fa-chevron-left"></i>' 
        }
      }
    
    });
    $('#mySecondTable').dataTable({
      responsive: true,
      stateSave: true,
      "bDestroy": true,
      "bLengthChange": false,
      "pagingType": "simple_numbers",
      pageLength : 5,
      "bInfo" : false,
      "searching": false,
      pageLength : 5,
    lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],
      language: {
        paginate: {
          next: '<i class="fas fa-chevron-right"></i>',
          previous: '<i class="fas fa-chevron-left"></i>' 
        }
      }
    
    });
});