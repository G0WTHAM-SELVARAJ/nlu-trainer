import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';
import Files from 'react-files';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Collapse from '@material-ui/core/Collapse';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  appbar2:{
    height: '5%',
    backgroundColor: '#2F3057',
    boxShadow: 'none',
    marginTop: 40
  },
  toolbar: {
    marginTop: -5,
    
  },
  text: {
    flexGrow: 1,
    color: 'rgba(0,0,0,0.65)',
    fontWeight: "bold",
    fontSize: '14.04px',
    marginLeft: 10
  },
  btn:{
      gap: 10,
      height: 'auto',
      position: 'static',
      borderRadius: 100,
      marginRight: 5,
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '13px',
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    left: window.innerWidth/1.2,
    padding: theme.spacing(0),
    backgroundColor: 'rgba(0,0,0,0)',
    height: '10%',
    color: 'rgba(0,0,0,0.65)',
    width: '15%',
    fontSize: '12px',
    height: '100%',
  },
  TextField: {
    height: 'auto',
  },
  table: {
    marginTop: 60,
    width: '100%',
    overflow: 'hidden',
  }
}));
const initailJSON = {
  "rasa_nlu_data": {
    "common_examples": [
      {
        "text": "hey",
        "intent": "greet",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "howdy",
        "intent": "greet",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "hey there",
        "intent": "greet",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "hello",
        "intent": "greet",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "hi",
        "intent": "greet",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "i'm looking for a place to eat",
        "intent": "restaurant_search",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "i'm looking for a place in the north of town",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 31,
            "end": 36,
            "value": "north",
            "entity": "location",
            
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "show me chinese restaurants",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 8,
            "end": 15,
            "value": "chinese",
            "entity": "cuisine"
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "yes",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "yep",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "yeah",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "show me a mexican place in the centre",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 31,
            "end": 37,
            "value": "centre",
            "entity": "location"
          },
          {
            "start": 10,
            "end": 17,
            "value": "mexican",
            "entity": "cuisine"
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "bye",
        "intent": "goodbye",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "goodbye",
        "intent": "goodbye",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "good bye",
        "intent": "goodbye",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "stop",
        "intent": "goodbye",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "end",
        "intent": "goodbye",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "i am looking for an indian spot",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 20,
            "end": 26,
            "value": "indian",
            "entity": "cuisine"
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "search for restaurants",
        "intent": "restaurant_search",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "anywhere in the west",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 16,
            "end": 20,
            "value": "west",
            "entity": "location"
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "central indian restaurant",
        "intent": "restaurant_search",
        "entities": [
          {
            "start": 0,
            "end": 7,
            "value": "central",
            "entity": "location"
          },
          {
            "start": 8,
            "end": 14,
            "value": "indian",
            "entity": "cuisine"
          }
        ],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "indeed",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "that's right",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "ok",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      },
      {
        "text": "great",
        "intent": "affirm",
        "entities": [],
        "open": false,
        "buttondisable": true,
        "buttonexText": '\'select some part of the text to create a new entity\'',
        "intentfilter": true,
      }
    ]
  }
}

export default function Home(props) {

const classes = useStyles();
const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

 const [wid,setWid] =React.useState(window.innerWidth);
 const [hei, setHei] = React.useState(window.innerHeight);

var [jsonfile, setJsonfile] =React.useState(initailJSON);
const dataupdate= Object.assign({},jsonfile);

const fileReader = new FileReader();
fileReader.onload = event => {
  const keyvalue = JSON.parse(event.target.result);
  if(keyvalue.rasa_nlu_data==undefined){
    alert('The uploaded json file is not valid')
    window.location.reload();
  }
  setJsonfile(JSON.parse(event.target.result));
  };
const [nodata, setNoData] = React.useState(false);
const handleAllClear = () =>{
    setNoData(true);
    setJsonfile({
      "rasa_nlu_data": {
      "common_examples": []
    }
    });
    handleClickAway();
};

const [intentAnchorEl, setIntentAnchorEl] = React.useState(null);
const intentOpen = Boolean(intentAnchorEl);
const handleIntentClick =(event) => {
  setIntentAnchorEl(event.currentTarget);
}
const handleIntentClose = () => {
  setIntentAnchorEl(null);
}


const [scroll, setScroll] = React.useState('paper');

const handleClickOpen = (scrollType) => () => {
  setOpen(true);
  setScroll(scrollType);
};

const handleClose = () => {
  setOpen(false);
};

const [opendialog, setOpenDialog] = React.useState(false);
const [addExample, setAddExample] =React.useState({
    "text": "",
    "intent": "",
    "entities": [
      {
        "start":"",
        "end": "",
        "value": "",
        "entity": "",
      }
    ],
    "buttondisable": true,
    "buttonexText": "\'select some part of the text to create a new entity\'",
    "intentfilter": true,

});
var data= Object.assign({},addExample);
const handleDialogOpen = () => {
  setOpenDialog(true);
}
const handleDialogClose = () =>{
  data.buttondisable=true;
  data.buttonexText="\'select some part of the text to create a new entity\'";
  setAddExample(
  {
    "text": "",
    "intent": "",
    "entities": [
      {
        "start":"",
        "end": "",
        "value": "",
        "entity": "",
      }
    ],
    "buttondisable": true,
    "buttonexText": "\'select some part of the text to create a new entity\'",
    "intentfilter": true,

});
  setOpenDialog(false);
}

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
};
const  download = () => {
  jsonfile.rasa_nlu_data.common_examples.map((del)=>{
    delete del.open;
    delete del.buttonexText;
    delete del.buttondisable;
  })
  setJsonfile(dataupdate);
  jsonfile.rasa_nlu_data.common_examples.map((res)=> delete res.open  )
  var element = document.createElement('a');
  element.setAttribute('href', 'data:json/text;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonfile)));
  element.setAttribute('download', 'testData.json');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
const addNewFiledData = ()=> {
  data.text=addtextvalue;
  setAddExample(data);
  setOpenDialog(false);
  jsonfile.rasa_nlu_data['common_examples'].push(data);
  setJsonfile(jsonfile);
}

const [intentvaluesetter, setIntentValueSetter] = React.useState(null);


const [addtextvalue,setAddTextValue]=React.useState(null);
const [addentityvalue, setAddentityValue] = React.useState(null);
React.useEffect(()=>{
  window.addEventListener('resize', function(){ setWid(window.innerWidth); setHei(window.innerHeight);});
})
var intents= jsonfile.rasa_nlu_data.common_examples.map((i)=> [i.intent]);
var entities=jsonfile.rasa_nlu_data.common_examples.map((i)=> i.entities.map((val)=> [val.entity]));
var set = new Set(intents.map(item=> JSON.stringify(item)));
var dedup=[...set].map(item=> JSON.parse(item));

var set2 = new Set(entities.map(item=> JSON.stringify(item)));
var entity=[...set2].map(item=> JSON.parse(item));

const [checker,setChecker] = React.useState({ check:[]});
let len = dedup.length;
while(len--) checker.check.push(false);

const mainIntentArraySetter =()=>{
  dataupdate.rasa_nlu_data.common_examples.map((value)=>{
    if(intentvaluesetter==value.intent){
    //   if(value.intentfilter){
    //     value.intentfilter=false;
    //   }
    //   else{
    //     value.intentfilter=true;
    //   }
    // }
    // else{
    //   value.intentfilter=false;
    value.intentfilter=false;
    }
    else{
      console.log(1);
      value.intentfilter=true;
    }
  });
}
const ResetIntents = ()=>{
  var i;
  for( i in checker.check){
    checker.check[i]=false;
  }
  setChecker(checker);
  dataupdate.rasa_nlu_data.common_examples.map((value,index)=>{
    value.intentfilter=true;
  })
  handleIntentClose();
}


return (
    
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar} style={{width: wid+10}}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.text}>
            testData.json
          </Typography>
          <Button  variant='contained' className={classes.btn} onClick={handleDialogOpen} style={{width: 'auto', backgroundColor: 'blue',color: 'white'}}>
                Add new example
          </Button>
          <Button  variant='contained' className={classes.btn}  style={{width: 'auto'}} >
          <PublishIcon  fontSize="small" />
          <Files  className="files-dropzone" onChange={file => { try{ fileReader.readAsText(file[0]);} catch(error){alert('cannot parse files other than json')}  }} onError={err => console.log(err)} accepts={[".json"]} multiple maxFiles={3} maxFileSize={10000000} minFileSize={0}>
          Click to Upload
        </Files>
          </Button>
          <Button  variant='contained' onClick={download}  className={classes.btn} style={{width: 'auto'}}>
                <GetAppIcon fontSize="small"/> Download
          </Button>
          <Button  variant='contained' className={classes.btn} onClick={handleClick}  style={{width: 'auto',backgroundColor: '#00C4ED'}}>
                Clear
          </Button>
        </Toolbar>
      </AppBar>


      <AppBar position="fixed" className={classes.appbar2} style={{width: wid+10}} >
         {open ? (
          <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}>
        <div className={classes.dropdown}>
        <AppBar position="absolute" style={{backgroundColor: 'white',color: 'black'}}  >
          <Grid spacing={1} direction="row" container justify="space-between">
            <Grid item xs={12} style={{marginLeft: wid/70}}>
              Do you want to clear all the examples?
            </Grid>
            <Grid item xs={12}>
              <Divider variant="fullWidth" dark />
            </Grid>
            <Grid item xs={12}>
              <Button  variant='contained' className={classes.btn} onClick={handleAllClear} style={{width: 'auto',marginLeft: wid/70}}>
              Yes
              </Button>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          </AppBar>
        </div>
        </ClickAwayListener>

      ) : null}
        <Toolbar variant="dense" className={classes.toolbar}>
        <Typography variant="h6"  className={classes.text} style={{color: 'white',marginLeft: wid/10}}>
            Intent
           
          </Typography>
          <IconButton style={{color: 'white'}} onClick={handleIntentClick}>
              <FilterListIcon/>
            </IconButton>
            <Menu style={{border: 'none',marginTop: 50}} anchorEl={intentAnchorEl} keepMounted open={intentOpen} onClose={handleIntentClose}>
              {dedup.map((val,index)=>{
                return(
                  <Grid spacing={0} container direction="row">
                    <Grid sm={2} item>
                        <Checkbox checked={checker.check[index]} onClick={()=>{
                                if(checker.check[index]){
                                  checker.check[index]=false;
                                  setChecker(checker);
                                }
                                else{
                                  checker.check[index]=true;
                                }
                                setIntentValueSetter(val);
                                mainIntentArraySetter();
                              }
                                } color="primary"/>
                    </Grid>
                    <Grid  xs={8} item>
                <MenuItem style={{fontSize: 12}}>{ val }</MenuItem>
                      </Grid>
                  </Grid>
                );
              })}
              <Divider/> 
              <Button color="primary" variant="text" style={{fontSize: 12}} onClick={()=> {
                setJsonfile(dataupdate);
                handleIntentClose();
              }
                 }> ok </Button>
              <Button  color="primary" variant="text" style={{textTransform: 'none',fontSize: 12,marginLeft: 50}} onClick={ResetIntents}> Reset </Button>

            </Menu>

            
          <Grid  container direction="row">
            <Grid style={{ marginTop: 1}}xs={12} item>
              <IconButton style={{color: 'white',fontSize: 1}}>
              <ArrowDropUpIcon fontSize="small" />
              </IconButton>
              </Grid>
            <Grid item style={{marginTop:-25}}>
              <IconButton style={{color: 'white',fontSize: 1}} >
              <ArrowDropDownIcon fontSize="small" />
              </IconButton>
              </Grid>
            </Grid>
           
           
            <Typography variant="h6"  className={classes.text} style={{color: 'white'}}>
            Text
          </Typography>
          <IconButton style={{color: 'white'}} >
              <FilterListIcon/>
            </IconButton>
          <Grid  container direction="row">
            <Grid style={{ marginTop: 1}}xs={12} item>
              <IconButton style={{color: 'white',fontSize: 1}}>
              <ArrowDropUpIcon fontSize="small" />
              </IconButton>
              </Grid>
            <Grid item style={{marginTop:-25}}>
              <IconButton style={{color: 'white',fontSize: 1}} >
              <ArrowDropDownIcon fontSize="small" />
              </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Dialog
        open={opendialog}
        onClose={handleDialogClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle style={{backgroundColor: '#2F3057',color: 'white'}} id="scroll-dialog-title">Add new example</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
          >
           <TextField style={{width: '100%'}} size="small" id="outlined-basic" label="text" onSelect={
             (event)=>{
               var select = `${window.getSelection().toString()}`;
               
              if(select.length>0){
              data.buttondisable=false; 
              data.buttonexText="add an entity for \""+select+"\"";
              setAddExample(data);
              }
              }
           } onChange={(event)=>{
             data.text=event.target.value;
             setAddTextValue(event.target.value);


           }}  variant="outlined" defaultvalue={addExample.text} />
           <TextField style={{marginTop: 10}} size="small" id="outlined-basic" label="intent" onChange={(event)=>{
             data.intent=event.target.value
           }} variant="outlined" defaultvalue={addExample.intent} />
            
          <Paper style={{width: '100%',height: 'auto',marginTop: 5}}>
          <Grid style={{height: 50, color: 'white'}}  container direction="row">
              <Grid xs={6} item>
                Entity
              </Grid>
              <Grid item xs={4}>
                Value
              </Grid>
              <Grid item xs={2}>
                Selection
              </Grid>
           </Grid>
           <Divider style={{ color: '#D3D3D3'}} />
             { data.entities.map((val,index)=>{
              return (val.value==''? <div> No data </div>:
                <React.Fragment>
                <TextField style={{width: '50%',marginTop: 5}} size="small" id="outlined-basic" label="entity"  variant="outlined" onChange={(event)=> setAddentityValue(event.target.value)} defaultvalue={''}   />
                <TextField style={{width: '30%',marginLeft: 5,marginTop: 5}} size="small" id="outlined-basic" label="value"  variant="outlined" value={val.value} />
                <Button onClick={()=>{
                  delete data.entities[index];
                  setAddExample(data)
                }}> <DeleteForeverIcon/> </Button>
              </React.Fragment>
             ) })
             }
          </Paper>
          <Button variant="contained" color="primary" disabled={data.buttondisable} onClick={
            (event)=>{
              var main = addtextvalue;
              var text =`${window.getSelection().toString()}`;
              var start = main.search(text);
              var end = start+ text.length-1;
              var entity = addentityvalue;
              var obj={"start": start,"end":end,"value":text, "entity": entity}
                data.entities.push(obj)
              data.buttondisable=true;
              setAddExample(data);
            }
          } style={{textTransform: 'none',marginTop: 5}}  >
                {data.buttonexText}
          </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} style={{borderRadius: 30,textTransform: 'none'}} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={addNewFiledData}  style={{borderRadius: 30, textTransform: 'none'}} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
 




      










      
      {nodata ? <div style={{color: '#D3D3D3',marginTop: 150}}> No data </div> :  
      <TableContainer component={Paper}> 
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableBody>
          { 
        jsonfile.rasa_nlu_data.common_examples.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage).map((row,index) => {
            
             return(
              row.intentfilter?
            <React.Fragment>
            <TableRow key={row.text} style={{height: 10}}>
            <TableCell>
              <IconButton  onClick={()=>{
                const data = Object.assign({},jsonfile);
                data.rasa_nlu_data.common_examples[index].open =(!row.open)
                setJsonfile(data);
              }
              }>
            {row.open ? <IndeterminateCheckBoxRoundedIcon fontSize="small" />  :  <AddBoxRoundedIcon fontSize="small" /> }
              </IconButton>
              </TableCell>
              <TableCell >
                <Autocomplete
      id="combo-box-demo"
      defaultValue={row.intent}
      options={ dedup}
      getOptionLabel={(option) => option.toString()}
      style={{ width: 300 }}
      renderInput={(params) => 
        <TextField {...params} label="intent" style={{width: '100%',marginLeft: 10,marginTop: 15}} defaultValue={row.intent}
        onChange={(event)=> dataupdate.rasa_nlu_data.common_examples[index].intent=event.target.value}    classes={{root: classes.TextField}} size="small" variant="outlined" />  
        }/>
             
              </TableCell>
              <TableCell >
                
              <TextField  onSelect={(event)=>{
                const dataset = Object.assign({},jsonfile);
                var select =`${window.getSelection().toString()}`;
                if(select){
                 if(index>0){ dataset.rasa_nlu_data.common_examples[index-1].buttondisable=true; 
                    dataset.rasa_nlu_data.common_examples[index-1].buttonexText='\'select some part of the text to create a new entity\'';
                }
                   dataset.rasa_nlu_data.common_examples[index].buttondisable= false;
                   dataset.rasa_nlu_data.common_examples[index].buttonexText="add an entity for \""+select+"\"";
                    setJsonfile(dataset);
                }
              }}
               
              label="text" style={{width: '100%',marginRight: 500,marginTop: 15}} 
              onChange={(event)=> dataupdate.rasa_nlu_data.common_examples[index].text=event.target.value}  
                classes={{root: classes.TextField}} defaultValue={row.text} change size="small" variant="outlined" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
              <Collapse in={row.open} timeout="auto" unmountOnExit>
              <Typography style={{fontSize: '14px',fontWeight: 'bold',lineHeight: 2.5,marginLeft: 10}}>  
 </Typography>
        
        <div style={{color: 'white',fontWeight: 'bold',width: '95%',marginLeft: 120,border: '1px Solid',borderColor: '#D3D3D3',height: 'auto'}}>
           <Grid style={{height: 50}} spacing={6} container direction="row">
              <Grid xs={6} item>
                Entity
              </Grid>
              <Grid item xs={4}>
                Value
              </Grid>
              <Grid item xs={2}>
                Selection
              </Grid>
           </Grid>
           <Divider style={{marginTop: 25,width: '95%',marginLeft: 10}}/>
          <div style={{color: 'black',fontWeight: 'lighter',border: 'none'}}>
                {!row.entities.toLocaleString() ? <div style={{ color: '#D3D3D3',height: 50,lineHeight: 3,marginLeft: wid/2.5}}> No data</div> : row.entities.map((val,inde)=>(
                
                  <TableRow>
   
              <TableCell align="left" >
              <Autocomplete
      id="combo-box-demo"
      defaultValue={val.entity}
      options={ entity}
      getOptionLabel={(option) => option.toString()}
      style={{ width: 300 }}
      renderInput={(params) => 
        <TextField {...params} label="entity" style={{width: '100%',marginLeft: 10,marginTop: 15}} 
        onChange={(event)=> dataupdate.rasa_nlu_data.common_examples[index].intent=event.target.value}    classes={{root: classes.TextField}} size="small" variant="outlined" />  
        }/>
              </TableCell>
              <TableCell >
              <TextField  label="text" style={{width: '100%',marginRight: 500,marginTop: 15}}  
                classes={{root: classes.TextField}} defaultValue={val.value} change size="small" variant="outlined" />
              </TableCell>
              <TableCell>
              {val.value}
              </TableCell>
              <TableCell>
                <Button onClick={()=> { delete row.entities[inde]; setJsonfile(dataupdate);}}> <DeleteForeverIcon/> </Button>
              </TableCell>
              </TableRow>
                )) }
          </div>
            
        </div>
        <Button variant="contained" color="primary" disabled={row.buttondisable} style={{textTransform: 'none',marginLeft: 120}} onClick={()=>{
                const dataset = Object.assign({},jsonfile);
                dataset.rasa_nlu_data.common_examples[index].buttondisable=true;
                dataset.rasa_nlu_data.common_examples[index].buttonexText="select some part of the text to create a new entity"
                var main=  dataset.rasa_nlu_data.common_examples[index].text;
                var text =`${window.getSelection().toString()}`;
                var start = main.search(text);
                var end = start+ text.length-1;
                var obj={"start": start,"end":end,"value":text, "entity": ""}
                setJsonfile(dataset);
                dataset.rasa_nlu_data.common_examples[index].entities.push(obj);}} >
                    {row.buttonexText}
          </Button>
          <Button variant="contained" color="primary"  style={{textTransform: 'none',marginLeft: wid/1.2}} onClick={()=>{
                const dataset = Object.assign({},jsonfile);
                delete dataset.rasa_nlu_data.common_examples[index];
                setJsonfile(dataset);
                
              }} >
                    Delete example
          </Button>
          <div style={{height: 10}}> </div>
              </Collapse>
              </TableCell>
            </TableRow>
            </React.Fragment> 
                      : null

            ); 
        } 
  )}
        </TableBody>
      </Table>
    </TableContainer>
      }
      { nodata ? null :
    <TablePagination
          rowsPerPageOptions={[10,20,40,80,160,320]}
          component="div"
          count={jsonfile.rasa_nlu_data.common_examples.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      }

     </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       