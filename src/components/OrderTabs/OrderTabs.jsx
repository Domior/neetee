import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import './OrderTabs.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index, styled) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: '100%', pt: '40px', pl: '115px', pb: '60px', pr: '65px' }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Просмотренные" {...a11yProps(0)} />
          <Tab label="Избранное" {...a11yProps(1)} />
          <Tab label="Корзина" {...a11yProps(2)} />
          <Tab label="Ждут оплаты" {...a11yProps(3)} />
          <Tab label="Оплаченные" {...a11yProps(4)} />
          <Tab label="Ждут получения" {...a11yProps(5)} />
          <Tab label="Завершенные" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Просмотренные
      </TabPanel>
      <TabPanel value={value} index={1}>
        Избранное
      </TabPanel>
      <TabPanel value={value} index={2}>
        Корзина
      </TabPanel>
      <TabPanel value={value} index={3}>
        Ждут оплаты
      </TabPanel>
      <TabPanel value={value} index={4}>
        Оплаченные
      </TabPanel>
      <TabPanel value={value} index={5}>
        Ждут получения
      </TabPanel>
      <TabPanel value={value} index={6}>
        Завершенные
      </TabPanel>
    </Box>
  );
}
