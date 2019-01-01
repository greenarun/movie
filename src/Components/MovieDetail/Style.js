import styled from 'styled-components'

export const MovieDetails = styled.div` 
 .Card{
     width:80%;
     margin:0 auto;
     margin-top:30px;
 }
 .progressValue span{
    height:auto;
    width:auto;
    margin-top:5px;
}
.vote_count{
    position:absolute;
    top:1px;
    left:8px;
    font-size:12px;
    color:#000
}
`

export const Description = styled.div` 
overflow:hidden;
padding:2%;
 .cardMedia{
     width:180px;
     height:278px;
     float:left;
     display:inline
 }
 .cardContent{
     float:left;
     display:inline;
     width:70%;
     padding-top:0;
 }
 .cardContent ul{
     margin:0;
 } 
 .cardContent ul li span{
     color:#999;
     font-style:italic;
 }

`
export const ChipContent = styled.div` 
margin:0 0px 10px 0; 
`