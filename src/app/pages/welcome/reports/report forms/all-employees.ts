import { FormlyFieldConfig } from "@ngx-formly/core";

export const EmployeesReportFields = function (
  
): FormlyFieldConfig[] {
  return [
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: 'Leave Status',
        options: [
          { value: 'APPROVED', label: 'Approved' },
          { value: 'PENDING', label: 'Pending' },,
          { value: 'REJECTED', label: 'Rejected' },
         
        ]

      },
    },
    {
      key: 'startDate',
      type: 'input',
      templateOptions: {
        label: 'Start Date',
        placeholder: 'Enter start date',
        type: 'date',
        required:true
      }
    },
    {
      key: 'endDate',
      type: 'input',
      templateOptions: {
        label: 'End Date',
        placeholder: 'Enter end date',
        type: 'date',
        required:true
      }
    },
  ];
};
