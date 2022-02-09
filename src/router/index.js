const router = [
  {
    path: "/user",
    component: () => import("@/components/form"),
  },
  {
    path: "/person",
    component: () => import("@/components/input"),
  },
  {
    path: "/record",
    component: () => import("@/views/indexRecord.vue"),
  },
];

export default router;
