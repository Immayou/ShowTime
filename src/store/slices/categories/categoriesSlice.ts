import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICategoriesState,
  ICategoryData,
  ICategoryDataById,
  IItemSubCategoryData,
  ISubCategoryData,
} from './types';
import { IError } from '../auth/types';
import {
  createCategory,
  createSubcategory,
  deleteCategory,
  deleteItem,
  deleteSubCategory,
  getCategories,
  getCategoryById,
  getItemsForCategory,
  getItemsForSubCategory,
  getSubCategories,
  getSubcategoryById,
  updateCategory,
  updateItem,
  updateSubcategory,
} from './operations';

const initialState: ICategoriesState = {
  categories: null,
  subCategories: null,
  itemsForSubCategory: null,
  activeCategory: null,
  activeSubCategory: null,
  itemToEdit: null,
  subcategoryToEdit: null,
  categoryToEdit: null,
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<null | ICategoryData>) => {
      state.activeCategory = action.payload;
    },
    setCategoryToEdit: (
      state,
      action: PayloadAction<null | ICategoryDataById>
    ) => {
      state.categoryToEdit = action.payload;
      state.subcategoryToEdit = null;
      state.itemToEdit = null;
    },
    setActiveSubCategory: (
      state,
      action: PayloadAction<null | ISubCategoryData>
    ) => {
      state.itemsForSubCategory = null;
      state.activeSubCategory = action.payload;
    },
    setSubCategoryToEdit: (
      state,
      action: PayloadAction<null | ISubCategoryData>
    ) => {
      state.subcategoryToEdit = action.payload;
    },
    setItemToEdit: (
      state,
      action: PayloadAction<null | IItemSubCategoryData>
    ) => {
      state.itemToEdit = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<ICategoryData[]>) => {
          state.categories = action.payload;
          if (action.payload.length === 0) {
            state.activeCategory = null;
            state.subCategories = null;
            state.activeSubCategory = null;
          } else {
            state.activeCategory = action.payload[0];
          }
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getCategories.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(getSubCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getSubCategories.fulfilled,
        (state, action: PayloadAction<ISubCategoryData[]>) => {
          state.subCategories = action.payload;
          state.activeSubCategory =
            action.payload.length === 0 ? null : action.payload[0];
          state.itemsForSubCategory = null;
          state.subcategoryToEdit = null;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getSubCategories.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(getItemsForSubCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getItemsForSubCategory.fulfilled,
        (state, action: PayloadAction<IItemSubCategoryData[]>) => {
          state.itemsForSubCategory = action.payload;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getItemsForSubCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(getItemsForCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getItemsForCategory.fulfilled,
        (state, action: PayloadAction<IItemSubCategoryData[]>) => {
          state.activeSubCategory = null;
          state.subCategories = null;
          state.itemsForSubCategory = action.payload;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getItemsForCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(getSubcategoryById.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getSubcategoryById.fulfilled,
        (state, action: PayloadAction<ISubCategoryData>) => {
          state.subcategoryToEdit = action.payload;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getSubcategoryById.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(deleteCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        deleteCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(deleteSubCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteSubCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        deleteSubCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(deleteItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        return;
      })
      .addCase(
        deleteItem.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(createCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        createCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        createCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(updateCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        updateCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.categoryToEdit = null;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        updateCategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(createSubcategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        createSubcategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        createSubcategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(updateSubcategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        updateSubcategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        updateSubcategory.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(getCategoryById.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getCategoryById.fulfilled,
        (state, action: PayloadAction<ICategoryDataById>) => {
          state.categoryToEdit = action.payload;
          state.isLoading = false;
          state.error = null;
          return;
        }
      )
      .addCase(
        getCategoryById.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      )
      .addCase(updateItem.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateItem.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        return;
      })
      .addCase(
        updateItem.rejected,
        (state, action: PayloadAction<IError | undefined>) => {
          state.isLoading = false;
          if (action.payload) {
            console.log(action.payload.errorMessage);
            state.error = action.payload.errorMessage;
          }
        }
      );

    // .addCase(getItemById.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(
    //   getItemById.fulfilled,
    //   (state, action: PayloadAction<IItemByIdData>) => {
    //     state.itemToEdit = action.payload;
    //     state.isLoading = false;
    //     state.error = null;
    //     return;
    //   }
    // )
    // .addCase(
    //   getItemById.rejected,
    //   (state, action: PayloadAction<IError | undefined>) => {
    //     state.isLoading = false;
    //     if (action.payload) {
    //       console.log(action.payload.errorMessage);
    //       state.error = action.payload.errorMessage;
    //     }
    //   }
    // );
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;
export const {
  setActiveCategory,
  setActiveSubCategory,
  setCategoryToEdit,
  setItemToEdit,
  setSubCategoryToEdit,
} = categoriesSlice.actions;
