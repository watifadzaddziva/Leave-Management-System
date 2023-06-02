import { IField ,FieldType} from "./ifield"

export const FILTER_REPORTS_FIELDS = function get(item?: any, disabled?: boolean | undefined): IField[]{
    return [
      
        { label: 'Start Date', name: 'startDate', col: 'col-md-6',type: FieldType.Date, required: false, value: item ? item.startDate : null, disabled: disabled ? disabled : false},
     
        { label: 'End Date', name: 'endDate', col: 'col-md-6',type: FieldType.Date, required: false, value: item ? item.endDate : null, disabled: disabled ? disabled : false},
     
       
    ]
}
