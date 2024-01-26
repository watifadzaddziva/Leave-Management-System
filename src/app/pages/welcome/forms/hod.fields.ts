import { FormlyFieldConfig } from '@ngx-formly/core';

export const HODFields = function get(departments:Array<any>, employees:Array<any>): FormlyFieldConfig[] {
    return [
        {
            key: 'departmentId',
            type: 'select',
            templateOptions: {
              label: 'Department',
              placeholder: 'Select name',
              required: true,
              options:departments
            }
          },
      { 
        key: 'employeeId',
        type: 'select',
        templateOptions: {
          label: 'Employee',
          placeholder: 'Select name',
          required: true,
          options:employees
        }
      },
      
     
  
    ]
  }
  