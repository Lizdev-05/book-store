const CHECK = 'bookstore/categories/CHECK';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'under construction';
    default:
      return state;
  }
}

export const checkBookStatus = () => ({
  type: CHECK,
});
