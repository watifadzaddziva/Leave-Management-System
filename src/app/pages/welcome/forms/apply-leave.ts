import { FormlyFieldConfig } from '@ngx-formly/core';

export const ApplyLeaveFieldsFields = function (): FormlyFieldConfig[] {
  const currentDate= new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
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
            { value: "SICK_LEAVE", label: 'Sick Leave' },
            { value: 'VACATION', label: 'Vacation' },
            { value: 'UNPAID_LEAVE', label: 'Unpaid Leave' },
           
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
  