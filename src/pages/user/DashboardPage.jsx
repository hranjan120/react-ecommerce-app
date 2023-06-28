import { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { fetchUserProfile } from "../../redux/userAuthSlice";
import { useDispatch, useSelector } from "react-redux";


function DashboardPage() {
    const [userProfile, setUserProfile] = useState({});
    const { userAuth } = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        setUserProfile(userAuth.userDashProfile);
    }, [userAuth.userDashProfile]);

    useEffect(() => {
        dispatch(fetchUserProfile())
    }, []);
    return (
        <>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Himanshu Ranjan</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>admin@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>9876543210</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                            <Badge bg="primary">Active</Badge>
                        </td>
                    </tr>
                    <tr>
                        <td>Reg Date</td>
                        <td>23-JAN-2022</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <Button variant="warning" size="sm">Update Password</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <p>{JSON.stringify(userProfile)}</p>
        </>
    );
}

export default DashboardPage;
