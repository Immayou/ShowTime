import { createAsyncThunk } from '@reduxjs/toolkit';
import { IError } from '../auth/types';
import {
  dataToUpdate,
  ICategoryData,
  ICategoryDataById,
  IItemSubCategoryData,
  INewCategoryData,
  INewSubcategoryData,
  ISubCategoryData,
  IUpdatedCategoryData,
  IUpdateSubcategoryData,
} from './types';
import {
  axiosCreateSubCategory,
  axiosDeleteCategory,
  axiosDeleteItem,
  axiosDeleteSubcategory,
  axiosGetCategories,
  axiosGetCategoryById,
  axiosGetItemsForCategory,
  axiosGetItemsForSubCategory,
  axiosGetSubCategories,
  axiosGetSubCategoryById,
  axiosInsertCategory,
  axiosUpdateCategory,
  axiosUpdateItem,
  axiosUpdateSubCategory,
} from '../../../api/categories';

export const getCategories = createAsyncThunk<
  ICategoryData[],
  void,
  {
    rejectValue: IError;
  }
>('get/categories', async (_, thunkAPI) => {
  try {
    const data = await axiosGetCategories();
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const getSubCategories = createAsyncThunk<
  ISubCategoryData[],
  string,
  {
    rejectValue: IError;
  }
>('get/subCategories', async (id, thunkAPI) => {
  try {
    const data = await axiosGetSubCategories(id);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const getItemsForSubCategory = createAsyncThunk<
  IItemSubCategoryData[],
  string,
  {
    rejectValue: IError;
  }
>('get/itemsForSubCategory', async (id, thunkAPI) => {
  try {
    const data = await axiosGetItemsForSubCategory(id);
    if (data.status === 200) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.statusText);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const getItemsForCategory = createAsyncThunk<
  IItemSubCategoryData[],
  string,
  {
    rejectValue: IError;
  }
>('get/itemsForCategory', async (id, thunkAPI) => {
  try {
    const data = await axiosGetItemsForCategory(id);
    if (data.status === 200) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.statusText);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const deleteCategory = createAsyncThunk<
  any,
  string,
  {
    rejectValue: IError;
  }
>('delete/category', async (id, thunkAPI) => {
  try {
    const data = await axiosDeleteCategory(id);
    if (data.success) {
      return data.msg;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const deleteSubCategory = createAsyncThunk<
  any,
  string,
  {
    rejectValue: IError;
  }
>('delete/subcategory', async (id, thunkAPI) => {
  try {
    const data = await axiosDeleteSubcategory(id);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const deleteItem = createAsyncThunk<
  any,
  string,
  {
    rejectValue: IError;
  }
>('delete/item', async (id, thunkAPI) => {
  try {
    const data = await axiosDeleteItem(id);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const createCategory = createAsyncThunk<
  any,
  INewCategoryData,
  {
    rejectValue: IError;
  }
>('insert/category', async (category_data, thunkAPI) => {
  try {
    const data = await axiosInsertCategory(category_data);
    if (data.success) {
      return data.msg;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const updateCategory = createAsyncThunk<
  any,
  IUpdatedCategoryData,
  {
    rejectValue: IError;
  }
>('update/category', async (category_data, thunkAPI) => {
  try {
    const data = await axiosUpdateCategory(category_data);
    if (data.success) {
      return data.msg;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const getCategoryById = createAsyncThunk<
  ICategoryDataById,
  string,
  {
    rejectValue: IError;
  }
>('get/category_by_id', async (id, thunkAPI) => {
  try {
    const data = await axiosGetCategoryById(id);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const getSubcategoryById = createAsyncThunk<
  ISubCategoryData,
  string,
  {
    rejectValue: IError;
  }
>('get/subcategory_by_id', async (id, thunkAPI) => {
  try {
    const data = await axiosGetSubCategoryById(id);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const updateSubcategory = createAsyncThunk<
  any,
  IUpdateSubcategoryData,
  {
    rejectValue: IError;
  }
>('update/subcategory', async (newData, thunkAPI) => {
  try {
    const data = await axiosUpdateSubCategory(newData);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const createSubcategory = createAsyncThunk<
  any,
  INewSubcategoryData,
  {
    rejectValue: IError;
  }
>('create/subcategory', async (newData, thunkAPI) => {
  try {
    const data = await axiosCreateSubCategory(newData);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

export const updateItem = createAsyncThunk<
  any,
  dataToUpdate,
  {
    rejectValue: IError;
  }
>('update/item', async (newData, thunkAPI) => {
  try {
    const data = await axiosUpdateItem(newData);
    if (data.success) {
      return data.data;
    } else {
      throw new Error('Something went wrong ,' + data.msg);
    }
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ errorMessage: error.message });
  }
});

// export const getItemById = createAsyncThunk<
//   IItemByIdData,
//   string,
//   {
//     rejectValue: IError;
//   }
// >('get/item', async (id, thunkAPI) => {
//   try {
//     const data = await axiosGetItemById(id);
//     if (data.success) {
//       console.log(data.data);
//       return data.data;
//     } else {
//       throw new Error('Something went wrong ,' + data.msg);
//     }
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue({ errorMessage: error.message });
//   }
// });
