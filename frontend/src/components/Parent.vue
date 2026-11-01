<script setup lang="ts">
    import { ref } from 'vue';
    import Child from './Child.vue';

    interface Item {
        id: number,
        title: string,
    }

    const items = ref<Item[]>([
        { id: 1, title: "Learn ref",},
        { id: 2, title: "Learn defineProps"},
        { id: 3, title: "Learn defineEmits"},
    ]);

</script>

<template>
    <Child v-for="item in items" :key="item.id" :item="item"/>
</template>