
import { Box, Typography, styled } from '@mui/material';
// import Youtube from '../Assets/Images/youtube.png';
import Homes from '../Assets/Images/home.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: 'auto'
});

const Home = () => {
    
    return (
        <Header>
            <Typography variant="h4">Home</Typography>
            <Box style={{display: 'flex'}}>
                {/* <Image src={Youtube}  /> */}
                <Image src={Homes} />
            </Box>
        </Header>
    )
}

export default Home;