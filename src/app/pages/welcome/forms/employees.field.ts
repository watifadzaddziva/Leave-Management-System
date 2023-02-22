import { FormlyFieldConfig } from '@ngx-formly/core';

export const EmployeesFields = function (): FormlyFieldConfig[] {
    return [
      {
        key: 'firstName',
        type: 'input',
        templateOptions: {
          label: 'First Name',
          placeholder: 'Enter name',
          required: true,
        }
      },
      {
        key: 'lastName',
        type: 'input',
        templateOptions: {
          label: 'Last Name',
          placeholder: 'Enter surname',
          required: true,
        }
      },

      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Enter email',
          required: true,
        }
      },
  
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          placeholder: 'Enter username',
          required: true,
        }
      },
  
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          placeholder: 'Enter Password',
          required: true,
        }
      },
     
      {
        key: 'gender',
        type: 'select',
        templateOptions: {
          label: 'Gender',
          placeholder: 'select gender',
          required: true,
          options: [
            { value: 'Female', label: 'Female' },
            { value: 'Male', label: 'Male' },
           
          ]
        }
      },
  
      {
        key: 'dateOfBirth',
        type: 'input',
        templateOptions: {
          label: 'Date Of Birth',
          placeholder: 'Enter Date Of Birth',
          type: 'date',
          required: true,
        }
      },
  
      
    ]
  }
  