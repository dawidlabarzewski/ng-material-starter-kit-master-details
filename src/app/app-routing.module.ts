import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {EmployeeListComponentModule} from './components/employee-list/employee-list.component-module';
import {UserServiceModule} from './services/user.service-module';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products-master-details',
    component: ProductListComponent
  }, {path: 'employees-master-details', component: EmployeeListComponent}, {
    path: 'crypto-master-details',
    component: CryptoListComponent
  }]), ProductListComponentModule, ProductServiceModule, EmployeeListComponentModule, UserServiceModule, CryptoListComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
