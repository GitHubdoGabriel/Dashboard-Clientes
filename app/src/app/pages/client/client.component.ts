import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {

  dataBase: any;
  filter: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.getAll().subscribe(
      result => {
        this.dataBase = result
        console.log('Ok: ', this.dataBase)
      },
      error => {
        console.log(error)
      }
    )
  }

  sumRealties(data: any[]): number{
    return data.reduce((sum, item) => sum + parseInt(item.realties), 0)
  }
  
  sumEnterprises(data: any[]): number{
    var sum = 0;
    for(let ent in data){
      sum += data[ent].enterprises.length
    }
    return sum
  }

  sumRealtiesGeneral(data:any[]): number{
    var sum = 0;
    for(let rg in data){
      sum += data[rg].enterprises.reduce((sum, item) => sum + parseInt(item.realties), 0)
    }
    return sum
  }

  updateFilter(event: any){
    if(event.key == "Backspace"){
      this.cancelFilter()
    }
    this.filter = true;

    const val = event.target.value.toLowerCase();
    const temp = this.dataBase.filter(
      function (d: any) {
         return d.name.toLowerCase().indexOf(val) !== -1 || !val
       }
    )
    this.dataBase = temp
  }

  cancelFilter(){
    this.clientService.getAll().subscribe(
      result => {
        this.dataBase = result
      },
      error => {
        console.log(error)
      }
    )
    this.filter = false;
  }

  openDetails(row: any){
    console.log("Details", row)
    this.router.navigate(['/client-details'], {queryParams: row})
  }
}
