import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Inbox as InboxIcon, Mail as MailIcon, ExitToApp, Home, Person2, Settings, Equalizer } from '@mui/icons-material';
import NextLink from "next/link";
import scss from './Sidemenu.module.scss';
import { text } from 'stream/consumers';
import { signOut } from 'next-auth/react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const menuRouteList = ["analytics", "profile", "settings", ""];
const menuListTranslations = ["Analytics", "Profile", "Settings", "Sign Out"];
const menuListIcons = [<Equalizer/>, <Person2/>, <Settings/>, <ExitToApp/>];


export default function SideMenu()
{
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const mobileCheck = useMediaQuery('min-width:600px');

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleListItemButtonClick = (text: string) =>{
      text == "Sign Out" ? signOut() : null;
      setOpen(false);
    }

    return(
      <Drawer variant="permanent" open={open} anchor='left'
        sx={{
            [`& .MuiDrawer-paper`]:{
                top:'64px',
                // top: mobileCheck ? '64px' : '50px',
                // top: mobileCheck ? 64 : 57,
            }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <NextLink className={scss.link} href={`/dashboard/${menuRouteList[index]}`}>
                    <ListItemButton 
                        title={text}
                        aria-label={text}
                        onClick={()=>handleListItemButtonClick(text)}
                        sx={[
                        {
                            minHeight: 48,
                            px: 2.5,
                        },
                        open
                            ? {
                                justifyContent: 'initial',
                            }
                            : {
                                justifyContent: 'center',
                            },
                        ]}
                    >
                        <ListItemIcon
                        sx={[
                            {
                            minWidth: 0,
                            justifyContent: 'center',
                            },
                            open
                            ? {
                                mr: 3,
                                }
                            : {
                                mr: 'auto',
                                },
                        ]}
                        >
                        {menuListIcons[index]}
                        </ListItemIcon>
                        <ListItemText
                        primary={text}
                        sx={[
                             { 
                                opacity: open ? 1 : 0, 
                                color: theme.palette.text.primary
                            }
                        ]}
                        />
                    </ListItemButton>
                </NextLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
}