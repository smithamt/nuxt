<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const data = ref([]);
const res = ref({});
const currentPage = ref(1);
const totalItems = ref(0); // Total number of items
const itemsPerPage = ref(10); // Items per page
const totalPages = ref(0);

const fetchData = async (page = 1) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/employees?page=${page}`
    );
    res.value = response.data;
    data.value = response.data.data;
    totalPages.value = response.data.last_page;
    totalItems.value = response.data.total; // Update total items
    currentPage.value = response.data.current_page;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

const handlePageChange = (page) => {
  currentPage.value = page;
  fetchData(page);
};

onMounted(() => fetchData());
</script>

<template>
  <div>
    <UTable :rows="data" />
    <div>
      <UPagination
        :modelValue="currentPage"
        :total="totalItems"
        :perPage="itemsPerPage"
        @update:modelValue="handlePageChange"
        show-last
        show-first
      />
    </div>
    <pre v-if="res">{{ JSON.stringify(res, null, 1) }}</pre>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
