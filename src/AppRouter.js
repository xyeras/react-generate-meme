import { Switch, Route } from 'react-router-dom';
import Meme from './components/Meme';
import ViewMeme from './components/ViewMeme';

const AppRouter = () => {
  return (
    <div className='container'>
      {/* Heading with text */}
      <div className='row text-center'>
        <div className='col'>
          <h1>Make Generate Meme! So cool</h1>
        </div>
      </div>
      {/* section for my meme component */}
      <Switch>
        <Route path='/' exact component={Meme} />
        <Route path='/meme' component={ViewMeme} />
      </Switch>
    </div>
  );
};

export default AppRouter;