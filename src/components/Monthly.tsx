import { useCallback, useState, Fragment, useMemo, ChangeEvent } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export interface MonthlyData {
  day: number;
  projects: string[];
}

export interface MonthlyProps {
  defaultOpen?: boolean;
  data: MonthlyData[];
}

export const Monthly = ({ data, defaultOpen }: MonthlyProps) => {
  const [open, setOpen] = useState<boolean[]>(new Array(data.length).fill(!!defaultOpen));

  const checked = useMemo(() => !open.some((item) => item === false), [open]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setOpen((prevValue) => {
      return [...prevValue.map(() => event.target.checked)];
    });
  }, []);

  const handleClick = useCallback((index: number) => {
    setOpen((prevValue) => {
      prevValue[index] = !prevValue[index];
      return [...prevValue];
    });
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        maxHeight: 400,
        overflowY: "auto",
        bgcolor: "background.paper",
        borderRadius: 1.5,
        boxShadow: 1,
      }}
      component="nav"
      aria-labelledby="monthly-list-subheader"
      subheader={
        <ListSubheader component="div" id="monthly-list-subheader" sx={{ borderRadius: 1.5 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="overline">Monthly</Typography>
            <Switch checked={checked} onChange={handleChange} />
          </Stack>
        </ListSubheader>
      }
    >
      {data.length ? (
        data.map(({ day, projects }, index) => (
          <Fragment key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemIcon
                sx={{
                  minWidth: 36,
                }}
              >
                <AccessAlarmIcon />
              </ListItemIcon>
              <ListItemText primary={day} />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding dense>
                {projects.length ? (
                  projects.map((project, index) => (
                    <ListItem sx={{ pl: 4 }} key={index}>
                      <ListItemIcon
                        sx={{
                          minWidth: 24,
                        }}
                      >
                        <Grid3x3Icon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={project} />
                    </ListItem>
                  ))
                ) : (
                  <ListItem sx={{ pl: 4 }}>
                    <ListItemText primary="No Data" />
                  </ListItem>
                )}
              </List>
            </Collapse>
          </Fragment>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No Data" />
        </ListItem>
      )}
    </List>
  );
};
