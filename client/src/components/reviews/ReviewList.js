import { ListGroup } from "react-bootstrap";
import ReviewShow from './ReviewShow';

const ReviewList = ({ reviews }) => (
  <>
    <ListGroup variant="flush">
      { reviews.map( r => 
        <ReviewShow
          key={r.id}
          {...r}
        />
      )}
    </ListGroup>
  </>
)

export default ReviewList;