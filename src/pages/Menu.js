import React from 'react'
import CommonUI from '../components/CommonUI'
import { menuData } from '../helper/menuData'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const Menu = () => {
  return (
    <CommonUI>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {menuData.map((menu) => (
      <Card sx={{ maxWidth: "390px", display: "flex", m: 2 
   }}>
        <CardActionArea>
          <CardMedia
            sx={{ minHeight: "400px" }}
            component={"img"}
            src={menu.image}
            alt={menu.name}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom component={"div"}>
              {menu.name}
            </Typography>
            <Typography variant="body2">{menu.desc}</Typography>
            <Typography variant="body1" sx={{marginTop : 2}}>&#8377;{' '}{menu.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    ))}
  </Box>
    </CommonUI>
  )
}

export default Menu