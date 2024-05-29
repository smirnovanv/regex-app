<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  taskText: string;
  exampleData: string;
  solutionText: string;
}

const props = defineProps<Props>();

interface Emits {
  (event: 'submit', value: string): void;
}

const emit = defineEmits<Emits>();

const resultText = ref('');
const inputValue = ref('');

const setResultText = (value: string) => {
    resultText.value = value;
}

const handleClick = () => {
    emit('submit', inputValue.value)
}

defineExpose({
    setResultText
});
</script>

<template>
    <a-card>
        <a-flex gap="small" vertical>
            <a-typography-title :level="4">Условие задачи</a-typography-title>
            <a-typography-text>{{ props.taskText }}</a-typography-text>
            <a-typography-title :level="4">Решение</a-typography-title>
            <a-typography-text code>
                {{ props.solutionText }}
            </a-typography-text>
            <a-typography-title :level="4">Пример данных для обработки</a-typography-title>
            <a-typography-text>{{ props.exampleData }}</a-typography-text>
            
            <a-flex gap="small">
                <a-input v-model:value="inputValue"></a-input>
                <a-button @click="handleClick">Применить</a-button>
            </a-flex>
            
            <a-typography-title :level="4">Результат</a-typography-title>
            <div v-html="resultText"></div>
        </a-flex>
    </a-card>
</template>