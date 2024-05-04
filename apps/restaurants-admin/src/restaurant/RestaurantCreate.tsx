import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Cuisine" source="cuisine" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <TextInput label="Name" source="name" />
        <TextInput label="Price" source="price" />
        <NumberInput label="Rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
