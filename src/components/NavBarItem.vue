<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'

const props = defineProps<{
  label: string
  to: RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
}>()
</script>

<template>
  <li>
    <RouterLink
      class="hover: block rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      :to="props.to"
      >{{ props.label }}</RouterLink
    >
  </li>
</template>
