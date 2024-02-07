

export function NoteCard () {
    return (
      <button className=" text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm  font-medium text-slate-300"> 
          Adicionar nota 
        </span>
        <p className="text-slate-400 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ipsum animi similique, provident quos sit vitae quidem iusto reiciendis. Adipisci atque ab accusamus quos vel nemo omnis nam asperiores odio?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ipsum animi similique, provident quos sit vitae quidem iusto reiciendis. Adipisci atque ab accusamus quos vel nemo omnis nam asperiores odio?
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
      </button>
    )
}