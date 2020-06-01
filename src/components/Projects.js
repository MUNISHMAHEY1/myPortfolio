import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardReact1 from './CardReact1';
import CardReact2 from './CardReact2';
import CardPython1 from './CardPython1';
import CardPython2 from './CardPython2';
import CardMern1 from './CardMern1';
import CardJava from './CardJava';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <AppBar style={{ backgroundColor: "white", display:'flex'}} position="static">
        <Tabs className="category-tabs" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="MERN Stack" {...a11yProps(0)} />
          <Tab label="React.js" {...a11yProps(1)} />
          <Tab label="Python" {...a11yProps(2)} />
          <Tab label="Java" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <div className="cards"><CardMern1></CardMern1></div>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <div className="cards"><CardReact1></CardReact1></div>

        <div className="cards"><CardReact2></CardReact2></div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="cards"><CardPython1></CardPython1></div>
        <div className="cards"><CardPython2></CardPython2></div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="cards"><CardJava></CardJava></div>
      </TabPanel>
    </div>
  );
}