import React from 'react';
//import ModalFooter from 'react-bootstrap/ModalFooter';
import Row from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Card';
import styled from 'styled-components';
import './Footer.css';


export const myFooter = () => {
  return (
    <Container fixed="bottom" bg="dark" variant="dark" expand="lg" fluid>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  )

}
export default myFooter;

//import styled from 'styled-components';

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }
//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;
//     &:hover {
//       color: white;
//     }
//   }
// `;

// export const myFooter = () => {
//   return (

//     <ModalFooter color="blue" className="font-small pt-4 mt-4">
//       <Container fluid className="text-center text-md-left">
//         <Row>
//           <Col md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </Col>
//           <Col md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>

//       <div className="footer-copyright text-center py-3">
//         <Container fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ootstrap.com"> ootstrap.com </a>
//         </Container>
//       </div>
//     </ModalFooter >
//   );
// }