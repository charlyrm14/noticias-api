import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNews } from '../hooks/useNews';
import { Post } from './Post';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export function ListNews () {

    const { news, totalNews, handleChangePage, page } = useNews();

    const totalPages = Math.ceil(totalNews / 20);

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h6'
                component={'h2'}
            >
                ÚLTIMAS NOTICIAS
            </Typography>

            <Grid container spacing={2}>
                {
                    news.map( post => (
                        <Post key={ post.url } post={ post }/>
                    ))
                }
            </Grid>

            <Stack spacing={2}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    marginY={5}>
                    <Pagination 
                        count={totalPages} 
                        shape="rounded" 
                        color='primary' 
                        onChange={ handleChangePage }
                        page={page}/>
            </Stack>

        </>
    )

}