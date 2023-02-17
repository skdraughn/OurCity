/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GeoChatroom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GeoChatroomUpdateFormInputValues = {
    coordinates?: string[];
};
export declare type GeoChatroomUpdateFormValidationValues = {
    coordinates?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GeoChatroomUpdateFormOverridesProps = {
    GeoChatroomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coordinates?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GeoChatroomUpdateFormProps = React.PropsWithChildren<{
    overrides?: GeoChatroomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    geoChatroom?: GeoChatroom;
    onSubmit?: (fields: GeoChatroomUpdateFormInputValues) => GeoChatroomUpdateFormInputValues;
    onSuccess?: (fields: GeoChatroomUpdateFormInputValues) => void;
    onError?: (fields: GeoChatroomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GeoChatroomUpdateFormInputValues) => GeoChatroomUpdateFormInputValues;
    onValidate?: GeoChatroomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GeoChatroomUpdateForm(props: GeoChatroomUpdateFormProps): React.ReactElement;
