import { apiMainUrl } from './aws_config';
import {
  dataToUpdate,
  INewCategoryData,
  INewSubcategoryData,
  IUpdatedCategoryData,
  IUpdateSubcategoryData,
} from '../store/slices/categories/types';

export const axiosGetCategories = async (): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'category',
        action: 'list',
        row_data: null,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
export const axiosGetCategoryById = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'category',
        action: 'get',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosInsertCategory = async (
  row_data: INewCategoryData
): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'category',
        action: 'insert',
        row_data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosUpdateCategory = async (
  row_data: IUpdatedCategoryData
): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'category',
        action: 'update',
        row_data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosGetSubCategories = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'subcategory',
        action: 'list',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosGetSubCategoryById = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'subcategory',
        action: 'get',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosCreateSubCategory = async (
  data: INewSubcategoryData
): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'subcategory',
        action: 'create-post',
        row_data: data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosUpdateSubCategory = async (
  data: IUpdateSubcategoryData
): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'subcategory',
        action: 'update',
        row_data: data,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosGetItemsForSubCategory = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.get(
      `/Items/SelectItemsForSubCategory/${id}`
    );
    return result;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosGetItemsForCategory = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.get(`/Items/SelectItemsForCategory/${id}`);
    return result;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosDeleteCategory = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'category',
        action: 'delete',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosDeleteSubcategory = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'subcategory',
        action: 'delete',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosGetItemById = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.post(
      `/Commander/Execute`,
      {
        controller: 'items',
        action: 'get',
        row_data: {
          id,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosDeleteItem = async (id: string): Promise<any> => {
  try {
    const result = await apiMainUrl.get(`/Items/Delete/${id}`);

    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const axiosUpdateItem = async (data: dataToUpdate): Promise<any> => {
  try {
    const result = await apiMainUrl.post(`/Items/Update`, data);
    return result.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
