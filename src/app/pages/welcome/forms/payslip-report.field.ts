import { FormlyFieldConfig } from '@ngx-formly/core';

export const REPORTFields = function get( employees:Array<any>): FormlyFieldConfig[] {
    return [
      { 
        key: 'employeeId',
        type: 'select',
        templateOptions: {
          label: 'Employee(Optional)',
          placeholder: 'Select name',
          required: false,
          options:employees
        }
      },
      
     
  
    ]
  }
  