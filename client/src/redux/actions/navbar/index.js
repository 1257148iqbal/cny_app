import axios from 'axios';

// ** Get Bookmarks Array from @fakeDB
// export const getBookmarks = () => {
//   return dispatch => {
//     return axios.get('/api/bookmarks/data').then(response => {
//       dispatch({
//         type: 'GET_BOOKMARKS',
//         data: response.data.suggestions,
//         bookmarks: response.data.bookmarks
//       })
//     })
//   }
// }

const dataBookmarks = [
  {
    icon: 'Grid',
    id: 3,
    isBookmarked: true,
    link: '/modules',
    target: 'modules',
    title: 'Modules'
  },
  {
    icon: 'List',
    id: 3,
    isBookmarked: false,
    link: '/modules',
    target: 'todo',
    title: 'Todo'
  }
];

export const getBookmarks = () => {
  return dispatch => {
    dispatch({
      type: 'GET_BOOKMARKS',
      data: dataBookmarks,
      bookmarks: dataBookmarks
    });
  };
};

// ** Update & Get Updated Bookmarks Array
export const updateBookmarked = id => {
  return dispatch => {
    return axios.post('/api/bookmarks/update', { id }).then(() => {
      dispatch({ type: 'UPDATE_BOOKMARKED', id });
    });
  };
};

// ** Handle Bookmarks & Main Search Queries
export const handleSearchQuery = val => dispatch => dispatch({ type: 'HANDLE_SEARCH_QUERY', val });
