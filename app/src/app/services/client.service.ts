import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.api}/client/getAllClients`, {})
  }

  getById(id: number) {
    return this.http.get(`${environment.api}/client/getById?id=${id}`, {})
  }

  getTotalsByCompany() {
    return this.http.get(`${environment.api}/client/getTotalsByCompany`, {})
  }
}
