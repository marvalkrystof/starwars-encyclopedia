import React, { useState } from 'react'
import {useFetchMultiple} from '../hooks/UseFetch'
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { Films } from '../types/Types'
import { getEndpointFromUrl } from '../utils/apiUtils'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import DataListItemAttribute from './DataListItemAttribute'

type Props = {
    filmUrls : string[]
}

const DataListItemFilms : React.FC<Props> = ({filmUrls}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [fetchData, setFetchData] = useState<boolean>(false);

  
    const handleClick = () => {
        setOpen(!open);
        if (!fetchData) {
          setFetchData(true); 
        }
      };
    
    const {data, loading, error} = useFetchMultiple<Films>({endpoints: filmUrls.map(getEndpointFromUrl), enabled: fetchData})
      
  
  
    return (
      <>
      <ListItemButton onClick={handleClick}>
      <ListItemText primary="Films" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {loading && <DataListItemAttribute label="Loading..." />}
        {error && <DataListItemAttribute label="Error occured while fetching some movies." />}
        {data.map((film) =>
        film ? (
          <DataListItemAttribute key={film.url} label={film?.title} />
        ) : null
          )}
        
        </List>
        </Collapse>
        </>
  )
}

export default DataListItemFilms