import React, { useState, useEffect } from 'react';
import './photos-list.scss';
import Fetch from '../../lib/Fetch';
import { Link } from 'react-router-dom';

const PhotoList = (props) => {
  const { id } = props;
  const [ data, setData ] = useState([]);

  const fetchData = async () => {
    const response = await Fetch(`/albums/${id}/photos?_limit=10`)
    console.log(response)
    if (response.status === 200) setData(response.data)
  }

  useEffect(() => { console.log('now', props); fetchData(); }, []);

  return (
    <div className="photos">
      Photos of album {id} Detail
      {
        data.map((item) => (
          <Link to={`/photos-detail/${item.id}`} key={item.id}>
            <div className="photos__item"> 
              <img src={item.thumbnailUrl} alt={item.title}/>
              <p>Album ID: {item.albumId}</p>
              <p>ID: {item.id}</p>
              <p>Title: {item.title}</p>
              <p>url: {item.url}</p>
              <p>Thumbnail Url: {item.thumbnailUrl}</p>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default PhotoList;