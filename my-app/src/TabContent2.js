import React, { Component } from 'react';
import { Form , Row , Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TabContent2 extends Component {
  constructor(){
    super();
    this.state={
      value : "" ,
      List : [] 
    }
    this.submit = this.submit.bind(this)
  }
  submit(e){
    this.setState({ List: [...this.state.List , e.target.value] , value: "" })
  }
  render() {
    return (
      <div>
        <h3 className='h2-content1'>رایگان ثبت نام کنید</h3>
        <Form className='form' onSubmit={this.submit}>
            <Row>
              <Col>
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                  placeholder="نام" 
                />
              </Col>
              <Col>
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight"}} 
                  placeholder="نام خانوادگی"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="تحصیلات" 
                />
              </Col>
              <Col>
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="استان"
                />
              </Col>
              <Col>
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "12%"}} 
                  placeholder="محل تولد"
                />
              </Col>
            </Row>
            <Form.Group controlId="formGroupEmail">
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="email" 
                  placeholder="پست الکترونیک" 
                />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Control 
                  style={{backgroundColor : "rgb(32, 49, 59" ,  color : "wight" , marginTop : "4%"}} 
                  type="password" 
                  placeholder="کلمه عبور" 
                />
            </Form.Group>
            <Button 
              type='submit'
              style={{backgroundColor : "rgb(0, 209, 146)" ,
                color : "wight" , 
                border: "1px solid rgb(0, 209, 146)" ,
                borderRadius: "0",
                width: "100%",
                height: "4vw",
                marginLeft: "1px",
                marginTop: "4%" ,
              }}>
              ثبت نام   
            </Button>
        </Form>
      </div>
    )
  }
}