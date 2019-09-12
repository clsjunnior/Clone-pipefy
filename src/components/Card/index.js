import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Container, Label } from './styles';

export default function Card({ data, index }) {
  const ref = useRef();
  const [ {isDragging} , dragRef] = useDrag({
    item: { type: 'CARD', index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){ 
      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex === targetIndex){
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
