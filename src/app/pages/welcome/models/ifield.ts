import { FieldType } from "./field-type.enum";
import { IFieldCompare } from "./ifield-compare";

export interface IField {
    label: string;
    icon?: string;
    value?: any;
    type?: FieldType;
    name: string;
    required: boolean;
    options?: Options;
    source?: string;
    compare?: IFieldCompare;
    validation?: any;
    subSelection?: string;
    col?: string;
    disabled?: boolean;
}

export interface Options{
    url?: string;
    value?: any;
    name?: string;
    data?: any;
    loaded?: boolean;
}

export { FieldType };
