import React from "react";
import Yff from "../yff";

function Pig() {
    return (
        <div>
            <Yff />
            <div>猪猪喜欢丸丸</div>
        </div>
    );
}

export default Pig;

// es6
// react
// 做项目
// webpack

let task = {
    id: "1",
    name: "aaa",
    isChecked: false,
};

const taskId = task.id;
const { id } = task;

const storage = window.localStorage;
const { localStorage } = window;