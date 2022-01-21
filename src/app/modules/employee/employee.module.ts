import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';



@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule
  ],
  exports:[NewEmployeeComponent] //so that root module can access this component
})
export class EmployeeModule { }
