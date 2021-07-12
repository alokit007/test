import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Customer } from '../app.component';
//import { debounceTime, switchMap} from "rxjs/Operator"

@Component({
  selector: "customer-search",
  templateUrl: "./customerSearch.component.html",
  styleUrls: ["./customerSearch.component.scss"]
})
export class CustomerSearch implements OnInit {
 @Input() customers: Customer[];
  searchForm :FormGroup;
  searchField : FormControl;
  result:any;


  constructor(private fb : FormBuilder) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchForm = this.fb.group({
      search: this.searchField
    })

    this.searchField.valueChanges.pipe(
      debounceTime(400),
      switchMap(abc => this.data)
    ).subscribe((res)=>{
      this.result = res ;
    })    
    }

    data = [
      {

        name: 'abc ', value : 'abc'
    }
  ] 

  
}


function switchMap(arg0: (abc: any) => { name: string; value: string; }[]): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error("Function not implemented.");
}

function debounceTime(arg0: number): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error("Function not implemented.");
}

