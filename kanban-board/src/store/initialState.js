const initialState = [
  {
    className: 'backlog',
    title: 'Бэклог',
    id: 0,
    tasks: [
      {
        id: 0,
        title: 'Выучить EC6',
        status: 'backlog',
      },
      {
        id: 1,
        title: 'Выучить React',
        status: 'backlog',
      },
    ]
  },
  {
    className: 'processing',
    title: 'В процессе',
    id: 1,
    tasks: [
      {
        id: 0,
        title: 'Выучить CSS',
        status: 'processing',
      },
    ]
  }, 
  {
    className: 'done',
    title: 'Готово',
    id: 2,
    tasks: [
      {
        id: 0,
        title: 'Выучить HTML',
        status: 'done',
      },
    ]
  },
  {
    className: 'basket',
    title: 'Корзина',
    id: 3,
    tasks: [
      {
        id: 0,
        title: 'Chill out',
        status: 'basket',
      },
    ]
  }
];

export default initialState;