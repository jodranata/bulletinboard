import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../constants/Constants';

const INITIAL_STATE = {
  projects: [],
};

const handleCreateStory = (state, action) => ({
  projects: action.project,
});

const handleCreateError = (state, action) => ({
  error: action.error,
});

const ReducerProject = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return handleCreateStory(state, action);
    case CREATE_PROJECT_ERROR:
      return handleCreateError(state, action);
    default:
      return state;
  }
};

export default ReducerProject;
