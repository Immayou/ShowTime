export interface ICategoriesState {
  categories: null | ICategoryData[];
  subCategories: null | ISubCategoryData[];
  itemsForSubCategory: null | IItemSubCategoryData[];
  activeCategory: null | ICategoryData;
  activeSubCategory: null | ISubCategoryData;
  categoryToEdit: null | ICategoryDataById;
  subcategoryToEdit: null | ISubCategoryData;
  itemToEdit: null | IItemSubCategoryData;
  isLoading: boolean;
  error: null | string;
}

export interface ICategoryData {
  bw_image: string;
  created_at: string;
  creator_name: null | string;
  creator_url: null | string;
  hash_key: null | string;
  id: string;
  image: string;
  is_customizable: boolean;
  itemsСount: number;
  modified_at: string;
  name: string;
  pl: null | string;
  ru: null | string;
  special_code: null | any;
  subcategoriesСount: number;
  ukr: null | string;
  visible: boolean;
}

export interface INewCategoryData {
  id: null;
  image: string;
  bw_image: string;
  is_customizable: boolean;
  visible: boolean;

  creator_name: null | string;
  creator_url: null | string;
  special_code: null | any;
  titles: ICategoryTitle[];
}

export interface IUpdatedCategoryData {
  id: string;
  image: string;
  bw_image: string;
  is_customizable: boolean;
  visible: boolean;

  creator_name: null | string;
  creator_url: null | string;
  special_code: null | any;
  titles: ICategoryTitle[];
}

export interface ICategoryTitle {
  language_id: string;
  title: string;
  id: string;
}

export interface ISubCategoryData {
  category_id: string;
  created_at: string;
  hash_key: string;
  id: string;
  is_customizable: boolean;
  items_count: number;
  modified_a: string;
  name: null | string;
  pl: null | string;
  ru: null | string;
  title: string;
  titles: ISubcategoryTitle[];
  ukr: null | string;
  visible: boolean;
}

export interface ISubcategoryTitle {
  category_id: string;
  id: string;
  language_id: string;
  name: string;
  subcategory_id: string;
  title: string;
}

export interface IItemSubCategoryData {
  category_id: string;
  created_at: string;
  id: string;
  image: string;
  is_customizable: boolean;
  lang: null | string;
  modified_at: string;
  paid: boolean;
  preview_image: string;
  subcategory_id: string;
  tags: null | string;
  visible: boolean;
  xname: null | string;
}

export interface ICategoryDataById {
  bw_image: string;
  created_at: string;
  creator_name: string;
  creator_url: string;
  hash_key: null | string;
  id: string;
  image: string;
  is_customizable: boolean;
  itemsСount: number;
  modified_at: string;
  special_code: string;
  subcategoriesСount: number;
  titles: ICategoryTitle[];
  visible: boolean;
}

export interface CategoryTitle {
  code: string;
  gif_category_id: null | string;
  id: string;
  language_id: string;
  name: string;
  title: string;
}

export interface dataToUpdate {
  item: dataItemToUpdate;
  all_regions: boolean;
  regions_ids: string[];
}

export interface dataItemToUpdate {
  id: string;
  category_id: string;
  subcategory_id: string;
  preview_image: string;
  image: string;
  paid: boolean;
  visible: boolean;
  is_customizable: boolean;
}
export interface IUpdatedTitleData {
  id: string;
  subcategory_id: string | null;
  title: string;
}

export interface INewTitleData {
  id: string;
  subcategory_id: null;
  title: string;
}

export interface IUpdateSubcategoryData {
  category_id: string;
  is_customizable: boolean;
  subcategory_id: string;
  titles: IUpdatedTitleData[];
}

export interface INewSubcategoryData {
  category_id: string;
  is_customizable: boolean;
  subcategory_id: null;
  titles: INewTitleData[];
}
