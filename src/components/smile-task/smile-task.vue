<script setup lang="ts">
import { ref } from 'vue';
import { BaseReplaceTask } from '@/components/base-replace-task';

const taskRef= ref<InstanceType<typeof BaseReplaceTask>>();

const replaceSmiles = (text: string) => {
    return text.replace(/:[\)]{10,}/g, '😀 😀 😀').replace(/:[\)]+/g, '😀');
}

const handleClick = (value: string) => {
    const result = replaceSmiles(value);
    taskRef.value?.setResultText(result)
}

const taskText = 'Заменить в тексте смайлы :))) на иконку смайла. Если скобочек 10 или больше, заменить на 3 смайла.';
const exampleData = 'Лёня и Алёша гуляли во дворе. Потом вышел Серёжа. С ним была сестрёнка Алёнка. Серёжа нёс санки. Дети стали катать Алёнку. Потом пришли Лёва и тётя Таня. Они купили ёлку. Лёва отнёс ёлку домой и стал катать ребят на санках. :))))))) Лёва вёз на санках Лёню. Потом — Алёшу. Потом — Серёжу. Потом — Алёнку. Лёва — старший. :)))))))))))))))))))))))) Потом ребята все вместе катали Лёву. Весёлая была прогулка!'
const solutionText = `const replaceSmiles = (text: string) => {return text.replace(/:[\)]{10,}/g, '😀 😀 😀').replace(/:[\)]+/g, '😀');}`;
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