import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { swalConfirm } from "../../helpers/swal";
import { logout } from "../../store/slices/auth-slice";
import { removeLocalStorage } from "../../helpers/encrypted-storage";

const UserMenuAuth = () => {
  const [show, setShow] = useState(false);
  const { user, userMenu } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => { 
        const resp = await swalConfirm("Are you sure to logout?");
        if(!resp.isConfirmed) return;

        dispatch(logout());
        removeLocalStorage("token");
        navigate("/");


   }

  return (
    <>
      <Button variant="secondary" onClick={() => setShow(true)}>
        <FaUser /> {user.name}
      </Button>

      <Offcanvas className="bg-secondary" show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="text-light">MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>

            {userMenu.map((item) => (
              <Nav.Link as={Link} to={item.link} key={item.title}>
                {item.title}
              </Nav.Link>
            ))}

            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default UserMenuAuth;
