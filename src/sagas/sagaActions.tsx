// Interface to describe the type of FetchDataSagaAction
interface FetchDataSagaAction {
  type: typeof sagaActions.FETCH_DATA_SAGA;
  payload?: any;
}

// Object containing the action types
export const sagaActions = {
  FETCH_DATA_SAGA: "FETCH_DATA_SAGA",
};

// Action creator for FetchDataSagaAction
export const fetchDataSaga = (payload?: any): FetchDataSagaAction => {
  return {
    type: sagaActions.FETCH_DATA_SAGA,
    payload
  };
}

// Type to represent all the SagaActions
export type SagaActions = FetchDataSagaAction;