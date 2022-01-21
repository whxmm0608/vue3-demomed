const router = [
  {
    path: "/user",
    component: () => import("@/components/form"),
  },
  {
    path: "/views",
    component: () => import("@/views/indexRecord.vue"),
  },
];

export default router;
