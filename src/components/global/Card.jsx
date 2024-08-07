import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business';
import { Card } from 'antd';
const { Meta } = Card; 

export const iconMap = {
  BusinessIcon: <BusinessIcon sx={{ fontSize: '40px' }} />
};
const CardData = (props) => {
  return (
    <Grid item xs={12} md={6} lg={4} >
    {/* <Box sx={{
      display: 'flex', boxShadow: '5px 5px 5px 1px #00000040', borderRadius: "18px", transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
         boxShadow: '5px 5px 5px 4px #00000040'
      }
      , justifyContent: { xs: 'start', md: 'center' }, minHeight: '95px', maxWidth: { lg: '100%', md: '95%' }, mr: { md: '13px' ,lg:'4px', },  p:1, backgroundColor: 'common.white'
    }}>
        // <Typography component={'span'} sx={{
                borderRadius: "50%",
                background: 'linear-gradient(to bottom right,#5D5FEF, #4079ED )',
                padding: '17px',
                mr: 2,
                marginY:'5px',
                position: 'relative'
              }}>
                <Typography sx={{ width: '100%', alignItems: 'start', color: 'common.white', justifyContent: 'center', display: 'flex', }}>
                    {iconMap[props.icon]}
                    </Typography>
                    </Typography>
      <Box><Typography sx={{
        cursor: "pointer",
        fontWeight: 'bold',
        '&:hover': {
          color: '#4079ED',
        },
      }} variant='h6'>{props.heading}</Typography>
        <Typography sx={{ width: '100%', pt: '5px' }} variant='body2'>{props.para}</Typography></Box>
    </Box> */}
 <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={iconMap[props.icon]}
  >
    <Meta title={props.heading} description={props.para} />
  </Card>
  </Grid>
  )
}

export default CardData
