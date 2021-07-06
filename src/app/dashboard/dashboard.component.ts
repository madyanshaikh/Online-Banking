import { Identifiers } from '@angular/compiler';
import { Component, OnInit, Query, } from '@angular/core';
declare var $: any;
declare const feather: any;





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


  
      
  



export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    
    feather.replace();


      $('#myAcc').click(() => {
        $('.sidebar-item').removeClass('active');
        $('#myAcc').addClass('active');
    });

    $('#myPay').click(() => {
      $('.sidebar-item').removeClass('active');
      $('#myPay').addClass('active');
  });

  $('#mySet').click(() => {
    $('.sidebar-item').removeClass('active');
    $('#mySet').addClass('active');
});
$('#myServ').click(() => {
  $('.sidebar-item').removeClass('active');
  $('#myServ').addClass('active');
});
$('#myTrans').click(() => {
  $('.sidebar-item').removeClass('active');
  $('#myTrans').addClass('active');
});
$('#myCard').click(() => {
  $('.sidebar-item').removeClass('active');
  $('#myCard').addClass('active');
});
$('#myHome').click(() => {
  $('.sidebar-item').removeClass('active');
  $('#myHome').addClass('active');
});


  

    // $(document).ready(() => {
    //   $(".sidebar-item").click( ($: (arg0: string | this) => { (): any; new(): any; removeClass: { (arg0: string): void; new(): any; }; addClass: { (arg0: string): void; new(): any; }; }) => {
    //       $(".sidebar-item").removeClass("active");
    //       $(this).addClass("active");
          
            
    //   });
    //   });
    
    


    $(function() {
      const SimpleBar =  (document.getElementsByClassName("js-simplebar")[0]);
    
      $(".sidebar-toggle").on("click", function() {
        $(".sidebar")
          .toggleClass("collapsed")
          .one("transitionend", function() {
            setTimeout(function() {
              window.dispatchEvent(new Event("resize"));
            }, 100);
          });
      });
    });

    
    
  }
 
}
