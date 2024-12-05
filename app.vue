<template>
  <NuxtLayout>
    <nav class="p-2 w-full border-b">
      <ul class="flex gap-2">
        <li class="p-2 hover:bg-gray-100 rounded-sm">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="p-2 hover:bg-gray-100 rounded-sm">
          <NuxtLink to="/employees">Employees</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </NuxtLayout>
</template>
