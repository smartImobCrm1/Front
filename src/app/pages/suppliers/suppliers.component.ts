import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, ModelSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DigitOnlyDirective } from '../../shared/directives/digit-only.directive';
import { MurCurrencyPipe } from '../../shared/pipes/mur-currency.pipe';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { HttpService } from '../../shared/services/http.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-suppliers',
    imports: [
        TableModule,
        MultiSelectModule,
        SelectModule,
        InputIconModule,
        TagModule,
        InputTextModule,
        SliderModule,
        ProgressBarModule,
        ToggleButtonModule,
        ToastModule,
        CommonModule,
        FormsModule,
        ButtonModule,
        RatingModule,
        RippleModule,
        IconFieldModule,
        DialogModule,
        SupplierFormComponent,
        MurCurrencyPipe,
        DigitOnlyDirective,
        DeleteConfirmationDialogComponent
    ],
    templateUrl: './suppliers.component.html',
    styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent {
    httpService = inject(HttpService);
    expenseType: ModelSignal<string> = model.required();
    supplier = {
        name: '',
        expenseName: '',
        expenseType: '',
        tel: ''
    };
    isDialogVisible: any;
    newServiceName: any;
    newServicePrice: any;
    showDeleteConfirmationDialog: any;
    supplierToDeleteId = '';
    suppliers: any = [];
    suppliersSignal = computed(() => signal(this.suppliers()));

    constructor() {
        this.suppliers = toSignal(this.httpService.getSuppliers());
    }

    showDialog() {
        this.isDialogVisible = true;
    }
    servicesSignal() {
        throw new Error('Method not implemented.');
    }
    loading: unknown;
    clear(_t15: Table) {
        throw new Error('Method not implemented.');
    }
    onGlobalFilter(_t15: Table, $event: Event) {
        throw new Error('Method not implemented.');
    }
    updateSupplier(_t34: any, arg1: string, $event: FocusEvent) {
        throw new Error('Method not implemented.');
    }
    onDeleteSupplierCLick(arg0: any) {
        throw new Error('Method not implemented.');
    }
    hideDialog() {
        this.isDialogVisible = false;
    }

    createSupplier() {
        this.supplier.expenseType = this.expenseType();
        this.httpService.createSupplier(this.supplier).subscribe(() => {
            this.isDialogVisible = false;
        });
    }

    deleteService() {
        this.httpService.deleteSupplier(this.supplierToDeleteId).subscribe(() => {});
    }
}
