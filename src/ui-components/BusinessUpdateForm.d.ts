/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Business } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessUpdateFormInputValues = {
    name?: string;
    shortNa?: string;
    address?: string;
    profilePic?: string;
    socials?: string[];
    rating?: number;
    bannerPic?: string;
    promoters?: string[];
};
export declare type BusinessUpdateFormValidationValues = {
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
export declare type BusinessUpdateFormOverridesProps = {
    BusinessUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    shortNa?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    profilePic?: PrimitiveOverrideProps<TextFieldProps>;
    socials?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    bannerPic?: PrimitiveOverrideProps<TextFieldProps>;
    promoters?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    business?: Business;
    onSubmit?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onSuccess?: (fields: BusinessUpdateFormInputValues) => void;
    onError?: (fields: BusinessUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessUpdateFormInputValues) => BusinessUpdateFormInputValues;
    onValidate?: BusinessUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessUpdateForm(props: BusinessUpdateFormProps): React.ReactElement;
