function Error(props){
    return <div class="d-flex justify-content-center"><div class="card border border-danger rounded-4 p-4 p-sm-5 text-center" style={{maxWidth: "420px", width: "100%"}}>

   
    <div class="display-1 text-danger mb-3">
      <i class="bi bi-x-circle"></i>
    </div>

  
    <div class="display-4 fw-bold text-danger mb-1">{props.response.code}</div>


    <h2 class="text-white fw-semibold mb-2">{props.message}</h2>

    <p class="text-secondary-emphasis mb-4">Запрашиваемая страница не существует или была перемещена.</p>


    <div class="d-flex flex-column gap-2">
      <button class="btn btn-primary fw-semibold py-2">
        <i class="bi bi-arrow-clockwise me-2"></i> Попробовать снова
      </button>
      <button class="btn btn-outline-secondary text-white border-secondary fw-semibold py-2">
        <i class="bi bi-house me-2"></i> На главную
      </button>
    </div>

  </div></div>
}


export default Error