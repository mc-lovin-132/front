function Loading(){
    return <div className="d-flex justify-content-center"><div class="card bg-dark border border-secondary rounded-4 p-4 p-sm-5 text-center" style={{maxWidth: "420px", width: "100%"}}>
    

    <div class="d-flex justify-content-center mb-4">
      <div class="spinner-border text-primary" role="status" style={{width: "64px", height: "64px", borderWidth: "4px"}}>
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>

    <h2 class="text-white fw-semibold mb-2">Загрузка</h2>
    <p class="text-secondary-emphasis mb-0">Пожалуйста, подождите...</p>

  </div></div>
}
 
export default Loading