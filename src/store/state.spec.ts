import state from "@/store/state";

describe("Given a state object", () => {
  describe("When it is called", () => {
    test("Then it should return an object state with 5 properties", () => {
      expect(state).toEqual({
        boards: [],
        currentUser: {},
        currentBoard: null,
        isAuthenticated: false,
        isLoading: false,
      });
    });
  });
});
