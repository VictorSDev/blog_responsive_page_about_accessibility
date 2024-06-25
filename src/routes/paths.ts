const ROOTS = {
  AUTH: "/auth",
  BASE: "/base",
};

export const paths = {
    base: {
        root: ROOTS.BASE,
    },
    customers:{
      table: `${ROOTS.BASE}/customers`,
      new: `${ROOTS.BASE}/customers/new`,
      edit: (id: string) => `${ROOTS.BASE}/customers/${id}/edit`
    },
    products:{
      table: `${ROOTS.BASE}/products`,
      new: `${ROOTS.BASE}/products/new`,
      edit: (id: string) => `${ROOTS.BASE}/products/${id}/edit`
    },
};
