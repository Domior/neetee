import * as React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  breadcrumbsContainer: {
    margin: `20px 0 40px`,
    [theme.breakpoints.down('md')]: {
      padding: `0 20px`,
    },
  },
  breadcrumbs: {
    width: '100%',
    height: '50px',
    padding: `0 20px`,
    backgroundColor: '#F5F5F5',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      height: '60px',
      padding: `0 60px 0 15px`,
    },
    '& ol': {
      height: 'inherit',
    },
    '& ol li a': {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '16px',
      color: '#666666',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    '& ol li:last-of-type a': {
      color: '#4270AD',
    },
  },
}));

export default function MainBreadcrumbs(props) {
  const classes = useStyles();

  const { data } = props;
  return (
    <div className={classes.breadcrumbsContainer} role="presentation">
      <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
        {data.map((item) => (
          <Link className={classes.link} href={item.link} key={item.title}>
            {item.title}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
