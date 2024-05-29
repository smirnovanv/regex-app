<script setup lang="ts">
import { ref } from 'vue';
import { BaseReplaceTask } from '@/components/base-replace-task';

const taskRef= ref<InstanceType<typeof BaseReplaceTask>>();

const getSystemData = (text: string) => {
    const regex = /.+?\((.+?)\).+/;
    return text.replace(regex, '$1')
}

const handleClick = (value: string) => {
    const result = getSystemData(value);
    taskRef.value?.setResultText(result);
}

const taskText = 'Извлечь системные данные из первых скобок';
const exampleData = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
const solutionText = `const getSystemData = (text: string) => {const regex = /.+?\((.+?)\).+/; return text.replace(regex, '$1');}`;
</script>

<template>
    <base-replace-task 
        ref="taskRef"
        :taskText="taskText" 
        :exampleData="exampleData" 
        :solutionText="solutionText"
        @submit="handleClick"
    />
</template>