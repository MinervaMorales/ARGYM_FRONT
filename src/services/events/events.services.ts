import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6
import { Users } from 'src/models/Users';

@Injectable({
    providedIn: 'root'
})
export class Events {

    private selectedLanguage = new Subject<string>();
    private user = new Subject<Users>();
    constructor() { }

    public getLanguageObservable(): Observable<string> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data) {
        this.selectedLanguage.next(data);
    }

    public getUserObservable(): Observable<Users>{
        return this.user.asObservable();
    }

    public setUserData(data){
        this.user.next(data);
    }
}