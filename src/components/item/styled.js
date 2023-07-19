import styled from "styled-components";

export const ItemRow = styled.div`

  .card {
    float: left;
    margin-right: 50px !important;
    margin-left: 50px !important;
    margin-bottom: 35px;
    width: 300px;
    height: 322px;
    overflow: hidden;
  
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.15), 0 3px 3px rgba(0, 0, 0, 0.15);
  
    
    }
    .card .image{
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    .card .image img{
      min-width: 100% !important;
      width: auto !important;
      height: 200px !important;
      margin: 0 !important;
      padding: 0 ;
  }
    .content {
      padding: 20px;
      padding-top: 0 !important;
      
    }
    .content p{
      
        color: black;
        font-size: 18px;
        font-weight: 500;
      
    }
    .meta {
      margin-bottom: 0.4rem;
      text-transform: uppercase;
  
      line-height: 1.2;
  
    }

    .meta p{
      
        color: #ffcc00;
        font-size: 18px !important;
        font-weight: 600;
        margin-top: 0.6rem;
        margin-bottom: 0;
      
    }

    .content .description{
      margin-top:0;
    }
   
    .content span{
      position: relative;
      bottom:12px;
      font-weight:600;
    }

`