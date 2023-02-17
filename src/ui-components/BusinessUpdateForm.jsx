/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Business } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BusinessUpdateForm(props) {
  const {
    id: idProp,
    business,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    shortNa: "",
    address: "",
    profilePic: "",
    socials: [],
    rating: "",
    bannerPic: "",
    promoters: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [shortNa, setShortNa] = React.useState(initialValues.shortNa);
  const [address, setAddress] = React.useState(initialValues.address);
  const [profilePic, setProfilePic] = React.useState(initialValues.profilePic);
  const [socials, setSocials] = React.useState(initialValues.socials);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [bannerPic, setBannerPic] = React.useState(initialValues.bannerPic);
  const [promoters, setPromoters] = React.useState(initialValues.promoters);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = businessRecord
      ? { ...initialValues, ...businessRecord }
      : initialValues;
    setName(cleanValues.name);
    setShortNa(cleanValues.shortNa);
    setAddress(cleanValues.address);
    setProfilePic(cleanValues.profilePic);
    setSocials(cleanValues.socials ?? []);
    setCurrentSocialsValue("");
    setRating(cleanValues.rating);
    setBannerPic(cleanValues.bannerPic);
    setPromoters(cleanValues.promoters ?? []);
    setCurrentPromotersValue("");
    setErrors({});
  };
  const [businessRecord, setBusinessRecord] = React.useState(business);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Business, idProp)
        : business;
      setBusinessRecord(record);
    };
    queryData();
  }, [idProp, business]);
  React.useEffect(resetStateValues, [businessRecord]);
  const [currentSocialsValue, setCurrentSocialsValue] = React.useState("");
  const socialsRef = React.createRef();
  const [currentPromotersValue, setCurrentPromotersValue] = React.useState("");
  const promotersRef = React.createRef();
  const validations = {
    name: [],
    shortNa: [],
    address: [],
    profilePic: [],
    socials: [],
    rating: [],
    bannerPic: [],
    promoters: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          shortNa,
          address,
          profilePic,
          socials,
          rating,
          bannerPic,
          promoters,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Business.copyOf(businessRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              shortNa,
              address,
              profilePic,
              socials,
              rating,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Short na"
        isRequired={false}
        isReadOnly={false}
        value={shortNa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              shortNa: value,
              address,
              profilePic,
              socials,
              rating,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.shortNa ?? value;
          }
          if (errors.shortNa?.hasError) {
            runValidationTasks("shortNa", value);
          }
          setShortNa(value);
        }}
        onBlur={() => runValidationTasks("shortNa", shortNa)}
        errorMessage={errors.shortNa?.errorMessage}
        hasError={errors.shortNa?.hasError}
        {...getOverrideProps(overrides, "shortNa")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address: value,
              profilePic,
              socials,
              rating,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Profile pic"
        isRequired={false}
        isReadOnly={false}
        value={profilePic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address,
              profilePic: value,
              socials,
              rating,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.profilePic ?? value;
          }
          if (errors.profilePic?.hasError) {
            runValidationTasks("profilePic", value);
          }
          setProfilePic(value);
        }}
        onBlur={() => runValidationTasks("profilePic", profilePic)}
        errorMessage={errors.profilePic?.errorMessage}
        hasError={errors.profilePic?.hasError}
        {...getOverrideProps(overrides, "profilePic")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address,
              profilePic,
              socials: values,
              rating,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            values = result?.socials ?? values;
          }
          setSocials(values);
          setCurrentSocialsValue("");
        }}
        currentFieldValue={currentSocialsValue}
        label={"Socials"}
        items={socials}
        hasError={errors.socials?.hasError}
        setFieldValue={setCurrentSocialsValue}
        inputFieldRef={socialsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Socials"
          isRequired={false}
          isReadOnly={false}
          value={currentSocialsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.socials?.hasError) {
              runValidationTasks("socials", value);
            }
            setCurrentSocialsValue(value);
          }}
          onBlur={() => runValidationTasks("socials", currentSocialsValue)}
          errorMessage={errors.socials?.errorMessage}
          hasError={errors.socials?.hasError}
          ref={socialsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "socials")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address,
              profilePic,
              socials,
              rating: value,
              bannerPic,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Banner pic"
        isRequired={false}
        isReadOnly={false}
        value={bannerPic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address,
              profilePic,
              socials,
              rating,
              bannerPic: value,
              promoters,
            };
            const result = onChange(modelFields);
            value = result?.bannerPic ?? value;
          }
          if (errors.bannerPic?.hasError) {
            runValidationTasks("bannerPic", value);
          }
          setBannerPic(value);
        }}
        onBlur={() => runValidationTasks("bannerPic", bannerPic)}
        errorMessage={errors.bannerPic?.errorMessage}
        hasError={errors.bannerPic?.hasError}
        {...getOverrideProps(overrides, "bannerPic")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              shortNa,
              address,
              profilePic,
              socials,
              rating,
              bannerPic,
              promoters: values,
            };
            const result = onChange(modelFields);
            values = result?.promoters ?? values;
          }
          setPromoters(values);
          setCurrentPromotersValue("");
        }}
        currentFieldValue={currentPromotersValue}
        label={"Promoters"}
        items={promoters}
        hasError={errors.promoters?.hasError}
        setFieldValue={setCurrentPromotersValue}
        inputFieldRef={promotersRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Promoters"
          isRequired={false}
          isReadOnly={false}
          value={currentPromotersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.promoters?.hasError) {
              runValidationTasks("promoters", value);
            }
            setCurrentPromotersValue(value);
          }}
          onBlur={() => runValidationTasks("promoters", currentPromotersValue)}
          errorMessage={errors.promoters?.errorMessage}
          hasError={errors.promoters?.hasError}
          ref={promotersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "promoters")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || business)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || business) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
