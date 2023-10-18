import Rating from '../rating/rating'
import { useState, useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
import { handleAction } from "../../store/slices/watchList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './card.css'
export default function MovieCard(props) {
  
  const { movieDetails, handleNavigate } = props;
  var isActive = false
  const watchList = useSelector((state) => state.watchList);
  const dispatch = useDispatch();
  watchList.listedMovies?.map((movie, index) => {
    if (movie.id == movieDetails.id){ 
      isActive = true
    }
  })
  return (
    <>
    <div className="card position-relative mt-3" style={{height:'400px'}}>
      <Rating rating={movieDetails.vote_average*10}/>
      <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} 
      className="card-img-top h-75" alt="..." onClick={() => handleNavigate(movieDetails.id)}/>
      <div className="card-body position-relative mt-4">
        <div className="row">
          <p className="card-title col-9 my-auto"
          style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap', fontWeight: 'bold'}}
          >{movieDetails.title}</p>
          
          <div className='col-1 my-auto text-muted'>
            <input className="love" style={{display: 'none'}} type="checkbox" 
            defaultChecked={isActive} id={movieDetails.id}/>
            <label className='my-auto love' htmlFor={movieDetails.id} 
            onClick={() => {dispatch(handleAction(movieDetails))}}>
              <FontAwesomeIcon className='fs-5 my-auto' icon={faHeart} />
            </label> 
          </div>
           
        </div>
        <p>{movieDetails.release_date}</p>
      </div> 
    </div>
    
    </>
    
  );
}
