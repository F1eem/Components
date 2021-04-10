import ITEMS from "api/claimTable";

const SET_CURRENT_CLAIM = "SET_CURRENT_CLAIM";
const SET_TABLE_ITEMS = "SET_TABLE_ITEMS";

let initialState = {
  items: [],
  filterItems: {},
  currentClaim: null,
};

let tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLAIM:
      return {
        ...state,
        currentClaim: state.items.find(
          (item) => item.claimId === action.claimId
        ),
      };
    case SET_TABLE_ITEMS:
      return {
        ...state,
        items: [...ITEMS],
      };

    default:
      return state;
  }
};

export const setTableClaim = (claimId) => ({
  type: SET_CURRENT_CLAIM,
  claimId,
});
export const setTableItems = () => ({
  type: SET_TABLE_ITEMS,
});

export { tableReducer };
