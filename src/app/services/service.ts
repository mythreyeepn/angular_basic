import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../Models/api.response'

@Injectable()

export class ApiServices {

    constructor(private http: HttpClient) {
    }
    baseUrl: string = 'http://localhost:8080/users/';

    getData(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl)
    }

    postData(users) : Observable<ApiResponse>{
        return this.http.post<ApiResponse>(this.baseUrl,users)
    }

    editData(id): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl + id)
    }
    updateData(users) : Observable<ApiResponse>{
        return this.http.put<ApiResponse>( this.baseUrl + users.id, users)
    }
}