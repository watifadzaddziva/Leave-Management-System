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
              key: 'leave_type',
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
            // {
              
          //   key: 'no_of_days',
          //     type: 'input',
          //     templateOptions: {
          //       label: 'Number of Days',
          //       placeholder: '',
          //       type:'number',
          //     }
          //   },
          //   {
          //       key: 'basic_salary',
          //       type: 'input',
          //       templateOptions: {
          //         label: 'Basic Salary',
          //         placeholder: '',
          //         type:'number',
          //         required: true,
          //       }
          //     },
          //     {
          //       key: 'allowance',
          //       type: 'input',
          //       templateOptions: {
          //         label: 'Allowances',
          //         placeholder: '',
          //         type:'number',
          //         required: true,
          //       }
          //     },
          //     {
          //   key: 'other_deductions',
          //   type: 'input',
          //   templateOptions: {
          //     label: 'Deductions',
          //     placeholder: '',
          //     type: 'number',
          //     required: true,
          //   }
          // },
          
    ]
  }
  