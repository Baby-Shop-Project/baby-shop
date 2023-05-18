import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export const setLoadingCase: CaseReducer<LoadingState, PayloadAction<boolean>> = (state, action) => {
	state.isPageLoading = action.payload;
};
