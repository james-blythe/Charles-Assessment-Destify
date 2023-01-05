import { fetchData, selectRoom } from "./store";
import store, { AppThunk, RootState, Store } from "./store";

describe("store", () => {
  let testStore: Store;

  beforeEach(() => {
    testStore = store;
  });

  describe("fetchData", () => {
    it("should update state with the data passed to it", () => {
      const mockData = [{ id: 1, title: "test" }];
      testStore.dispatch(fetchData(mockData));
      const state = testStore.getState();
      expect(state.todo.todos).toEqual(mockData);
    });
  });

  describe("selectRoom", () => {
    it("should update the state with the id passed to it", () => {
      const mockId = 12;
      testStore.dispatch(selectRoom(mockId));
      const state = testStore.getState();
      expect(state.todo.id).toBe(mockId);
    });
  });
});