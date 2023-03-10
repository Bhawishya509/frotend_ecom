import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import swal from "sweetalert";
import { Modal } from "react-bootstrap";
import Home from "../home/Home";
import {  useDispatch,useSelector } from 'react-redux'
import {  check, uncheck} from "../../app/counterSlice"
import {db} from "../../Database"
import {getDocs,collection} from  'firebase/firestore'
const Login = ( ) => {
  const dcol='value';
    const refss=collection(db,dcol);
  const dispatch = useDispatch()
  const checking = useSelector((state) => state.counter.value1)
  const navi=useNavigate();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);
  const [check_vaild,set_vaild]=useState([])
  const [value, changevalue] = useState({
  
    email: "",
   
    password: "",
  });


  const change = (event) => {
    const { name, value } = event.target;
    changevalue((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === true &&checking===false) {
     
      
      swal({
        title: "Are you sure?",
        
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          

          if (form.checkValidity() === true ) {
            // console.log(check_vaild)
            event.preventDefault();
            
            event.stopPropagation();
           let minorcheck=false;
            check_vaild.forEach((items)=>
            {
             
              if(items.email===value.email && items.password===value.password)
              {

                console.log(items)
                    swal("Login successfull", {
                    icon: "success",
                })
                dispatch(check())
                minorcheck=true;

                setTimeout(()=>
                {
                  navi("/")
                },2000)
              }
            })

            if(minorcheck===false)
            {
              swal("Data Do'nt Match", {
                  icon: "error",
                });
                dispatch(uncheck())
            }
          }
        } 
      });
    } 
    
    else {

      
      event.preventDefault();
      setValidated(true);
    }
    event.preventDefault();
  };

  const handleClose = () => {
    
    setValidated(false);
    navi("/")
    setShow(false);
  };
  useEffect(() => {


    const betu=async ()=>
        {
            let kk=await getDocs(refss);
           let c=kk.docs.map((doc)=>({...doc.data()}));
           set_vaild([...c])
        }
        betu()

  }, [show])
  
  return (
    <>
    <Home/>
      <Modal show={show} onHide={handleClose} style={{marginTop:"5%"}}>
        <Modal.Header closeButton>
          <Modal.Title>login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            method="post"
          >
            <Row className="mb-4" style={{width:"100%"}}>
              
              
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Email-id"
                    aria-describedby="inputGroupPrepend"
                    required
                    name="email"
                    value={value.email}
                    onChange={change}
                  />
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Fill email..!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom07">
                <Form.Label>password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  pattern="((?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$)"
                  name="password"
                  value={value.password}
                  placeholder="123logD@"
                  onChange={change}
                />
                <Form.Control.Feedback type="valid">
                  Perfect..!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please select Captial & Smaller & Number & Special char..!
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            
            <Button type="submit" variant="success">
              Login
            </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );





};

export default Login;