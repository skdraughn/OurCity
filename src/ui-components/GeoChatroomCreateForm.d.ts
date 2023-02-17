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
export declare type GeoChatroomCreateFormInputValues = {
    coordinates?: string[];
};
export declare type GeoChatroomCreateFormValidationValues = {
    coordinates?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoChatroomCreateFormOverridesProps = {
    GeoChatroomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoChatroomCreateFormProps = React.PropsWithChildren<{
    overrides?: GeoChatroomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GeoChatroomCreateFormInputValues) => GeoChatroomCreateFormInputValues;
    onSuccess?: (fields: GeoChatroomCreateFormInputValues) => void;
    onError?: (fields: GeoChatroomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoChatroomCreateFormInputValues) => GeoChatroomCreateFormInputValues;
    onValidate?: GeoChatroomCreateFormValidationValues;
} & React.CSSProperties>;
export default function GeoChatroomCreateForm(props: GeoChatroomCreateFormProps): React.ReactElement;
