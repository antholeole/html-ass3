import React from "react"
import { Button, Form, FormGroup, InputGroup } from "react-bootstrap"
import { CreditCard, CurrencyDollar } from "react-bootstrap-icons"
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { PaymentFormInputs, paymentFormSchema } from "../../data/orderForm";
import { useNavigate } from "react-router";

export const Payment = () => {
    const navigate = useNavigate();

    return <Formik<PaymentFormInputs>
        onSubmit={(formData) => navigate('/confirmPurchase', {
            state: formData
        })}
        initialValues={{
            name: "",
            email: "",
            card: "",
            address: "",
            addressLine2: "",
            city: "",
            state: "",
            zip: ""
        }}
        validationSchema={toFormikValidationSchema(paymentFormSchema)}
    >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => <Form className="m-4 p-4" noValidate onSubmit={handleSubmit}>
                <h1>Payment Information</h1>
                <div className="d-flex justify-content-around">
                    <div
                        style={{
                            flex: 1
                        }}
                    >
                        <FormGroup>
                            <Form.Label className="mt-2">Full Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                placeholder="full name..."
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.name && !errors.name}
                            />

                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.name}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            marginLeft: "22px"
                        }}
                    >
                        <FormGroup>
                            <Form.Label className="mt-2">Email</Form.Label>
                            <Form.Control
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                type="Email"
                                placeholder="email..."
                            />
                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.email}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </div>
                </div>
                <FormGroup>
                    <Form.Label className="mt-2">Card</Form.Label>
                    <InputGroup>
                        <InputGroup.Text className="input-group-prepend">
                            <CreditCard />
                        </InputGroup.Text>
                        <Form.Control
                            name="card"
                            value={values.card}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isValid={touched.card && !errors.card}
                            type="text"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                    </InputGroup>

                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.card}
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <Form.Label className="mt-2">Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="address line 1..."
                        name="address"
                        onBlur={handleBlur}
                        value={values.address}
                        onChange={handleChange}
                        isValid={touched.address && !errors.address}
                    />

                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.address}
                    </Form.Control.Feedback>
                </FormGroup>
                <FormGroup>
                    <Form.Label className="mt-2">Address Line 2</Form.Label>
                    <Form.Control
                        name="addressLine2"
                        value={values.addressLine2}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isValid={touched.addressLine2 && !errors.addressLine2}
                        type="text" placeholder="address line 2..." />

                    <Form.Control.Feedback type="invalid" className="d-block">
                        {errors.addressLine2}
                    </Form.Control.Feedback>
                </FormGroup>
                <div className="d-flex justify-content-around">
                    <div
                        style={{
                            flex: 2
                        }}
                    >
                        <FormGroup>
                            <Form.Label className="mt-2">City</Form.Label>
                            <Form.Control
                                name="city"
                                value={values.city}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isValid={touched.city && !errors.city}
                                type="text"
                                placeholder="city..."
                            />

                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.city}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </div>
                    <div
                        style={{
                            flex: 2,
                            marginLeft: "22px"
                        }}
                    >
                        <FormGroup>
                            <Form.Label className="mt-2">State</Form.Label>
                            <Form.Control
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.state && !errors.state}
                                type="text" placeholder="state..." />

                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.state}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            marginLeft: "22px"
                        }}
                    >
                        <FormGroup>
                            <Form.Label className="mt-2">zip</Form.Label>
                            <Form.Control
                                name="zip"
                                value={values.zip}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text" placeholder="zip..." />

                            <Form.Control.Feedback type="invalid" className="d-block">
                                {errors.zip}
                            </Form.Control.Feedback>
                        </FormGroup>
                    </div>
                </div>
                <Button type="submit" className="mt-2">
                    <CurrencyDollar /> Order
                </Button>
            </Form>}
    </Formik>
}