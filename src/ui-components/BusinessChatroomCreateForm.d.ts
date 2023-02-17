/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessChatroomCreateFormInputValues = {
    messages?: string[];
    businessID?: string;
};
export declare type BusinessChatroomCreateFormValidationValues = {
    messages?: ValidationFunction<string>;
    businessID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessChatroomCreateFormOverridesProps = {
    BusinessChatroomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    messages?: PrimitiveOverrideProps<TextFieldProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessChatroomCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessChatroomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessChatroomCreateFormInputValues) => BusinessChatroomCreateFormInputValues;
    onSuccess?: (fields: BusinessChatroomCreateFormInputValues) => void;
    onError?: (fields: BusinessChatroomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessChatroomCreateFormInputValues) => BusinessChatroomCreateFormInputValues;
    onValidate?: BusinessChatroomCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessChatroomCreateForm(props: BusinessChatroomCreateFormProps): React.ReactElement;
