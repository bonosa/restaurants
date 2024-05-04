import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type RestaurantWhereInput = {
  cuisine?: StringFilter;
  id?: IntFilter;
  latitude?: FloatFilter;
  longitude?: FloatFilter;
  name?: StringFilter;
  price?: StringFilter;
  rating?: FloatFilter;
};
