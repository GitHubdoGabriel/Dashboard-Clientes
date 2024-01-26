import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  clientDetails: any;
  clientRealties: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.clientDetails = params;
    })

    this.clientService.getById(this.clientDetails._id).subscribe(
      result => {
        console.log(result)
        this.clientRealties = result
      },
      error => {
        console.log(error)
      }
    )
  }

  calcRealties(sumRealties){
    return sumRealties.reduce((sum, item) => sum + parseInt(item.realties), 0) 
  }

}
