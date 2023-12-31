import { IMovie } from '../models/IMovie';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledLi } from './styled/StyledLi';
import { StyledImage } from './styled/StyledImage';
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { StyledButtonWrapper } from './styled/Wrappers';
import { StyledMovieCardBottomSection } from './styled/StyledMovieCardBottomSection';
import { ActionType } from '../models/ActionType';

const fallbackImg = './src/assets/fallbackImg.png';

interface IMovieProps {
  movie: IMovie;
}
export const MovieList = ({ movie }: IMovieProps) => {
  const { dispatch } = useContext(OrderContext);

  return (
    <StyledLi>
      <div>
        <StyledImage
          src={movie.imageUrl}
          width={250}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        ></StyledImage>
      </div>
      <StyledMovieCardBottomSection>
        <h3>{movie.name}</h3>
        <StyledButtonSecondary as="a" href={'./movie/' + movie.id}>
          Read more
        </StyledButtonSecondary>
        <StyledButtonWrapper>
          <StyledButtonPrimary
            onClick={() =>
              dispatch({
                type: ActionType.ADDED_ORDER_ROW,
                payload: JSON.stringify(movie),
              })
            }
          >
            Purchase
          </StyledButtonPrimary>
        </StyledButtonWrapper>
      </StyledMovieCardBottomSection>
    </StyledLi>
  );
};
