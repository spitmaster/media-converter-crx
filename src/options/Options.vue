<script setup lang="js">
import { ref, onMounted } from 'vue'
import { genFileId } from 'element-plus'


const buttonText = ref('你好')

const fileList = ref([])
const upload = ref([])

onMounted(() => {


})

function clickButtonFunction() {
  console.log(123)
  buttonText.value += "你好"
}

//仅允许选中一个文件
function handleExceed(files) {
  upload.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
}

</script>

<template>
  <el-button type="primary" @click="clickButtonFunction">{{ buttonText }}</el-button>
  <el-upload class="upload-demo" ref="upload" v-model:file-list="fileList" drag :limit="1" :on-exceed="handleExceed">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<style></style>
