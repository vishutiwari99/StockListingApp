import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const listItem = [
    {
        id: 1,
        name: 'GOOGL',
        img: './GOOGL.png',
        price: 1515
    },
    {
        id: 2,
        name: 'FB',
        img: './FB.png',
        price: 266
    },
    {
        id: 3,
        name: 'AMZN',
        img: './AMZN.svg',
        price: 3116
    }
]


const HeroCard = () => {
    const [characters, setCharacters] = useState(listItem)
    const handleOnDragEnd = (result) => {
        console.log("yaha", result)
        const items = Array.from(characters);
        const [reorderItem] = items.splice(result.source.index, 1);
        if (!result.destination) {
            return;
        }
        items.splice(result.destination.index, 0, reorderItem);
        setCharacters(items);
    }

    return (
        <DragDropContext
            onDragEnd={handleOnDragEnd}
        >
            <Droppable droppableId="droppable" direction="horizontal">
                {
                    (provided) => (
                        <div className="flex" {...provided.droppableProps} ref={provided.innerRef}>
                            {characters.map((item, index) => {
                                return (
                                    <Draggable key={item.name} draggableId={item.name} index={index}>
                                        {(provided) => (

                                            <div{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="m-2 h-36 w-96 bg-gray-100 flex flex-col items-center">
                                                <div className="flex justify-between">
                                                    <div className="p-5">{item.name}</div>
                                                    <img className="h-20 p-5" src={item.img} alt="" />
                                                </div>
                                                <div className="flex items-center">
                                                    <h1 className="text-3xl">{item.price} USD</h1>
                                                </div>
                                            </div>

                                        )}
                                    </Draggable>
                                )
                            }
                            )
                            }
                            {provided.placeholder}
                        </div>

                    )
                }

            </Droppable>
        </DragDropContext>
    )
}

export default HeroCard
