import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class HomeServices {
    private headers: any = new HttpHeaders({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '3c31e6a5852d492c81399dc3307f72cd'
    });
    private url: string = 'https://southeastasia.api.cognitive.microsoft.com/face/v1.0';
    constructor(public http: HttpClient) {

    }

    detect(data): Promise<any> {
        return this.http.post(this.url + '/detect', { url: data }, { headers: this.headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    verify(faceId1, faceId2): Promise<any> {
        return this.http.post(this.url + '/verify', { faceId1: faceId1, faceId2: faceId2 }, { headers: this.headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}