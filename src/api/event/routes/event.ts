export default {
  routes: [
    {
      method: 'GET',
      path: '/events',
      handler: 'event.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/events/:id',
      handler: 'event.findOne',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/events',
      handler: 'event.create',
    },
    {
      method: 'PUT',
      path: '/events/:id',
      handler: 'event.update',
    },
    {
      method: 'DELETE',
      path: '/events/:id',
      handler: 'event.delete',
    },
  ],
};
