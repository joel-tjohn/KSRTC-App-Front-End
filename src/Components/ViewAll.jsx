import React from 'react'
import Header from './Hearder'

const ViewAll = () => {
    return (
        <div>



            <font size="38">

                <p> VIEW ALL BUS </p>

            </font>

            <Header/>


            <br /><br /><br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <ul class="list-group">
                                    <li class="list-group-item">SL NO</li>
                                    <li class="list-group-item">1</li>
                                    <li class="list-group-item">2</li>
                                    <li class="list-group-item">3</li>
                                    <li class="list-group-item">4</li>
                                </ul>




                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


                                <ul class="list-group">
                                    <li class="list-group-item">BUS NUMBER</li>
                                    <li class="list-group-item">KL 1 A 1234</li>
                                    <li class="list-group-item">KL 17 Z 1404</li>
                                    <li class="list-group-item">KL 36 J 7227</li>
                                    <li class="list-group-item">KL B 23 3456</li>
                                </ul>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                <ul class="list-group">
                                    <li class="list-group-item">ROUTE</li>
                                    <li class="list-group-item">Trivandrum - Kochi</li>
                                    <li class="list-group-item">Piravom - Ernakulam</li>
                                    <li class="list-group-item">Thrissur - Munnar</li>
                                    <li class="list-group-item">Pathanamthitta - Kollam</li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll