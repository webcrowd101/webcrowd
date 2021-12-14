import React, { useState,useEffect } from 'react'
import $ from 'jquery'
import './Reactjs.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import {
      useHistory, 
} from "react-router-dom";

function Reactjs() {
    const [show, hide] = useState(false);
    const history = useHistory();


    //show and hide
    const ShowHide = () => {
        if (!show) {
            document.querySelector('.reactjsSidebar').style.width = '200px';
            document.querySelector('.reactjsSidebar ul').style.display = 'block';
            document.querySelector('.reactjsSidebar').style.position = 'absolute';
            $('.reactjsSidebar').css('z-index', '1');
            document.querySelector('.reactjsContent').style.opacity = '0.5';
            hide(true);
        }
        else if (show) {
            document.querySelector('.reactjsSidebar').style.width = '60px';
            document.querySelector('.reactjsSidebar ul').style.display = 'none';
            document.querySelector('.reactjsSidebar').style.position = 'absolute';
            document.querySelector('.reactjsContent').style.opacity = '1';
            hide(false);
           
        }
        else{}
    }
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 871) {
            if (history.push(localStorage.getItem('current')) === 'REACT%20JS') {
                document.querySelector('.reactjsSidebar').style.width = '200px';
                document.querySelector('.reactjsSidebar ul').style.display = 'block';
            
            }
          
            if (show) {
                        try {
                            document.querySelector('.reactjsSidebar').style.width = '200px';
                        document.querySelector('.reactjsSidebar ul').style.display = 'block'; 
                        } catch (error) {      
                        }      
            }
        }
        else if (window.innerWidth <= 871) {
            if (history.push(localStorage.getItem('current')) === 'REACT%20JS') {
                document.querySelector('.reactjsSidebar').style.width = '60px';
                document.querySelector('.reactjsSidebar ul').style.display = 'none';
            }
            if (show && window.innerWidth <= 871) {
                try {
                    document.querySelector('.reactjsContent').style.opacity = '1';
                    document.querySelector('.reactjsSidebar').style.width = '60px';
                    document.querySelector('.reactjsSidebar ul').style.display = 'none';
                    hide(false)
                } catch (error) {
                    
                }
               
            }
   
        }
        else { }

    });

    return (
        <div className="reactjs">
            <div className="reactjsSidebar">
                <DehazeIcon onClick={ShowHide} className='showSideBar'/>
                <ul>
                   <li>Introduction</li>
                    <li>Variables Declaration</li>
                    <li>Comment</li>
                   <li>Global Scope</li>
                   <li>Block Scope</li>
                   <li>Function Scope</li>
                   <li>Hoisting</li>
                   <li>Data Types</li>
                   <li>Types Conversion</li>
                   <li>if Statement</li>
                    <li>Switch</li>
                    <li>Error Handling</li>
                    <li>Expressions & Operators</li>
                    <li>Function</li>
                    <li>Object</li>
                   <li>Array</li>
                   <li>Array Functions</li>
                   <li>String Methods</li>
                   <li>Loops</li>
                    <li>Dates</li>
                    <li>Selectors</li>
                    <li>Events</li>
                    <li>Add Style to Tag</li>
                    <li>Add Item</li>
                    <li>Remove Item</li>
                    <li>Replace Item</li>
                    <li>Tag Properties Handling</li>
                    <li>BOM</li>
                    <li>Json</li>
                    <li>Api</li>
                    <li>Es6</li>
                   <li>Exercises</li>
                   <li>Quiz</li>
                </ul>

            </div>
            <div className="reactjsContent">

            </div>
        </div>
    )
}

export default Reactjs
