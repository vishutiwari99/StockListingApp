import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const HeroCard = () => {
    return (
        <div className="m-2 h-32 w-48 bg-gray-200 flex flex-col items-center">
            <div className="flex justify-between">
                <div className="p-5">GOOGL</div>
                <img className="h-16 p-5" src="./GOOGL.png" alt="" />
            </div>
            <div className="flex items-center">
                <h1 className="text-3xl">1515 USD</h1>
            </div>
        </div>
    )
}

export default HeroCard
