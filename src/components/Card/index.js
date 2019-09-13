import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styles';
import BoardContext from '../Board/context';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);
  let memTime = 0;

  const [ {isDragging} , dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      var date = new Date();
      var now = date.getTime();
      if(memTime == 0) memTime = now;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      const targetSize = ref.current.getBoundingClientRect(); // pega o tamanho do card e a posicao
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;
      
      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      
      // evitar calculo desnecessário
      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
      } 
      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
      }
      
      if((now - memTime) >= 300 || draggedListIndex == targetListIndex){
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex,'card');
        item.index = targetIndex;
        item.listIndex = targetListIndex;
        memTime = 0;
      }
    }
  });

  dragRef(dropRef(ref));

  return (
   <Container ref={ref} isDragging={isDragging}>
     <header>
       {data.labels.map(label => <Label color={label} key={label} ></Label>)}
     </header>
      <p>
         {data.content}
      </p>
      {data.user && <img src={data.user} />}     
   </Container>
  );
}
