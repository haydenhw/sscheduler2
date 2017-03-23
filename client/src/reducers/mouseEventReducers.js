import * as actions from '../actions/indexActions';

const defaultMouseEvents = {
  isMouseOverModule: false,
  mouseDownOnIcon: false,
  isMouseDown: false,
  isContextMenuOpen:false
}

export const mouseEvents = (state = defaultMouseEvents, action) => {
  switch(action.type) {
    case actions.MOUSE_DOWN_ON_ICON:
      return {
        ...state,
        mouseDownOnIcon: action.isDown
      }
      break;
      
    case actions.TOGGLE_IS_MOUSE_DOWN:
      return {
        ...state,
        isMouseDown: !state.isMouseDown
      }
      break;
      
      case actions.TOGGLE_IS_MOUSE_OVER_MODULE:
        return {
          ...state,
          isMouseOverModule: !state.isMouseOverModule
        }
        break;
        
        case actions.TOGGLE_IS_CONTEXT_MENU_OPEN:
          console.log({
            ...state,
            isMouseOverModule: !state.isContextMenuOpen
          })
          return {
            ...state,
            isMouseOverModule: !state.isContextMenuOpen
          }
          break;
        
    default:
      return state;
  }
}