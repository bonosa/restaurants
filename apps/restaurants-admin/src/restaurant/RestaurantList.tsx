import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Cuisine" source="cuisine" />
        <TextField label="ID" source="id" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Rating" source="rating" />
      </Datagrid>
    </List>
  );
};
