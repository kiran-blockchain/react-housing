import { ErrorMessage, Field, Formik,Form } from "formik";
import * as Yup from 'yup';
 const Register = (props) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: ''
            }}
            validationSchema={Yup.object().shape({
                firstName:Yup.string().required('First Name is required'),
                lastName:Yup.string().required('Last Name is required')
            })}
            onSubmit ={fields=>{
                alert("Success all the data got validated");
            }}>
           {({errors,status,touched})=>{
                return<Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" 
                        type="text" className={'form-control'+(errors.firstName?' is-invalid': '')}/>
                        <ErrorMessage name='firstName' component="div" className='invalid-feedback' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" className={'form-control'+(errors.lastName?' is-invalid': '')}/>
                        <ErrorMessage name='lastName' component="div" className='invalid-feedback' />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary"> Register</button>
                    </div>
                    
                </Form>
            }}
        

        </Formik>
    )
}
export default Register;