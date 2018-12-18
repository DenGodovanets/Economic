import * as actionTypes from './actions';

const initialState = {
  categories: {
    'cat1': { title: 'Продукти та кафе', value: [],
      'id': 1,addList:true,date:[] },
    'cat2': { title: 'Медицина та Аптека', value: [],
      'id': 2,addList:false,date:[] },
    'cat3': { title: 'Комунальні послуги та інтернет', value: [],
      'id': 3,addList:false,date:[] },
    'cat4': { title: 'Розваги', value: [],
      'id': 4,addList:false ,date:[]}
  },
  value:'Введіть суму',
  addList:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_VALUE:    
      return {
        ...state,
        value: ''
      };
    case actionTypes.HANDLE_CHANGE:
      // eslint-disable-next-line no-case-declarations
      const valueTarget = action.payload.event;
      return {
        ...state,
        value: valueTarget
      };
    case actionTypes.CLICK_BUTTON:
      if (state.value !== 'Введіть суму' && state.value !== '') {
        const newCategories = { ...state.categories };
        const date = new Date().toLocaleString().split('  ');                                
        Object.keys(state.categories).map(item => {
          if (state.categories[item].title === action.payload.event.title) {
            newCategories[item] = {
              ...state.categories[item],
              value: [...state.categories[item].value, state.value],
              date: [...state.categories[item].date,date]
            };
          }
        });                
        return {
          ...state,
          categories: { ...newCategories },
          value:''                    
        };
      }
      return state;
    case actionTypes.OPEN_LIST:        
      return {            
        ...state,
        addList:action.payload.event.id            
      };
    default:
      return state;
  }
};
export default reducer;