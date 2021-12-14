import React, { useState,useEffect } from 'react'
import $ from 'jquery'
import './Jquery.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import {
      useHistory, 
} from "react-router-dom";

function Jquery() {
    const [show, hide] = useState(false);
    const history = useHistory();

    //show and hide
    const ShowHide = () => {
        if (!show) {
            document.querySelector('.jquerySidebar').style.width = '200px';
            document.querySelector('.jquerySidebar ul').style.display = 'block';
            document.querySelector('.jquerySidebar').style.position = 'absolute';
            $('.jquerySidebar').css('z-index', '1');
            document.querySelector('.jqueryContent').style.opacity = '0.5';
            hide(true);
        }
        else if (show) {
            document.querySelector('.jquerySidebar').style.width = '60px';
            document.querySelector('.jquerySidebar ul').style.display = 'none';
            document.querySelector('.jquerySidebar').style.position = 'absolute';
            document.querySelector('.jqueryContent').style.opacity = '1';
            hide(false);
           
        }
        else{}
    }
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 871) {
            if (history.push(localStorage.getItem('current')) === 'JQUERY') {
                document.querySelector('.jquerySidebar').style.width = '200px';
                document.querySelector('.jquerySidebar ul').style.display = 'block';
            
            }
          
            if (show) {
                        try {
                            document.querySelector('.jquerySidebar').style.width = '200px';
                        document.querySelector('.jquerySidebar ul').style.display = 'block'; 
                        } catch (error) {      
                        }      
            }
        }
        else if (window.innerWidth <= 871) {
            if (history.push(localStorage.getItem('current')) === 'JQUERY') {
                document.querySelector('.jquerySidebar').style.width = '60px';
                document.querySelector('.jquerySidebar ul').style.display = 'none';
            }
            if (show && window.innerWidth <= 871) {
                try {
                    document.querySelector('.jqueryContent').style.opacity = '1';
                    document.querySelector('.jquerySidebar').style.width = '60px';
                    document.querySelector('.jquerySidebar ul').style.display = 'none';
                    hide(false)
                } catch (error) {
                    
                }
               
            }
   
        }
        else { }

    });

    return (
        <div className="jquery">
            <div className="jquerySidebar">
                <DehazeIcon onClick={ShowHide} className='showSideBar'/>
                <ul>
                   <li>Introduction</li>
                   <li>Get started</li>
                   <li>Selectors</li>
                   <li>Dom Manipulation</li>
                   <li>Css Methods</li>
                   <li>Attributes</li>
                   <li>Events</li>
                   <li>Effects</li>
                    <li>Dimensions</li>
                    <li>Exercises</li>
                    <li>Quiz</li>
                  
                </ul>

            </div>
            <div className="jqueryContent">

            </div>
        </div>
    )
}

export default Jquery
