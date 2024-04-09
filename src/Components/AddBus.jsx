import React from 'react'
import Header from './Hearder'



const AddBus = () => {
    return (
        <div>




            <font size="38">

                <p>ADD BUS </p>

            </font>
<Header/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cool-xxl-6">
                                <label htmlFor="" className="form-label">Bus ID</label>
                                <input type="text" className="form-control" />
                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cool-xxl-6">

                                <label htmlFor="" className="form-label">Number</label>
                                <input className="form-control"></input>
                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 cool-xxl-12">

                                <label htmlFor="" className="form-label">Route</label>
                                <input className="form-control"></input>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cool-xxl-6">

                                <label htmlFor="" className="form-label">Driver Name</label>
                                <input className="form-control"></input>
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cool-xxl-6">

                                <label htmlFor="" className="form-label">Driver Number</label>
                                <input className="form-control"></input>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 cool-xxl-6">

                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBus