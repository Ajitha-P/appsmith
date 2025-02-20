import type { EditorViewMode } from "@appsmith/entities/IDE/constants";
import { ReduxActionTypes } from "@appsmith/constants/ReduxActionConstants";

export const setIdeEditorViewMode = (mode: EditorViewMode) => {
  return {
    type: ReduxActionTypes.SET_IDE_EDITOR_VIEW_MODE,
    payload: {
      view: mode,
    },
  };
};

export const setIdeEditorPagesActiveStatus = (active: boolean) => {
  return {
    type: ReduxActionTypes.SET_IDE_EDITOR_PAGES_ACTIVE_STATUS,
    payload: {
      pagesActive: active,
    },
  };
};
