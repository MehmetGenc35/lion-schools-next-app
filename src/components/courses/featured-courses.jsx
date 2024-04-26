import { Container } from 'react-bootstrap'
import SectionTitle from '../common/section-title'
import Courses from './courses'
import './featured-courses.scss'

const FeaturedCourses = () => {
  return (
    <div>
      <Container>
        <SectionTitle>Featured Courses</SectionTitle>
        <Courses />
      </Container>
    </div>
  );
}

export default FeaturedCourses