import { Box, Typography } from '@mui/material'
import { specialityData } from '../assets/assets_frontend/assets'

const Speciality = () => {
  return (
    <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , gap:"30px" , marginTop:"30px"}}>
      <Typography variant='h4' sx={{fontWeight:"500"}} >Find by Speciality</Typography>
      <Typography variant='body2' align='center' sx={{width:"500px"}}>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</Typography>
      <Box sx={{display:"flex" , justifyContent:"center" , gap:"30px"}}>
        {
          specialityData.map((doctor, index) => (
            <Box 
              key={index} 
              sx={{
                textAlign: 'center', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                }
              }}
            >
              <img src={doctor.image} alt={doctor.speciality} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography>{doctor.speciality}</Typography>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default Speciality