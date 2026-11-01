<script setup lang="ts">

    interface Item {
        id: number,
        title: string,
    }

    const props = defineProps<{ item: Item }>();
    
</script>

<template>

    <div>{{ item.title }}</div>

</template>