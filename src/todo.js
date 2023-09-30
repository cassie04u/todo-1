import { addBtnHandler } from "./handler";
import { addBtn } from "./selectors";

const listener = () =>{
    addBtn.addEventListener("click",addBtnHandler);
}

const initTodo = () => {

    console.log("to do start");
    listener();
    

}

export default initTodo;