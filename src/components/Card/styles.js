import styled, { css } from 'styled-components';
// css - para multiplas implementacoes baseado em uma condição
export const Container = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    font-weight: bold;
    cursor: grab;

    header{
        position: absolute;
        top: -22px;
        left: 15px;
    }

    p{
        line-height: 20px;
    }
    
    img{
        width: 30px;
        height:30px;
        border-radius: 10px;
        margin-top: 5px;
    }

    /* Se existir a propriedade de movimento estilizar da seguinte forma */
    ${props => props.isDragging && css`
        border: 2px dashed rgba(0,0,0,0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow:none;
        cursor: grabbing;

        p, img, header{
            opacity: 0;
        }
    `}
`;

export const Label = styled.span`

    &:nth-child(n+1){
        margin-left: 5px;
    }

    width: 10px;
    height: 10px;
    border-radius: 2px;
    display:inline-block;
    background: ${props => props.color};

    
`;
