import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../components/TopBar'
import MyContext from '../context/context'
import AppLoader from '../components/AppLoader'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'
import rocketImg from '../assets/images/Launching-rafiki.png'


const Root = () => {
  const {isAppLoading,setIsAppLoading,setNavBarIsOpen,show, setShow,toggleModal} = useContext(MyContext);
  const location = useLocation();

  useEffect(()=>{

       // Your code to run when the route changes
       console.log('Route changed:', location.pathname);
       setTimeout(() => {
       setIsAppLoading(false)  
       }, 2500);

          //scroll to given div when url has hash #div
      setTimeout(() => {
        if (location.hash) {
     const elementId = location.hash.substring(1); // Remove the '#' from the hash
     const element = document.getElementById(elementId);

     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   }
     }, 1000);

       //close navbar on change route
       setNavBarIsOpen(false);

  },[location])
  
  return (
    <>
       {isAppLoading ?
   <div className='d-flex justify-content-center align-items-center vh-100'>
    <AppLoader /> 
    </div>
    :
    <>
<TopBar />
<Outlet />


      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton style={{border:'none'}}>
        
        </Modal.Header>
        <Modal.Body className='body-modal'>
          <img  src={rocketImg} className='rocket-img'/>

          <h2 className='title'>Coming soon</h2>

          <p className='text-content mt-3' style={{fontWeight:'600',fontSize:20}}>App still under development</p>

        </Modal.Body>
        <Modal.Footer style={{border:'none'}}>
          {/* <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button> */}
       
        </Modal.Footer>
        </Modal>

    </>
    
       }
    </>
  )
}

export default Root