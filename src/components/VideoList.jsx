import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { videoData } from "../utils/videoData";

export const VideoList = ({ handlePlay }) => {
  const [characters, updateCharacters] = useState(videoData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <div className="max-h-[550px] overflow-y-scroll shadow-inner">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              className="characters"
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      onClick={() => handlePlay(id)}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        border: "1px solid black",
                        marginBottom: "8px",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <div className="flex flex-row justify-start items-center gap-2">
                        <img
                          src="https://picsum.photos/id/297/100/100"
                          alt={`${name} Thumb`}
                        />
                        <h1 className="text-black font-semibold">{name}</h1>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
