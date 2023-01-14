import { ListGroup } from "react-bootstrap";
import MovieShow from './MovieShow';

const MovieList = ({ movies }) => (
  <>
    <ListGroup variant="flush">
      { movies.map( n => 
        <MovieShow
          key={n.id}
          {...n}
        />
      )}
    </ListGroup>
  </>
)

export default MovieList;