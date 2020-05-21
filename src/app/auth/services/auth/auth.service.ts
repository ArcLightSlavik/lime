import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

import {Observable, throwError} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

import * as firebase from 'firebase';

import {isNull} from 'lodash';


@Injectable()
export class AuthService {

    constructor(private fireAuth: AngularFireAuth) {

    }

    signInWithEmailAndPassword(email: string, password: string): Observable<firebase.auth.UserCredential | void> {
        if (!isNull(email) && !isNull(password)) {
            return fromPromise(this.fireAuth.auth.signInWithEmailAndPassword(email, password));
        } else {
            return throwError('Email or password is wrong');
        }
    }

    registerWithEmailAndPassword(email: string, password: string): Observable<firebase.auth.UserCredential> {
        if (!isNull(email) && !isNull(password)) {
            return fromPromise(this.fireAuth.auth.createUserWithEmailAndPassword(email, password));
        } else {
            throwError('Provide correct email and password');
        }
    }

    logout(): Observable<void> {
        return fromPromise(this.fireAuth.auth.signOut());
    }
}
