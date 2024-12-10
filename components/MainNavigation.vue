<script setup>
import { ref } from 'vue';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Messages', path: '/messages' },
    { name: 'Company', path: '/company' },
    {
        name: 'Organization', path: '/organization', children: [
            { name: 'Branches', path: '/organization/branches' },
            { name: 'Departments', path: '/organization/departments' },
            { name: 'Contracts', path: '/organization/contracts' },
            { name: 'Positions', path: '/organization/positions' },
            { name: 'Schedules', path: '/organization/schedules' },
            { name: 'Holidays', path: '/organization/holidays' },
            { name: 'Leaves', path: '/organization/leaves' },
            { name: 'Allowances', path: '/organization/allowances' },
            { name: 'Deductions', path: '/organization/deductions' },
            { name: 'Assets', path: '/organization/assets' },
            { name: 'Currencies', path: '/organization/currencies' }
        ]
    },
    { name: 'Employees', path: '/employees' },
    { name: 'Adjustments', path: '/adjustments' },
    { name: 'Planner', path: '/planner' },
    {
        name: 'Relations', path: '/relations', children: [
            { name: 'Branches', path: '/organization/branches' },
            { name: 'Departments', path: '/organization/departments' },
            { name: 'Contracts', path: '/organization/contracts' },
            { name: 'Positions', path: '/organization/positions' },
            { name: 'Schedules', path: '/organization/schedules' },
            { name: 'Holidays', path: '/organization/holidays' },
            { name: 'Leaves', path: '/organization/leaves' },
            { name: 'Allowances', path: '/organization/allowances' },
            { name: 'Deductions', path: '/organization/deductions' },
            { name: 'Assets', path: '/organization/assets' },
            { name: 'Currencies', path: '/organization/currencies' }
        ]
    },
    { name: 'Payroll', path: '/payroll' },
    { name: 'App', path: '/app' },
    { name: 'Editors', path: '/editors' },
    { name: 'Trashes', path: '/trashes' }
];

const openLinks = ref([]);

const isOpen = (linkName) => {
    return openLinks.value.includes(linkName);
};

const toggle = (linkName) => {
    if (isOpen(linkName)) {
        openLinks.value = openLinks.value.filter(name => name !== linkName);
    } else {
        openLinks.value.push(linkName);
    }
};
</script>
<template>
    <aside class="p-2 bg-gray-800 min-h-full text-white w-[200px] h-full">
        <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.name" class="w-full">
                <NuxtLink v-if="!link.children" :to="link.path" exact-active-class="font-bold w-full text-gray-800"
                    class="flex items-center p-2 w-full nav-link rounded-lg">
                    {{ link.name }}
                </NuxtLink>
                <button v-if="link.children" @click="() => toggle(link.name)" :to="link.path"
                    exact-active-class="font-bold w-full text-gray-800"
                    class="flex items-center p-2 w-full nav-link rounded-lg">
                    {{ link.name }}
                </button>

                <ul v-if="isOpen(link.name)" class="ml-4 mt-2 flex flex-col gap-2">
                    <li v-for="child in link.children" :key="child.name">
                        <NuxtLink :to="child.path" exact-active-class="font-bold w-full text-gray-800"
                            class="p-2 w-full nav-link rounded-lg">
                            {{ child.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>


<style scoped>
.nav-link {
    text-decoration: none;
    color: inherit;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>
