import userReducer, { addUser, selectUsers } from "../store/userSlice";

describe("userSlice", () => {
  const initialState = {
    users: [],
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addUser", () => {
    const newUser = {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      message: "Hello, World!",
    };
    const expectedState = {
      users: [newUser],
    };
    expect(userReducer(initialState, addUser(newUser))).toEqual(expectedState);
  });

  it("should select users", () => {
    const state = {
      users: {
        users: [
          {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            message: "Hello, World!",
          },
        ],
      },
    };
    const result = selectUsers(state);
    expect(result).toEqual(state.users.users);
  });
});
