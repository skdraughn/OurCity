/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Chatroom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatroomUpdateFormInputValues = {
    userIDs?: string[];
    isGroup?: boolean;
    chatroomPic?: string;
    name?: string;
};
export declare type ChatroomUpdateFormValidationValues = {
    userIDs?: ValidationFunction<string>;
    isGroup?: ValidationFunction<boolean>;
    chatroomPic?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatroomUpdateFormOverridesProps = {
    ChatroomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userIDs?: PrimitiveOverrideProps<TextFieldProps>;
    isGroup?: PrimitiveOverrideProps<SwitchFieldProps>;
    chatroomPic?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatroomUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatroomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatroom?: Chatroom;
    onSubmit?: (fields: ChatroomUpdateFormInputValues) => ChatroomUpdateFormInputValues;
    onSuccess?: (fields: ChatroomUpdateFormInputValues) => void;
    onError?: (fields: ChatroomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatroomUpdateFormInputValues) => ChatroomUpdateFormInputValues;
    onValidate?: ChatroomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatroomUpdateForm(props: ChatroomUpdateFormProps): React.ReactElement;
