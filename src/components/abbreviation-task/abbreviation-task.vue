<script setup lang="ts">
import { ref } from 'vue';
import { BaseReplaceTask } from '@/components/base-replace-task';
import { insertAbbr } from '../../utils/insert-abbr';

const taskRef= ref<InstanceType<typeof BaseReplaceTask>>();

const handleClick = (value: string) => {
    const result = insertAbbr(value);
    taskRef.value?.setResultText(result);
}

const taskText = 'Заменить в тексте все аббревиатуры HTML, CSS, JS. Если эти сокращения написаны строчными — заменить на прописные. Важно, чтобы выражение не совпадало на расширениях файлов.';
const exampleData = 'Одностраничное приложение — это приложение, которое состоит из единственной страницы и прочих ресурсов (таких как HTML, js и CSS), необходимых для успешной работы. Запуск приложения осуществляется из единственного файла index.html в корневой папке.';
const solutionText = 'const insertAbbr = (str: string) => {return str.replace(/[^\.]\b(css|html|js)\b/gi, (s, $1) => {const shortName = $1.toUpperCase(); return ` <abbr title="${Abbr[shortName]}">${shortName}</abbr>`})};';

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