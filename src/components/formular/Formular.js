import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Enums from '../../enums/Enums';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campul este obligatoriu'),
    email: Yup.string().email('Adresa de mail este invalida'),
    phone: Yup.number().required('Numarul de telefon este obligatoriu'),
    course: Yup.string().required('Selecteaza un curs'),
    location: Yup.string().required('Selecteaza o locatie')
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
    course: '',
    location: ''
}

const Formular = () => {
    const { ORASE, LISTA_CURSURI } = Enums;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, values }) => (
                <Form className="grid">
                    <h3 className="uppercase text-blue-400 text-center mb-12 md:mb-24">Inscrie-te la un curs</h3>

                    <div className="grid xl:flex md:justify-center xl:justify-around gap-10 xl:gap-0 mb-16">
                        <div>

                            <Field className="select" as="select" name="course">
                                <option value="" disabled hidden>Alege cursul</option>
                                {LISTA_CURSURI.length > 0 && LISTA_CURSURI.map((item, index) => {
                                    return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                            </Field>
                            <ErrorMessage className="text-red caption ml-5" name="course" component="div" />
                        </div>

                        <div>

                            <Field className="select" as="select" name="location">
                                <option value="" disabled hidden>Alege locatia</option>
                                {ORASE.length > 0 && ORASE.map((item, index) => {
                                    return <option key={item.cityId} value={item.cityId}>{item.name}</option>
                                })}
                            </Field>
                            <ErrorMessage className="text-red caption ml-5" name="location" component="div" />
                        </div>
                    </div>

                    {values.course &&
                        <div className="bg-white p-8 md:p-16 mb-12 md:mb-24">
                            <p className="mb-5">Tipul : Specializare</p>
                            <p className="mb-10">Durata cursului: 6 saptamani</p>
                            <p className="text-blue-400">Pretul cursului este de 950 lei si se poate plati in 3 rate</p>
                        </div>
                    }

                    <div className="grid md:justify-center mb-12 md:mb-24 gap-6 md:gap-12">

                        <div>
                            <Field className="input" placeholder="Nume si prenume" name="name" />
                            <ErrorMessage className="text-red caption ml-5" name="name" component="div" />
                        </div>

                        <div>
                            <Field className="input" placeholder="Adresa de email" type="email" name="email" />
                            <ErrorMessage className="text-red caption ml-5" name="email" component="div" />
                        </div>

                        <div>
                            <Field className="input" placeholder="Numar de telefon" name="phone" />
                            <ErrorMessage className="text-red caption ml-5" name="phone" component="div" />
                        </div>
                    </div>

                    <button className="btn btn-primary btn-big md:justify-self-center" type="submit" disabled={isSubmitting}>Inscrie-te</button>
                </Form>
            )}
        </Formik>
    )
}

export default Formular