// import { useReducer } from "react";

// type State = {
//   name: string;
//   email: string;
//   password: string;
// };

// type Action =
//   | {
//       type: "set_name";
//       payload: string;
//     }
//   | {
//       type: "set_email";
//       payload: string;
//     }
//   | {
//       type: "set_password";
//       payload: string;
//     }
//   | {
//       type: "reset";
//     };

// const initialState: State = {
//   name: "",
//   email: "",
//   password: "",
// };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case "set_name":
//       return {
//         ...state,
//         name: action.payload,
//       };

//     case "set_email":
//       return {
//         ...state,
//         email: action.payload,
//       };

//     case "set_password":
//       return {
//         ...state,
//         password: action.payload,
//       };

//     case "reset":
//       return initialState;

//     default:
//       return state;
//   }
// }

// function Register() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>Register</h1>

//       <input
//         type="text"
//         placeholder="Name"
//         value={state.name}
//         onChange={(e) =>
//           dispatch({
//             type: "set_name",
//             payload: e.target.value,
//           })
//         }
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={state.email}
//         onChange={(e) =>
//           dispatch({
//             type: "set_email",
//             payload: e.target.value,
//           })
//         }
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={state.password}
//         onChange={(e) =>
//           dispatch({
//             type: "set_password",
//             payload: e.target.value,
//           })
//         }
//       />

//       <button onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>


//       <h1>{state.name}</h1>
//       <h1>{state.email}</h1>
//       <h1>{state.password}</h1>
//     </div>

    
//   );
// }

// export default Register;


import React, { useReducer } from "react";

type state = {
  name: string,
  email: string,
  password: string
}

type Action = | 
    {
      type: "set_feild",
      feild: keyof state,
      value: string
    }
    |
    {
      type: "reset"
    }
const initialState: state = {
      name: "",
      email: "",
      password: ""
    }

function reducer(state: state, action: Action) :state {
  switch(action.type){
    case "set_feild": 
    return {
      ...state,
      [action.feild]: action.value   
    }
    case "reset":
      return initialState
  }
}


function Register() {
  let name;

  const [state,dispatch] = useReducer(reducer,initialState)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement  >) => {
    e.preventDefault()
    name = state.name
    console.log(name)
    dispatch({
      type: "reset"
    })
    
  }
  return (
    <>
      <div>
        <form  onSubmit={handleSubmit}>
          <input type="text"
            onChange={((e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type:"set_feild",
              feild: "name",
              value: e.target.value
            }) )     }
          />
          <input type="email"
             onChange={((e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type:"set_feild",
              feild: "email",
              value: e.target.value
            }) )     }
          />
          <input type="password"
             onChange={((e: React.ChangeEvent<HTMLInputElement>) => dispatch({
              type:"set_feild",
              feild: "password",
              value: e.target.value
            }) )     }
            />
            <button type="submit">Submi</button>
        </form> 
        
      </div>
    </>
  )
}

export default Register