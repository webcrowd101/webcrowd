import React, { useState,useEffect } from 'react'
import $ from 'jquery'
import './Css.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import {
    BrowserRouter as Router,
    Switch,
    Route,
      Link,
      useHistory,
      useLocation
} from "react-router-dom";
  

function Css() {
    const [show, hide] = useState(false);
    const history = useHistory();

    //show and hide
    const ShowHide = () => {
        if (!show) {
            document.querySelector('.cssSidebar').style.width = '200px';
            document.querySelector('.cssSidebar ul').style.display = 'block';
      
            document.querySelector('.cssSidebar').style.position = 'absolute';
            $('.cssSidebar').css('z-index','1')
            document.querySelector('.cssContent').style.opacity = '0.5';
            hide(true);
            
        }
        else if (show) {
            document.querySelector('.cssSidebar').style.width = '60px';
            document.querySelector('.cssSidebar ul').style.display = 'none';
            document.querySelector('.cssSidebar').style.position = 'absolute';
            document.querySelector('.cssContent').style.opacity = '1';
            hide(false);
            
        }
        else{}
        
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth > 871) {
            if (history.push(localStorage.getItem('current')) === 'CSS3') {
                
                document.querySelector('.cssSidebar').style.width = '200px';
                document.querySelector('.cssSidebar ul').style.display = 'block';
                
                
            }
            if (show) {
                try {
                    document.querySelector('.cssContent').style.opacity = '1';
                    document.querySelector('.cssSidebar').style.width = '200px';
                    document.querySelector('.cssSidebar ul').style.display = 'block';
                    
                } catch (error) {
                    
                }
               
            }
        }
        else if (window.innerWidth <= 871) {
           
            if (history.push(localStorage.getItem('current')) === 'CSS3') {
                try {
                    document.querySelector('.cssSidebar').style.width = '60px';
                document.querySelector('.cssSidebar ul').style.display = 'none';
                } catch (error) {
                    
                }
                
            }
            if (show && window.innerWidth <= 871) {
                try {
                    document.querySelector('.cssContent').style.opacity = '1';
                    document.querySelector('.cssSidebar').style.width = '60px';
                    document.querySelector('.cssSidebar ul').style.display = 'none';
                    hide(false)
                } catch (error) {
                    
                }
               
            }
            
        }
        else { }
      
      
    });
  
    
    
   
   
    
    return (
        <div className="css">
            <div className="cssSidebar">
                <DehazeIcon onClick={ShowHide} className='showSideBar'/>
                <ul>
                   <li>Introduction</li>
                   <li>Colors</li>
                   <li>Background</li>
                   <li>Width</li>
                   <li>Height</li>
                   <li>Margin</li>
                   <li>Padding</li>
                    <li>Border</li>
                    <li>Comment</li>
                   <li>Text Position</li>
                   <li>Position</li>
                   <li>Opacity</li>
                   <li>Font</li>
                   <li>Grid</li>
                   <li>Flexbox</li>
                   <li>Animation</li>
                   <li>Media Query</li>
                   <li>Exercises</li>
                   <li>Quiz</li>
                </ul>

            </div>
            <div className="cssContent">

            </div>
        </div>
    )
}

export default Css
