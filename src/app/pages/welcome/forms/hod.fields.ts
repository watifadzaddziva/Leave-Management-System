import { FormlyFieldConfig } from '@ngx-formly/core';

export const HODFields = function get(departments:Array<any>, employees:Array<any>): FormlyFieldConfig[] {
    return [
        {
            key: 'departmentId',
            type: 'select',
            templateOptions: {
              label: 'Department',
              placeholder: 'Enter name',
              required: true,
              options:departments
            }
          },
      { 
        key: 'employeeId',
        type: 'select',
        templateOptions: {
          label: 'Employee',
          placeholder: 'Enter name',
          required: true,
          options:employees
        }
      },
      
     
  
    ]
  }
  