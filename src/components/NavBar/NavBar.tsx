import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './NavBar.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component={"div"} className="sm: p-6">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component={"div"} className="sm:w-100">
      <Box component={"div"} className="sm:border-b border-transparent ">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600" label="Luminocity Logo" {...a11yProps(0)} />
          <Tab style={{color:"white"}} label="What We Do" {...a11yProps(1)} />
          <Tab style={{color:"white"}} label="Our Goal" {...a11yProps(2)} />
          <Tab style={{color:"white"}} label="Contact" {...a11yProps(2)} />
          <Tab style={{color:"white"}} label="Our Product" {...a11yProps(2)} />

        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}