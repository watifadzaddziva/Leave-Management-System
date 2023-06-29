import { FormlyFieldConfig } from '@ngx-formly/core';

export const DepartmentFields = function (): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter name',
          required: true,
        }
      },
     
  
    ]
  }
  