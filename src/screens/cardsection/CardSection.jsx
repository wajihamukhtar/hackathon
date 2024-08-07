import React, { useEffect, useState } from 'react'
import { Auth_Data } from '../../constants/constant'
import Card from '../../components/global/Card';
import { Grid, Typography } from '@mui/material';
import { GET } from '../../auth/axiosMethod';
import { cardData } from '../../api/endPoints';
import CardData from '../../components/global/Card';

const CardSection = () => {
    // const cardData = Auth_Data?.cardData || [];
    const [card,setCard]=useState([])
    useEffect(()=>{
   GET(cardData).then((result)=>{
    if (result.error) {
      console.error("Error:", result.error);
    } else {
      setCard(result);
    }
   })
    },[])
  return (
    <>
    <Typography variant='h4' sx={{textAlign:'center'}}>Card Section</Typography>
      <Grid container spacing={3} sx={{ justifyContent:"center", backgroundSize: "cover", pr: {xs:2,md:2,lg:2.6},py:8, minHeight: '490px', justifyContent: 'center', alignItems: 'center' }}>
        {card.map((item, index) => (
         <CardData key={index} icon={item.icon} heading={item.heading} para={item.para}/>
        ))}
      </Grid>
    </>
  )
}

export default CardSection
