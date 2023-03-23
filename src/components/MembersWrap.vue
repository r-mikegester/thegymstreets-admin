<template>
    <div class="mx-auto max-w-full">
        <ul class="mb-3 list-none p-0 flex">
            <li class=" tabs_header w-full mx-auto text-center py-5 text-xl cursor-pointer transition ease-in-out delay-75 bg-[#004aad] border-b-2 border-blue-900 active:bg-blue-600 selected:bg-blue-600 hover:bg-blue-700 "
                v-for="title in tabTitles" :key="title" @click="selectedTitle = title"
                :class="{ selected: title == selectedTitle }">
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>
<script>
import { ref, provide } from 'vue';
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        provide('selectedTitle', selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    },
}
</script>
