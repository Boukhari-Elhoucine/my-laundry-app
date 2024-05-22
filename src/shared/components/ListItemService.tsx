import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ListItemServiceProps = { name: string };

export const ListItemService = (props: ListItemServiceProps) => (
  <ListItem disablePadding sx={{ marginTop: '24px' }}>
    <ListItemIcon sx={{ minWidth: '32px' }}>
      <CheckCircleIcon style={{ color: 'black' }} />
    </ListItemIcon>
    <ListItemText
      disableTypography={true}
      primary={props.name}
      sx={{
        fontFamily: 'Inter',
        fontSize: '18px',
        lineHeight: '21.78px',
        fontWeight: 400,
        margin: 0,
        color: '#35353F',
      }}
    />
  </ListItem>
);
