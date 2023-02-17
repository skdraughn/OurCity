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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Chatroom } from "../models";
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
export default function ChatroomUpdateForm(props) {
  const {
    id: idProp,
    chatroom,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userIDs: [],
    isGroup: false,
    chatroomPic: "",
    name: "",
  };
  const [userIDs, setUserIDs] = React.useState(initialValues.userIDs);
  const [isGroup, setIsGroup] = React.useState(initialValues.isGroup);
  const [chatroomPic, setChatroomPic] = React.useState(
    initialValues.chatroomPic
  );
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = chatroomRecord
      ? { ...initialValues, ...chatroomRecord }
      : initialValues;
    setUserIDs(cleanValues.userIDs ?? []);
    setCurrentUserIDsValue("");
    setIsGroup(cleanValues.isGroup);
    setChatroomPic(cleanValues.chatroomPic);
    setName(cleanValues.name);
    setErrors({});
  };
  const [chatroomRecord, setChatroomRecord] = React.useState(chatroom);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Chatroom, idProp)
        : chatroom;
      setChatroomRecord(record);
    };
    queryData();
  }, [idProp, chatroom]);
  React.useEffect(resetStateValues, [chatroomRecord]);
  const [currentUserIDsValue, setCurrentUserIDsValue] = React.useState("");
  const userIDsRef = React.createRef();
  const validations = {
    userIDs: [],
    isGroup: [],
    chatroomPic: [],
    name: [],
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
          userIDs,
          isGroup,
          chatroomPic,
          name,
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
            Chatroom.copyOf(chatroomRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ChatroomUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userIDs: values,
              isGroup,
              chatroomPic,
              name,
            };
            const result = onChange(modelFields);
            values = result?.userIDs ?? values;
          }
          setUserIDs(values);
          setCurrentUserIDsValue("");
        }}
        currentFieldValue={currentUserIDsValue}
        label={"User i ds"}
        items={userIDs}
        hasError={errors.userIDs?.hasError}
        setFieldValue={setCurrentUserIDsValue}
        inputFieldRef={userIDsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="User i ds"
          isRequired={false}
          isReadOnly={false}
          value={currentUserIDsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userIDs?.hasError) {
              runValidationTasks("userIDs", value);
            }
            setCurrentUserIDsValue(value);
          }}
          onBlur={() => runValidationTasks("userIDs", currentUserIDsValue)}
          errorMessage={errors.userIDs?.errorMessage}
          hasError={errors.userIDs?.hasError}
          ref={userIDsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userIDs")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Is group"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isGroup}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userIDs,
              isGroup: value,
              chatroomPic,
              name,
            };
            const result = onChange(modelFields);
            value = result?.isGroup ?? value;
          }
          if (errors.isGroup?.hasError) {
            runValidationTasks("isGroup", value);
          }
          setIsGroup(value);
        }}
        onBlur={() => runValidationTasks("isGroup", isGroup)}
        errorMessage={errors.isGroup?.errorMessage}
        hasError={errors.isGroup?.hasError}
        {...getOverrideProps(overrides, "isGroup")}
      ></SwitchField>
      <TextField
        label="Chatroom pic"
        isRequired={false}
        isReadOnly={false}
        value={chatroomPic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userIDs,
              isGroup,
              chatroomPic: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.chatroomPic ?? value;
          }
          if (errors.chatroomPic?.hasError) {
            runValidationTasks("chatroomPic", value);
          }
          setChatroomPic(value);
        }}
        onBlur={() => runValidationTasks("chatroomPic", chatroomPic)}
        errorMessage={errors.chatroomPic?.errorMessage}
        hasError={errors.chatroomPic?.hasError}
        {...getOverrideProps(overrides, "chatroomPic")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userIDs,
              isGroup,
              chatroomPic,
              name: value,
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
          isDisabled={!(idProp || chatroom)}
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
              !(idProp || chatroom) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
