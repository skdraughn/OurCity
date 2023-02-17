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
export declare type BusinessCreateFormInputValues = {
    name?: string;
    shortNa?: string;
    address?: string;
    profilePic?: string;
    socials?: string[];
    rating?: number;
    bannerPic?: string;
    promoters?: string[];
};
export declare type BusinessCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    shortNa?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    profilePic?: ValidationFunction<string>;
    socials?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    bannerPic?: ValidationFunction<string>;
    promoters?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCreateFormOverridesProps = {
    BusinessCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    shortNa?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    socials?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    bannerPic?: PrimitiveOverrideProps<TextFieldProps>;
    promoters?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onSuccess?: (fields: BusinessCreateFormInputValues) => void;
    onError?: (fields: BusinessCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessCreateFormInputValues) => BusinessCreateFormInputValues;
    onValidate?: BusinessCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessCreateForm(props: BusinessCreateFormProps): React.ReactElement;
