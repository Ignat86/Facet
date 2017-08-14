import React, { PureComponent } from 'react';

export default class Modal extends PureComponent {
  render () {
    const { _id, name, description, price,local_delivery_cost,barcode,weight,dimensions,vendor,picture,param} = this.props.product;
    const listpictures = (picture || []).map(element =>    
          <img src={element} className="img-thumbnail" />)

    const listparams = (param || []).map((value) =>
     <h4 className="modal-h4"><b>{value["_name"]}</b>: {value["__text"]} </h4>        
    );
   
    return(
      <div className="modal fade" id="product-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">{`${name}`}</h4>
            </div>
            <div className="modal-body">
              <div>
                <img src={picture} className="img-responsive img-big" />
              </div>
              <hr />
              <h4><b>Описание:</b></h4>
              <p>{description}</p> <br/>
              <h4 className="modal-h4"><b>Изотовитель: </b>{vendor}</h4>
              <h4 className="modal-h4"><b>Вес: </b>{weight} кг</h4>
              <h4 className="modal-h4"><b>Цена: </b>{price} USD</h4>
              <h4 className="modal-h4"><b>Цена доставки: </b>{local_delivery_cost} USD</h4>
              <h4 className="modal-h4"><b>Код: </b>{barcode}</h4>
              <h4 className="modal-h4"><b>Размеры: </b>{dimensions} см</h4>
              {listparams}
              <h4 className="modal-h4"><b>Фото: <br/> </b></h4>                
              {listpictures} 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
