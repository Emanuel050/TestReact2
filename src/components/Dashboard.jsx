import React from "react";

const Dashboard = ({ dashData }) => {

    if (!dashData) {
        return <div>loading...</div>
    }

    const availableRooms = dashData.availableRooms;
    const reservedRooms = dashData.reservedRooms;
    const checkedIn = dashData.checkedIn;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="caption">
                        <layer>
                            {availableRooms}
                        </layer>
                        <p>rooms available</p>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="caption">
                        <layer>
                            {reservedRooms}
                        </layer>
                        <p >Reserved-rooms</p>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className="caption">
                        <layer>
                            {checkedIn}
                        </layer>
                        <p>Checked In</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;