import React from 'react'



const DeleteBus = () => {
    return (
        <div>


            <font size="38">

                <p> DELETE BUS</p>

            </font>

            <div className="container">


                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Bus ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBus