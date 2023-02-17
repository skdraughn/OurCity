/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BusinessChatroom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessChatroomUpdateFormInputValues = {
    messages?: string[];
    businessID?: string;
};
export declare type BusinessChatroomUpdateFormValidationValues = {
    messages?: ValidationFunction<string>;
    businessID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessChatroomUpdateFormOverridesProps = {
    BusinessChatroomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    messages?: PrimitiveOverrideProps<TextFieldProps>;
    businessID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessChatroomUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessChatroomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessChatroom?: BusinessChatroom;
    onSubmit?: (fields: BusinessChatroomUpdateFormInputValues) => BusinessChatroomUpdateFormInputValues;
    onSuccess?: (fields: BusinessChatroomUpdateFormInputValues) => void;
    onError?: (fields: BusinessChatroomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessChatroomUpdateFormInputValues) => BusinessChatroomUpdateFormInputValues;
    onValidate?: BusinessChatroomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessChatroomUpdateForm(props: BusinessChatroomUpdateFormProps): React.ReactElement;
