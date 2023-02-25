import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import swal from "sweetalert";
import { Modal } from "react-bootstrap";
import rgcs from "./register.module.css"
import {db} from "../../Database";
import { addDoc, collection } from "firebase/firestore";

const Form2 = () => {

  const navi=useNavigate();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);
  const [value, changevalue] = useState({
    first: "",
    last: "",
    email: "",
    zip: "",
    state: "",
    city: "",
    password: "",
  });

  
  const createcollection =collection(db,"value");

  const change = (event) => {
    const { name, value } = event.target;
    changevalue((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      swal({
        title: "Are you sure?",
        text: "Once You Sumbit You Will Not Change Your Email-id!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
       

          // this will save in data base
          
          const createuser=async ()=>
          {
            try{
            await addDoc(createcollection,{firstname:value.first,surname:value.last,
            email:value.email,password:value.password,zip:value.zip,state:value.state,city:value.city}).then((res)=>
            {
              swal("Registion Successfully", {
                    icon: "success",
                    
                  });
                setTimeout(()=>
                {
                  navi("/");
                },2000)
              
            })}
            catch
            {
              swal("Registion Failed", {
                      icon: "error"
                    });
            }
            

          }
         
          

          if (form.checkValidity() === true) {
            event.preventDefault();
            event.stopPropagation();

            createuser()
          
               // axios
              // .post("http://localhost:8000/reg", {
              //   firstname: value.first,
              //   surname: value.last,
              //   email: value.email,
              //   password: value.password,
              //   zip: value.zip,
              //   month: value.state,
              //   city: value.city,
              // })
              // .then(function (response) {
      
              //   console.log(response.data)
              //   if(response.data)
                
              //   swal("Registion Successfully", {
              //     icon: "success",
                  
              //   });
              //   else
              //   {
              //     swal("Registion Failed", {
              //       icon: "error",
              //     });
              //   }
                
              // })
              // .catch(function (error) {
              //   swal("Failed Not Connted In Data Base !", { icon: "error" });
              //   console.log(error);
              // });



          }


          

        } else {
          swal("Failed!", { icon: "error" });
         
          event.preventDefault();
        }
      });
    } else {
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
  useEffect(() => {}, []);
 
  return (
    <>
      <Modal show={show} onHide={handleClose} className={rgcs.mains} >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            method="post"
          >
            <Row className="mb-4" style={{width:"100%"}}>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="first"
                  value={value.first}
                  onChange={change}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Fill First name..!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="last"
                  value={value.last}
                  onChange={change}
                />

                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please Fill last name..!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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
              <Form.Group as={Col} md="6" controlId="validationCustom07">
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
            <Row className="mb-3" style={{width:"100%"}}>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  required
                  name="city"
                  value={value.city}
                  onChange={change}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  required
                  name="state"
                  value={value.state}
                  onChange={change}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  required
                  name="zip"
                  value={value.zip}
                  onChange={change}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Submit form
            </Button>
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default Form2;
