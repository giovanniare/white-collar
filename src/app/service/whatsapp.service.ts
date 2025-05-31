import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private baseUrl: string = "https://wa.me/529999490744?text=";

  constructor(public http: HttpClient) { }

  enviarInfoServicio(data: string) {
    return "Not implemented"
  }
}
