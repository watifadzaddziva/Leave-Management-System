import { FormlyFieldConfig } from "@ngx-formly/core";

export const EmployeesReportFields = function (
  events: Array<any>,
): FormlyFieldConfig[] {
  return [
    {
      key: 'eventName',
      type: 'select',
      templateOptions: {
        label: 'Event',
        options: events,

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
