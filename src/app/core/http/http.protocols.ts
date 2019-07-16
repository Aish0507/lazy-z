import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import * as pe from 'parse-error';
import {environment} from "../../../environments/environment";
import {AppInjector} from "../../app.module";

export class HttpProtocols {
    constructor() {

    }

    //************************************
    //********* Dependencies *************
    //************************************
    static get router() {
        return AppInjector.get(Router);
    }

    static get http() {
        return AppInjector.get(HttpClient);
    }

    static get dialog() {
        return AppInjector.get(MatDialog);
    }


    static getUrlParams(route: any) {
        return new Promise(resolve => {
            route.params.subscribe(params => resolve(params));
        })
    }

    // global function that will help use handle promise rejections, this article talks
    // about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
    static to(promise, parse?) {
        return promise.then(data => {
            return [null, data];
        }).catch(err => {
            if (parse === false) return [err];
            return [pe(err)]
        });
    }

    // TE stands for Throw Error
    static TE = function (err_message: string, log?: boolean) {
        if (log === true) {
            console.error(err_message);
        }
        const config = {data: {title: 'Alert!', body: err_message}};
        alert(JSON.stringify(config));
        throw new Error(err_message);
    }

    static route(uri) {
        this.router.navigate([uri]);
    }

    static getApiUrl() {
        return this.getEnvObj().steerUrl;
    }

    static getEnvObj() {
        return environment;
    }

    static apiHeaders(headers: any, isFormData?: any) {
        if (isFormData !== undefined) {
            headers.append('mimeType', 'multipart/form-data');
        } else {
            headers.append('Content-Type', 'application/json');
        }
        headers.append('Authorization', 'STEER-#$@');
        return headers;
    }

    static responder(err, res) {
        let send;
        if (err) send = err;
        if (res) send = res;
        return JSON.parse(JSON.stringify(send));
    }

    static async post(url, data, isFormData?: any) {
        let headers = new HttpHeaders();
        if (url[0] == '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers, isFormData);
        }
        let err, res;
        [err, res] = await this.to(this.http.post(url, data, {headers: headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async put(url, data) {
        let headers = new HttpHeaders();
        if (url[0] == '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers);
        }

        let err, res;
        [err, res] = await this.to(this.http.put(url, data, {headers: headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async patch(url, data) {
        let headers = new HttpHeaders();
        if (url[0] == '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers);
        }
        let err, res;
        [err, res] = await this.to(this.http.patch(url, data, {headers: headers}).toPromise(), true);
        return this.responder(err, res);
    }

    static async delete(url, data?: any) {
        const headers = new HttpHeaders();
        const httpOptions = {
            headers: this.apiHeaders(headers),
            body: data
        };
        if (url[0] == '/') {
            url = this.getApiUrl() + url;
        }
        let err, res;
        [err, res] = await this.to(this.http.delete(url, httpOptions).toPromise(), true);
        return this.responder(err, res);
    }

    static async get(url) {
        var headers = new HttpHeaders();
        if (url[0] == '/') {
            url = this.getApiUrl() + url;
            headers = this.apiHeaders(headers);
        }
        let err, res;
        [err, res] = await this.to(this.http.get(url, {headers: headers}).toPromise(), false);
        //console.log(await this.to(this.http.get(url, {headers: headers}).toPromise(), false));
        return this.responder(err, res);
    }
}