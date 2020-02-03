import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGard implements CanActivate{


    constructor(private _router : Router, private _authService : AuthService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean>|boolean{

        if(this.isConnected()){
            console.log("Is connected");
            return true;
        }
        console.log("is not connected");
        this._router.navigate(['/login']);
        return false;
        
    }

    isConnected(){
        return this._authService.isUserconnected();
    }

}