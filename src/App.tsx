import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
// import FaHeadphones from 'react-icons/lib/fa/headphones';

import './App.css';
import AudioPlayer from './AudioPlayer'; 
const App: React.FC<{}> = ({

}) => {
    const useStyles = makeStyles({
        root: {
            fontSize: '20px',
            color:"#000",
            display: "flex",
            flexDirection: "row",
        },
        players: {
            display: "flex",
            flexDirection: "column"
        }
    });
    const classes = useStyles();
    const pros1 = [
         'Most accredited player',
         'Provides all the functionalities we can think of',
         'When minimized becomes a widget',
         'Library is easy to understand and changeable according to our need',
         'Additional Props can be added to change the functionality. track color and switch color background is an additional prop added on this Library for experiment',
         'Good Mobile Support',
         'Minimal changes need to be require for all clients.',
         'provides Lyrics support'
    ]
    const prosList1 = pros1.map((item, index) => {
        return (
        <li>{index + 1}: {item}</li>  
        )
    })
    const [colorSent, setcolorSent] = useState('#000');

    const handleChange = ({target}: any) => {
        setcolorSent(target.value);
    }
  return (
    <div>
        <div className={classes.root}>
            <div className={classes.players}>
                <ul>
                    <h3>Limitations:</h3>
                    <li>1: Icons can be changed by external css not via this.props</li>
                    <li>2: Colors on the icons hover color etc can be changed using external css</li>
                </ul>
                <ul>
                    <h3>Pros:</h3>
                    {prosList1}
                </ul>
                <p>
                    <label htmlFor="">Change Track colors:</label>
                    <input type="text" value={colorSent} onChange={handleChange}/>
                </p>
            </div>
            <div className={classes.players}>

            </div>


        </div>
        <AudioPlayer colorValue={colorSent}/>
    </div>
  );
};
export default App;


