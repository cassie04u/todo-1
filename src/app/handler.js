import { textInput } from "./selectors";
import { addTask, getTask, taskRender } from "./task";

export const addBtnHandler = () =>{
    // console.log(textInput.value);
    addTask(textInput.value);
    taskRender(getTask());
}