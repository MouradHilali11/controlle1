import React from 'react';
import { useForm } from '@inertiajs/react'

const Inserer = () => {
    const {data, setData, errors, processing, post} = useForm({
        title: "",
        description: ""
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('store'), {
            onSuccess: () => {
                //
            }
        })
    }


    return (
        <div className="auth">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-body border-0 shadow-sm rounded-3">
                            <h1 className="h3">Créez un post</h1>
                            <form className="mt-3" onSubmit={submit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="title">Title <span className="text-danger">*</span></label>
                                    <input type="text" name='title' value={data.title} onChange={e => setData('title', e.target.value)} id="title" className="form-control" placeholder='Title Post' />
                                    {errors.name && <div className='text-danger'>{errors.name}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="title">Description <span className="text-danger">*</span></label>
                                    <textarea value={data.description} name="description"  onChange={e => setData('description', e.target.value)} id="description" cols="30" rows="10"></textarea>
                                    {errors.description && <div className='text-danger'>{errors.description}</div>}
                                </div>

                                <div className="form-group mb-4 text-center">
                                    <button className="btn btn-primary rounded-pill btn-lg" disabled={processing}>Valider</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Inserer;
