import { Container,Box,Paper,Typography } from '@mui/material';

export const PagePaper = (props) =>{
    return(
    <Box maxWidth='' >
        <Paper elevation={3} sx={{m:4,padding:5,bgcolor:'yellow',textAlign:'left',minHeight:'75vh'}}>
        <Typography variant='h3' component="h1">
            {props.heading}
        </Typography>
        <Typography variant='body1'>
            {props.bodyText}
        </Typography>
        </Paper>
    </Box>)
}
