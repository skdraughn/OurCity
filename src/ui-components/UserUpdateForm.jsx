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
import { User } from "../models";
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
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    sub: "",
    profilePic: "",
    email: "",
    phone: "",
    schoolsVisited: [],
    searchName: "",
    friends: [],
    affiliations: [],
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [profilePic, setProfilePic] = React.useState(initialValues.profilePic);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [schoolsVisited, setSchoolsVisited] = React.useState(
    initialValues.schoolsVisited
  );
  const [searchName, setSearchName] = React.useState(initialValues.searchName);
  const [friends, setFriends] = React.useState(initialValues.friends);
  const [affiliations, setAffiliations] = React.useState(
    initialValues.affiliations
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? { ...initialValues, ...userRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setSub(cleanValues.sub);
    setProfilePic(cleanValues.profilePic);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setSchoolsVisited(cleanValues.schoolsVisited ?? []);
    setCurrentSchoolsVisitedValue("");
    setSearchName(cleanValues.searchName);
    setFriends(cleanValues.friends ?? []);
    setCurrentFriendsValue("");
    setAffiliations(cleanValues.affiliations ?? []);
    setCurrentAffiliationsValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(user);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(User, idProp) : user;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, user]);
  React.useEffect(resetStateValues, [userRecord]);
  const [currentSchoolsVisitedValue, setCurrentSchoolsVisitedValue] =
    React.useState("");
  const schoolsVisitedRef = React.createRef();
  const [currentFriendsValue, setCurrentFriendsValue] = React.useState("");
  const friendsRef = React.createRef();
  const [currentAffiliationsValue, setCurrentAffiliationsValue] =
    React.useState("");
  const affiliationsRef = React.createRef();
  const validations = {
    username: [],
    sub: [],
    profilePic: [],
    email: [],
    phone: [],
    schoolsVisited: [],
    searchName: [],
    friends: [],
    affiliations: [],
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
          username,
          sub,
          profilePic,
          email,
          phone,
          schoolsVisited,
          searchName,
          friends,
          affiliations,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              sub,
              profilePic,
              email,
              phone,
              schoolsVisited,
              searchName,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              sub: value,
              profilePic,
              email,
              phone,
              schoolsVisited,
              searchName,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
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
              username,
              sub,
              profilePic: value,
              email,
              phone,
              schoolsVisited,
              searchName,
              friends,
              affiliations,
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
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email: value,
              phone,
              schoolsVisited,
              searchName,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email,
              phone: value,
              schoolsVisited,
              searchName,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email,
              phone,
              schoolsVisited: values,
              searchName,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            values = result?.schoolsVisited ?? values;
          }
          setSchoolsVisited(values);
          setCurrentSchoolsVisitedValue("");
        }}
        currentFieldValue={currentSchoolsVisitedValue}
        label={"Schools visited"}
        items={schoolsVisited}
        hasError={errors.schoolsVisited?.hasError}
        setFieldValue={setCurrentSchoolsVisitedValue}
        inputFieldRef={schoolsVisitedRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Schools visited"
          isRequired={false}
          isReadOnly={false}
          value={currentSchoolsVisitedValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.schoolsVisited?.hasError) {
              runValidationTasks("schoolsVisited", value);
            }
            setCurrentSchoolsVisitedValue(value);
          }}
          onBlur={() =>
            runValidationTasks("schoolsVisited", currentSchoolsVisitedValue)
          }
          errorMessage={errors.schoolsVisited?.errorMessage}
          hasError={errors.schoolsVisited?.hasError}
          ref={schoolsVisitedRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "schoolsVisited")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Search name"
        isRequired={false}
        isReadOnly={false}
        value={searchName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email,
              phone,
              schoolsVisited,
              searchName: value,
              friends,
              affiliations,
            };
            const result = onChange(modelFields);
            value = result?.searchName ?? value;
          }
          if (errors.searchName?.hasError) {
            runValidationTasks("searchName", value);
          }
          setSearchName(value);
        }}
        onBlur={() => runValidationTasks("searchName", searchName)}
        errorMessage={errors.searchName?.errorMessage}
        hasError={errors.searchName?.hasError}
        {...getOverrideProps(overrides, "searchName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email,
              phone,
              schoolsVisited,
              searchName,
              friends: values,
              affiliations,
            };
            const result = onChange(modelFields);
            values = result?.friends ?? values;
          }
          setFriends(values);
          setCurrentFriendsValue("");
        }}
        currentFieldValue={currentFriendsValue}
        label={"Friends"}
        items={friends}
        hasError={errors.friends?.hasError}
        setFieldValue={setCurrentFriendsValue}
        inputFieldRef={friendsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Friends"
          isRequired={false}
          isReadOnly={false}
          value={currentFriendsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.friends?.hasError) {
              runValidationTasks("friends", value);
            }
            setCurrentFriendsValue(value);
          }}
          onBlur={() => runValidationTasks("friends", currentFriendsValue)}
          errorMessage={errors.friends?.errorMessage}
          hasError={errors.friends?.hasError}
          ref={friendsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "friends")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              username,
              sub,
              profilePic,
              email,
              phone,
              schoolsVisited,
              searchName,
              friends,
              affiliations: values,
            };
            const result = onChange(modelFields);
            values = result?.affiliations ?? values;
          }
          setAffiliations(values);
          setCurrentAffiliationsValue("");
        }}
        currentFieldValue={currentAffiliationsValue}
        label={"Affiliations"}
        items={affiliations}
        hasError={errors.affiliations?.hasError}
        setFieldValue={setCurrentAffiliationsValue}
        inputFieldRef={affiliationsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Affiliations"
          isRequired={false}
          isReadOnly={false}
          value={currentAffiliationsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.affiliations?.hasError) {
              runValidationTasks("affiliations", value);
            }
            setCurrentAffiliationsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("affiliations", currentAffiliationsValue)
          }
          errorMessage={errors.affiliations?.errorMessage}
          hasError={errors.affiliations?.hasError}
          ref={affiliationsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "affiliations")}
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
          isDisabled={!(idProp || user)}
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
              !(idProp || user) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
