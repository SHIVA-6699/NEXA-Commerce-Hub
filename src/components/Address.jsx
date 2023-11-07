import React from "react"
import { Form ,Button} from "react-bootstrap"

const Address=()=>{
    return(
        <>
          <div>
              <h6>Add New Address</h6>
              <Form className="mb-5">
                <Form.Label className="m-3">House No:</Form.Label>
                <Form.Control className="mx-3"></Form.Control>
                <Form.Label className="m-3">
                  Enter StreeName / Village Name
                </Form.Label>
                <Form.Control className="mx-3"></Form.Control>
                <Form.Label className="m-3">State / City</Form.Label>
                <Form.Control className="mx-3"></Form.Control>
                <Form.Label className="m-3">Pincode</Form.Label>
                <Form.Control className="mx-3"></Form.Control>
                <Button className="m-3" onClick={(e)=>{
                    
                }}> Add Address</Button>
              </Form>
            </div>
        </>
    )
}
export default Address