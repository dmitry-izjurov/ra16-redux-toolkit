import './App.css';
import StarWars from './components/starWars';
import Photo from './components/photo';

export default function App() {
  return (
    <>
      <div className='task'>StarWars</div>
      <StarWars />
      <div className='task'>Фото</div>
      <Photo />
    </>
  );
}