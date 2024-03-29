import { NoteCard } from "./components/note-card";
import { NewNoteCard } from "./components/new-note-card";


export function App () {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">

      
      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas"
          className="h-12 w-full bg-transparent text-3xl placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6 ">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}