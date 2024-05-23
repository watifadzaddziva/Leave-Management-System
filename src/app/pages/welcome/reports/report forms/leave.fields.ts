import { FormlyFieldConfig } from "@ngx-formly/core";

export const LeaveReportFields = function get(): FormlyFieldConfig[] {
  return [
    {
      key: 'id',
      type: 'select',
      templateOptions: {
        label: 'Leave Status',
        options: [
          { value: 'Approved', label: 'Approved' },
          { value: 'Pending', label: 'Pending' },,
          { value: 'Rejected', label: 'Rejected' },
          { value: 'Special', label: 'Special' },
          { value: 'Study', label: 'Study' },,
          { value: 'Maternity', label: 'Maternity' },
          
         
        ]

      },
    },
  ];
};
