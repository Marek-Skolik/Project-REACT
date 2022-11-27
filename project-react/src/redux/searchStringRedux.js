
//selector

export const getSearchString = ({ searchString}) => searchString;

//actions

const createActionName = actionName => `app/searchString/${actionName}`; 
export const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  }
  
export default searchStringReducer;