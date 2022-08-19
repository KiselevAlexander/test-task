import { useUserDetailContext } from '../../context/user-detail.context';
import { Alert, Spinner, Table } from 'react-bootstrap';

export const UserDetail = () => {
    const { loading, user } = useUserDetailContext();

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (!user) {
        return (
            <Alert variant='danger'>
                Error loading user detail. Please try again later.
            </Alert>
        );
    }

    return (
        <Table striped bordered>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>{ user.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{ user.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{ user.email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{ user.phone}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{ user.website }</td>
                </tr>
                <tr>
                    <th>Company name</th>
                    <td>{ user.company.name }</td>
                </tr>
            </tbody>
        </Table>
    )
}
