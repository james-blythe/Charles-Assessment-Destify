import Axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { fetchData } from "../app/store";
import { sagaActions } from "./sagaActions";
import { ApiParams } from "../types/interfaces";

// Create callAPI function to make requests
let callAPI = async (params: ApiParams): Promise<any> => {
  return await Axios({
    url: params.url,
    method: params.method,
    data: params.data,
    headers: {
      "x-functions-key":
        "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
    },
  });
};

// Create the fetchDataSaga generator function
export function* fetchDataSaga(): Generator {
  // Set the ids array
  const ids = [
    "ceae0d77-2fd6-dbe3-0f33-61c355c106ff",
    "4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
  ];
  try {
    // Call the API and put the result in the result variable
    let result: any = yield call(() =>
      callAPI({
        url: `https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=${ids.join(
          ","
        )}`,
      })
    );
    // Dispatch the action to the reducer
    yield put(fetchData(result.data));
  } catch (e) {
    // Dispatch the action to the reducer
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

// Create the rootSaga generator function
export default function* rootSaga(): Generator {
  // Watch for the FETCH_DATA_SAGA action and call fetchDataSaga when it occurs
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
