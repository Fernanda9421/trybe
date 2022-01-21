import React from 'react'; 
import Spinner from 'react-spinkit';
import LoadingContext from '../context/LoadingContext';

class Loading extends React.Component {
  render() {
    const { loading, message } = this.context;
    return loading ? ( 
      <div className='overlay-content'> 
          <div className='wrapper'> 
              <Spinner 
                  name='pacman' 
                  fadeIn='none' 
                  color='yellow' 
              /> 
              <span className='message'> 
                  {message} 
              </span> 
          </div> 
      </div> 
  ) : null
  } 
}

Loading.contextType = LoadingContext;

export default Loading;
