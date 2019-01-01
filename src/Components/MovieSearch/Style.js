import styled from 'styled-components'

export const Search = styled.div`  
overflow:hidden;
width:80%;
position:relative;
margin:10px 0 0 0;
.search-icon{
    position: absolute;
    top: 14px;
    right: 16px;
}
.search-input{
    width:80%;
    background:#fff;
    border-radius:50px;
    padding:8px 15px;
    float:right;
    display:inline
}

`

export const SearchResults = styled.div`  
width: 98%;
padding: 1%;
.notfound{
    text-align:center;
    margin:20px 0 0 0;
}
`