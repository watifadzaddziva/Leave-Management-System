import { FormlyFieldConfig } from '@ngx-formly/core';

export const CreatePayslipFields = function get(employees:Array<any>): FormlyFieldConfig[] {
    return [
        { 
            key: 'employeeId',
            type: 'select',
            templateOptions: {
              label: 'Employee',
              placeholder: 'Select name',
              required: true,
              options:employees
            }},
            {
              key: 'period',
              type: 'input',
              templateOptions: {
                label: 'As At',
                placeholder: '',
                type: 'date',
                required: true,
              }
            }
            ,  
            {
              key: 'leavetype',
              type: 'select',
              templateOptions: {
                label: 'Leave Applied(if any)',
                placeholder: '',
                required:true,
                options:[
                  {value:'Sick', label:'Sick Leave'},
                  {value:'Unpaid', label:'Unpaid Leave'},
                  {value:'Special', label:'Special Leave'},
                  {value:'Annual', label:'Annual Leave'},
                  {value:'None', label:'None'},
                ]
              }
            }, 
          
    ]
  }
  