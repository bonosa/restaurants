import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Cuisine" source="cuisine" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <TextInput label="Name" source="name" />
        <TextInput label="Price" source="price" />
        <NumberInput label="Rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
