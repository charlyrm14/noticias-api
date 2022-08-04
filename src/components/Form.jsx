import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNews } from '../hooks/useNews';


const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

export function Form () {

    const { category, handleChangeCategory } = useNews();

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel> Categorías </InputLabel>
                <Select
                    label='Categoría'
                    onChange={ handleChangeCategory }
                    value={ category }>

                        {
                            CATEGORIES.map( category => (
                                <MenuItem   key={ category.value } 
                                            value={ category.value }> 
                                            
                                            { category.label } 
                                </MenuItem>
                            ))
                        }

                </Select>
                
            </FormControl>
        </form>
    )
}