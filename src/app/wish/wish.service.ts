import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient ) { }

  private getStandarOptions() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({
        fromObject: {}
      })
    };
  }

  getWishes() {
    let options = this.getStandarOptions()
    
    options.params = options.params.set("format", "json")

    return this.http.get('assets/wishes.json', options);
  }

  private addWish(wish: any) {
    let options = this.getStandarOptions()

    options.headers = options.headers.set('Authorization', 'Value-needed-for-authorization');
    this.http.post('assets/wishes.json', wish, options)
  }
}


// providehttpclient en app.config.ts