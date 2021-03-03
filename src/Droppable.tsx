import React from 'react';
import {useDroppable} from '@dnd-kit/core';

function Droppable(props: any) {
    const{isOver, setNodeRef} = useDroppable({
        id: props.id,
    });

    const style = {
        color: isOver ? "red" : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className="todoList">
           {props.children}
        </div>
    )
}

export default Droppable
