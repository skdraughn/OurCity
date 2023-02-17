/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatroomCreateFormInputValues = {
    userIDs?: string[];
    isGroup?: boolean;
    chatroomPic?: string;
    name?: string;
};
export declare type ChatroomCreateFormValidationValues = {
    userIDs?: ValidationFunction<string>;
    isGroup?: ValidationFunction<boolean>;
    chatroomPic?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatroomCreateFormOverridesProps = {
    ChatroomCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userIDs?: PrimitiveOverrideProps<TextFieldProps>;
    isGroup?: PrimitiveOverrideProps<SwitchFieldProps>;
    chatroomPic?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatroomCreateFormProps = React.PropsWithChildren<{
    overrides?: ChatroomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChatroomCreateFormInputValues) => ChatroomCreateFormInputValues;
    onSuccess?: (fields: ChatroomCreateFormInputValues) => void;
    onError?: (fields: ChatroomCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatroomCreateFormInputValues) => ChatroomCreateFormInputValues;
    onValidate?: ChatroomCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChatroomCreateForm(props: ChatroomCreateFormProps): React.ReactElement;
