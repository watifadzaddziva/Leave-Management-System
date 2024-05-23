import { FormlyFieldConfig } from "@ngx-formly/core";

export const EmployeesReportFields = function get(employees_list:Array<any>): FormlyFieldConfig[] {
  return [
    {
      key: 'id',
      type: 'select',
      templateOptions: {
        label: 'Employees',
        placeholder:'select employee',
        options:employees_list,

      },
    },

  ];
};
