import { useHistory, useLocation } from 'react-router-dom';

const ViewMeme = () => {
  let history = useHistory();
  let location = useLocation();
  let url = new URLSearchParams(location.search).get('url');
  console.log(url);
  return (
    <div id='view-meme'>
      <div className='row mb-3'>
        <div className='col'>
          <h4>
            <button
              className='btn btn-primary'
              onClick={() => history.push('/')}>
              Make More Memes!
            </button>
          </h4>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <img src={url} alt='Meme' className='view-meme-img' />
        </div>
      </div>
    </div>
  );
};
export default ViewMeme;