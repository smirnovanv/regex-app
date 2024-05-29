<script setup lang="ts">
import { ref } from 'vue';
import { SmileTask } from '@/components/smile-task';
import { SystemTask } from '@/components/system-task';
import { AbbreviationTask } from '@/components/abbreviation-task';

const activeKey = ref(['1']);

</script>

<template>
    <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel key="1" header="Задание 1. Смайлы.">
            <smile-task />
        </a-collapse-panel>
        <a-collapse-panel key="2" header="Задание 2. Извлечение системных данных">
            <system-task />
        </a-collapse-panel>
        <a-collapse-panel key="3" header="Задание 3. Расшифровка аббревиатуры">
            <abbreviation-task />
        </a-collapse-panel>
    </a-collapse>
</template>