import { Component, OnInit, Query } from '@angular/core';
declare var $: any;
declare const feather: any;
declare var jquery: Query;




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    feather.replace();

    $(document).ready(() => {
      jquery("div").click( () => {
          $(this).css("background-color","red");
          
          // $(this).addClass("active");   
      });
      })

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
