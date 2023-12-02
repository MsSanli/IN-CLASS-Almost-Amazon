import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = `
    <div style="width: 18rem;" >
      <div class="text-white ms-5 details">
        <h5 class="card-title">${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
        <hr>
        <i class="fas fa-edit btn btn-info" id="update-author-btn--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
      </div>
    </div>
    `;

  obj.booksObject.forEach((array) => {
    domString += `<div class="card">
        <img class="card-img-top" src=${array.image} alt=${array.title} style="height: 400px;">
        <div class="card-body" style="height: 80px;">
          <h5 class="card-title">${array.title}</h5>
            <p class="card-text bold">${array.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${array.price}` : `$${array.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${array.firebaseKey}"></i>
            <i id="edit-book-btn--${array.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${array.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewAuthor;
