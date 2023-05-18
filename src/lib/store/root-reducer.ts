import { fontReducer } from "@services/font";
import { languageReducer } from "@services/language";
import { loadingReducer } from "@services/loading";

// Combine all service reducers
export const rootReducer = {
	font: fontReducer,
	language: languageReducer,
	loading: loadingReducer,
};
