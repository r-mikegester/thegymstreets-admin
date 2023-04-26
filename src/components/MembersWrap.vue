<template>
    <div class="mx-auto max-w-full">
        <ul class=" list-none flex bg-[#004aad]">
            <li class=" tabs_header w-full mx-auto text-center py-3 text-xl cursor-pointer transition ease-in-out delay-75 bg-[#004aad40] active:bg-blue-700 hover:bg-blue-900 "
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
