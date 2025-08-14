export const DateReducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_SEARCH_MODAL":
      return {
        ...state,
        isSearchModelOpen: !state.isSearchModelOpen,
      };
    case "CLOSE_SEARCH_MODAL":
      return {
        ...state,
        isSearchModelOpen: !state.isSearchModelOpen,

      }
    case "CHECK_IN":
      return {
        ...state,
        checkInDate: payload,
      };
    case "CHECK_OUT":
      return {
        ...state,
        checkOutDate: payload,
      };
    case "DESTINATION":
      return {
        ...state,
        destination: payload,
      }
    case "DATE_FOCUS":
      return {
        ...state,
        isSearchResultOpen: false
      }
    case "HANDLE_SEARCH_RESULT_OPEN":
      return {
        ...state,
        isSearchResultOpen: true
      }
    case "GUEST":
      return {
        ...state,
        guest: payload
      }
    case "CLEAR_INPUTS":
      return {
        ...state,
        checkInDate: null,
        checkOutDate: null,
        guest: 0
      }
    default:
      return state
  }
}
























































































































