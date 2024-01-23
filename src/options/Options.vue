<script setup lang="js">
import { ref, onMounted } from 'vue'
import { ElButton } from 'element-plus'

const buttonText = ref('你好')

onMounted(() => {


})

function clickButtonFunction() {
  console.log(123)
  buttonText.value += "你好"
}

</script>

<template>
  <el-button type="primary" @click="clickButtonFunction">{{ buttonText }}</el-button>
</template>

<style></style>
