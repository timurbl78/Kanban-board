const initialState = [
  {
    className: 'backlog',
    title: 'Бэклог',
    id: 'group-0',
    tasks: [
      {
        id: 'card-0',
        title: 'Выучить EC6',
        status: 'backlog',
      },
      {
        id: 'card-1',
        title: 'Выучить React',
        status: 'backlog',
      },
    ]
  },
  {
    className: 'processing',
    title: 'В процессе',
    id: 'group-1',
    tasks: [
      {
        id: 'card-2',
        title: 'Выучить CSS',
        status: 'processing',
      },
    ]
  },
  {
    className: 'done',
    title: 'Готово',
    id: 'group-2',
    tasks: []
  },
  {
    className: 'basket',
    title: 'Корзина',
    id: 'group-3',
    tasks: [
      {
        id: 'card-3',
        title: 'Chill out',
        status: 'basket',
      },
    ]
  }
];

export default initialState;
