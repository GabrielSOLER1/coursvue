<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'

interface propsInterface {
  to: RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  label: string
}
const props = defineProps<propsInterface>()
</script>

<template>
  <RouterLink :to="props.to">{{ props.label }}</RouterLink>
</template>
