import * as React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

import ProductList from '@components/ProductList';
import ProductListBasket from '@components/ProductListBasket';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    padding: `40px 115px 60px 65px`,
    [theme.breakpoints.down('md')]: {
      padding: `10px 20px 60px`,
    },
  },
  tabs: {
    minHeight: 'unset',
    margin: `0 -15px`,
    overflowX: 'auto',
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .Mui-selected > span': {
      textShadow: `0px 0px 1px rgba(0,0,0,0.5)`,
      color: theme.colors.black,
      borderBottom: `2px solid ${theme.palette.info.main}`,
    },
    '& .MuiTabScrollButton-root': {
      width: 'fit-content',
    },
  },
  tab: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '19px',
    letterSpacing: 'initial',
    textTransform: 'initial',
    whiteSpace: 'nowrap',
    height: '100%',
    minWidth: '0',
    minHeight: 'unset',
    padding: `15px 20px 0`,
    color: theme.colors.gray,
    '&:hover': {
      color: theme.colors.black,
      textShadow: `0px 0px 1px rgba(0,0,0,0.5)`,
    },
  },
  tabSpan: {
    paddingBottom: '10px',
    borderBottom: `2px solid transparent`,
    transition: `all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
  },
  badge: {
    '& .MuiBadge-badge': {
      fontFamily: 'Roboto',
      fontSize: '10px',
      fontWeight: '700',
      lineHeight: '12px',
      letterSpacing: 'initial',
      textTransform: 'initial',
      whiteSpace: 'nowrap',
      width: '19px',
      height: '19px',
      color: theme.colors.white,
      top: '-5px',
      right: '-9px',
    },
  },
  tabPanel: {
    '& > div': {
      padding: `20px 0 0`,
    },
  },
}));

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

export default function OrderTabs() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={true}
        className={classes.tabs}
        indicator="false"
      >
        <Tab
          className={classes.tab}
          label={<span className={classes.tabSpan}>Просмотренные</span>}
          {...a11yProps(0)}
        />
        <Tab
          className={classes.tab}
          label={<span className={classes.tabSpan}>Избранное</span>}
          {...a11yProps(1)}
        />
        <Tab
          className={classes.tab}
          label={<span className={classes.tabSpan}>Корзина</span>}
          {...a11yProps(2)}
        ></Tab>
        <Tab
          className={classes.tab}
          label={
            <Badge className={classes.badge} badgeContent={3} color="success">
              <span className={classes.tabSpan}>Ждут оплаты</span>
            </Badge>
          }
          {...a11yProps(3)}
        />
        <Tab
          className={classes.tab}
          label={
            <Badge className={classes.badge} badgeContent={3} color="success">
              <span className={classes.tabSpan}>Оплаченные</span>
            </Badge>
          }
          {...a11yProps(4)}
        />
        <Tab
          className={classes.tab}
          label={
            <Badge className={classes.badge} badgeContent={3} color="success">
              <span className={classes.tabSpan}>Ждут получения</span>
            </Badge>
          }
          {...a11yProps(5)}
        />
        <Tab
          className={classes.tab}
          label={
            <Badge className={classes.badge} badgeContent={3} color="success">
              <span className={classes.tabSpan}>Завершенные</span>
            </Badge>
          }
          {...a11yProps(6)}
        />
        <Tab
          className={classes.tab}
          label={
            <Badge className={classes.badge} badgeContent={5} color="error">
              <span className={classes.tabSpan}>Заказы/работа</span>
            </Badge>
          }
          {...a11yProps(7)}
        />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <ProductList type="viewed" />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <ProductList type="favourites" />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <ProductListBasket />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductList type="waitingPayment" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductList type="withTracker" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ProductList type="waitingRecieve" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ProductList type="finished" />
      </TabPanel>
      <TabPanel value={value} index={7}>
        Заказы/работа
      </TabPanel>
    </Box>
  );
}
