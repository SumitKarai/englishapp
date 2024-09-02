import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShortStories from './ShortStories';
import Fallen from './Fallen';
import StoryOne from './Stories/StoryOne';
import StoryTwo from './Stories/StoryTwo';
import StoryThree from './Stories/StoryThree';
import Vocabulary from './Vocabulary';


function Navigation() {
  return (
    <>
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Angreji Sikhe</Navbar.Brand>
          <Nav className="me-auto" >
            <Link to="/shortstories" className="nav-style">Short Stories</Link>
            <Link to="/storiesquiz" className="nav-style">Stories Quiz</Link>
            <Link to="/vocabquiz" className="nav-style">Vocab Quiz</Link>
            <Link to="/fallenquiz" className="nav-style">Fallen Quiz</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path="/shortstories" element={<ShortStories/>}/>
      <Route path="/vocabquiz" element={<Vocabulary/>}/>
      <Route path="/fallenquiz" element={<Fallen/>}/>
      <Route path="/storyone" element={<StoryOne/>}/>
      <Route path="/storytwo" element={<StoryTwo/>}/>
      <Route path="/storythree" element={<StoryThree/>}/>
      
    </Routes>

      </Router>
      <br />
      
    </>
  );
}

export default Navigation;