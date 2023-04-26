import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore("list", () => {
    // 할 일과 예상 시간을 담을 배열
    const list = ref([]);
    // 할 일과 예상 시간이 날아온 데이터를 list에 넣어주는 함수
    function addList(todos) {
        list.value.push({...todos, date: new Date().toISOString().substring(0, 10)})
        todos.title = ''
        todos.time = ''
        todos.id++
    }
    return {list, addList}
});