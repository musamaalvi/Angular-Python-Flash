import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'favComponent',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css']
})
export class FavoriteComponentComponent implements OnInit {
  @Input() checkingProperty = false;
  @Output() etc = new EventEmitter();
  serverData: JSON;
  employeeData: JSON;

  constructor(private httpClient: HttpClient) {
  }

  onClick(pyhtonCode) {
    //console.log("Fav Compoenent .ts file ", this.checkingProperty);
    //this.etc.emit("usama");
    
    var text = pyhtonCode.value;
    this.sayHi(text);
  }

  sayHi(text) {
    // this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
    //   this.serverData = data as JSON;
      
    //   console.log(this.serverData);
    // })
    //////////////for posting
    this.httpClient.post('http://127.0.0.1:5002/processText', JSON.stringify(text)).subscribe(data => {
      this.serverData = data as JSON;
      
      console.log(this.serverData["some_message"]);
    })
  }
  ngOnInit() {
  }

}
