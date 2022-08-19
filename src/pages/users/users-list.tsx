import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner, Table, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { useUsersListContext } from '../../context/users-list.context';
import { ContextMenuButton } from '../../components/context-menu-button';
import { UserAddModal } from './user-add-modal';


export const UserList = () => {
    const { users, loading } = useUsersListContext();
    const [showAdd, setShowAdd ] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return (
       <div>
           <Button className="mb1" onClick={handleShowAdd}>
               <FontAwesomeIcon icon={faPlus} className="mr0-5"/>
               Add user
           </Button>
           <Table striped bordered hover>
               <tbody>
               { users.map(user => (
                   <tr key={ user.id }>
                       <td>
                           <Dropdown as={ButtonGroup}>
                               <Dropdown.Toggle
                                   as={ContextMenuButton}
                                   variant="light"
                                   size='sm'
                                   id="dropdown-split-basic"
                               />
                               <Dropdown.Menu>
                                   <Dropdown.Item as={Link} to={`/users/${ user.id }`}>View</Dropdown.Item>
                                   <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
                               </Dropdown.Menu>
                           </Dropdown>
                       </td>
                       <td> { user.id } </td>
                       <td> <Link to={ `/users/${ user.id }` }>{ user.name }</Link> </td>
                       <td> { user.phone } </td>
                       <td> { user.email } </td>
                   </tr>
               )) }
               </tbody>
           </Table>
           {showAdd && (
               <UserAddModal
                   open
                   onClose={handleCloseAdd}
               />
           )}
       </div>
    );
}
