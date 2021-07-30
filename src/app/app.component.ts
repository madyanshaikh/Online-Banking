import { Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Online-Banking';

  url = './assets/custom/custom.js';
  loadAPI!: Promise<unknown>;


  constructor(private router: Router) {
    var status = sessionStorage.getItem("isloggedin")
    if (status == null || status != 'True') {
      router.navigate(['welcome'])
    }
  }
  ngOnInit(): void {

    this.loadAPI = new Promise(resolve => {
      console.log("resolving promise...");
      this.loadScript();
    });
   
  }
  public loadScript() {
    console.log("preparing to load...");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  } 
  
  canvas: any;
  ctx: any;

    @ViewChild('mychart') mychart: any;
    ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx,{})}

}






