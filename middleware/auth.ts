export default defineNuxtRouteMiddleware((to, from) => {
  console.log("to", to);
  console.log("from", from);
  const isLoggedIn = false;
//   if (isLoggedIn) {
//     return navigateTo(to.fullPath);
//   }
//   return navigateTo("/login");
});
