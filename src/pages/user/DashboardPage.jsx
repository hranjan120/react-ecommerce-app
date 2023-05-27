import { Table, Badge, Button } from 'react-bootstrap';

function DashboardPage() {
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
        </>
    );
}

export default DashboardPage;
