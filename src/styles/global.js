import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    @import url('http://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background: #ecf1f8;
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style:none;
    }

`;