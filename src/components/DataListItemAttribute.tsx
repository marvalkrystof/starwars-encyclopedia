
import { ListItem, ListItemText } from '@mui/material'

type Props = {
    label : string,
    data? : string

}

const DataListItemAttribute  : React.FC<Props> = ({label, data}: Props) => {
  const result = (data === undefined) 
  ? label 
  : label + " " + data;
  return (
    <ListItem sx={{ pl: 4 }}>
            <ListItemText primary={result} />
    </ListItem>
  )
}

export default DataListItemAttribute