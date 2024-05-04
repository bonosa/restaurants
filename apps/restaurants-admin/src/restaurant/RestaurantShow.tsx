import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cuisine" source="cuisine" />
        <TextField label="ID" source="id" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Rating" source="rating" />
      </SimpleShowLayout>
    </Show>
  );
};
