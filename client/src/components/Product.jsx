import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Product extends PureComponent {
  render () {
    const { _id, i, name, description, picture, toggleModal, deleteProduct,price,vendor,weight,dimensions } = this.props;
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <div className="thumbnail-frame">
            <img src={picture} alt="..." className="img-responsive thumbnail-pic" />
          </div>
          <div className="caption">
            <h5><b>{name}</b></h5>
            <h5><b>{i}</b></h5>
            <p className="description-thumbnail">{`${(description || '').substring(0, 160)}...`}</p>
            <h4 className="modal-h4"><b>Изотовитель: </b>{vendor}</h4>
            <h4 className="modal-h4"><b>Вес: </b>{weight} кг</h4>
            <h4 className="modal-h4"><b>Цена: </b>{price} USD</h4>
            <h4 className="modal-h4"><b>Размеры: </b>{dimensions} см</h4>
            <div className="btn-group" role="group" aria-label="...">
              <button className="btn-success" role="button" onClick={() => toggleModal(i)}>Посмотреть</button>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
