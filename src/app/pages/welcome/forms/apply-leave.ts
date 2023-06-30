import { FormlyFieldConfig } from '@ngx-formly/core';

export const ApplyLeaveFieldsFields = function (): FormlyFieldConfig[] {
    return [
        {
                key: 'employeeId',
                type: 'input',
                templateOptions: {
                  label: 'Employee',
                  placeholder: '',
                  required: true,
                },
                hide: true, 
              },
              {
            key: 'fromDate',
            type: 'input',
            templateOptions: {
              label: 'From',
              placeholder: '',
              type: 'date',
              required: true,
  
            }
          },
          {
            key: 'toDate',
            type: 'input',
            templateOptions: {
              label: 'To',
              placeholder: '',
              type: 'date',
              required: true,
            }
          },
    ]
  }
  