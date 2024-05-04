import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  cuisine?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  rating?: SortOrder;
};
