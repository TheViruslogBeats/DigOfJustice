import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

type Anchor = "top" | "left" | "bottom" | "right";

const TopBar = () => {
  const titles = [
    { path: "/", title: "Главная страница" },
    { path: "/news", title: "Настройка новостей" },
    { path: "/experts", title: "Настройка экспертов" },
    { path: "/program", title: "Настройка программы" },
  ];

  const router = useRouter();
  const [title, setTitle] = useState("Главная страница");
  useEffect(() => {
    titles.map(
      (title) => title.path === router.pathname && setTitle(title.title)
    );
  }, [router.pathname]);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const buttons: {
    id: number;
    svg: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    text: string;
    path: string;
  }[] = [
    { id: 1, svg: StarIcon, text: "Главная", path: "/" },
    { id: 2, svg: NewspaperIcon, text: "Новости", path: "/news" },
    { id: 3, svg: GroupIcon, text: "Эксперты", path: "/experts" },
    { id: 4, svg: DeviceHubIcon, text: "Программа", path: "/program" },
  ];

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        {buttons.map((button) => (
          <ListItem
            key={button.id}
            disablePadding
            onClick={() => {
              router.push(button.path);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <button.svg sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary={button.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title + " | conf.mirea.ru"}</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
          <Fragment key={"left"}>
            <Button onClick={toggleDrawer("left", true)}>{"left"}</Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
