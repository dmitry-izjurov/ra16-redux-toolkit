import { useDispatch, useSelector } from 'react-redux';
import { actionPhoto } from '../redux/slices/photoSelected';
import { actionPhotos } from '../redux/slices/photoDownloader';
import ItemPhoto from './itemPhoto'; 

function Photo() {

  const dispatch = useDispatch();
  const photo = useSelector(state => state.photoSelected.value)
  const photos = useSelector(state => state.photoDownloader);
  const handleAdd = e => dispatch(actionPhotos.download(photo));
  const handleChange = e => dispatch(actionPhoto.select(URL.createObjectURL(e.target.files[0])));

  return (
    <>
      <div className="wrapper_photo">
        <section>
          {photos.length > 0 ?
            <div>
              <img className="photo" src={photos[0]} alt="Фото" />
            </div> :
            <div>Здесь будет последнее фото</div>
          }
        </section>
        <form className="form">
          <label className="label">
            <span className="text-input">Выберите фото</span>
            <input className="input_photo" type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
          </label>
          <button className="button_photo" type="button" onClick={handleAdd}>Загрузить фото</button>
        </form>
        <ul className="list">
          {photos.length > 0 ?
            photos.map((a,i) => <ItemPhoto key={i} url={a} />)
            :
            <li>Все фотографии</li>
          }
        </ul>
      </div>
    </>
  )
}
  
export default Photo;
