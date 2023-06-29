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
              // min: currentDateString,
  
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
          
      {
        key: 'leaveType',
        type: 'select',
        templateOptions: {
          label: 'Leave Type',
          placeholder: '',
          required: true,
          options: [
            { value: "Sick", label: 'Sick' },
            { value: 'Annual', label: 'Annual' },
            { value: 'Unpaid', label: 'Unpaid' },
            { value: "Maternity", label: 'Maternity' },
            { value: 'Study', label: 'Study' },
            { value: 'Special', label: 'Special' },
           
          ]
        }
      },
     
      {
        key: 'reason',
        type: 'textarea',
        templateOptions: {
          label: 'Reason',
          placeholder: '',
          required: true,
        }
      },
     
    ]
  }
  