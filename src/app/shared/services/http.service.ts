import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    http = inject(HttpClient);

    url = 'http://localhost:5000/api';

    getServiceTypes() {
        return this.http.get(`${this.url}/service-types`);
    }

    getSeviceType(id: number) {
        return this.http.get(`${this.url}/service-types/${id}`);
    }

    createServiceType(serviceType: any) {
        return this.http.post(`${this.url}/service-types`, serviceType);
    }

    updateServiceType(serviceType: any) {
        return this.http.patch(`${this.url}/service-types/${serviceType._id}`, serviceType);
    }

    deleteServiceType(id: string) {
        return this.http.delete(`${this.url}/service-types/${id}`);
    }

    getClients() {
        return this.http.get(`${this.url}/clients`);
    }

    getClient(id: string) {
        return this.http.get(`${this.url}/clients/${id}`);
    }

    createClient(client: any) {
        return this.http.post(`${this.url}/clients`, client);
    }

    updateClient(client: any) {
        return this.http.patch(`${this.url}/clients/${client._id}`, client);
    }

    deleteClient(id: string) {
        return this.http.delete(`${this.url}/clients/${id}`);
    }
}
