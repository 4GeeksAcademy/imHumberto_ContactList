export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contactos: [
      {
        id: 1,
        name: "Contact 01",
        phone: 3333,
      },
      {
        id: 2,
        name: "Contact 02",
        phone: 4444,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'delete_contact':
        
      const { indexToDelete } = action.payload
      
      console.log("delete_contact INSIDE STORE index to delete: " + indexToDelete)

      return {
        ...store,
        contactos: store.contactos.filter ( (contacts,index) => index != indexToDelete )
      };

      case 'load_contacts':
        
      return {
        ...store,
        contactos: action.payload
      };

    default:
      throw Error('Unknown action.');
  }    
}
