import { user } from "fontawesome";

export const initialState = {
    userdata: [
      {id: 1, name: 'Tania', username: 'Tania1234', message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. '},
      {id: 2, name: 'Adebayo', username: 'Adebayo30p', message:'Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. '},
      {id: 3, name: 'Talan', username: 'Tani%234', message:' Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate eni'}],
      user: [],
      editing:false
    
  };
  
  // Reference
  
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "LOGIN":
  //       axios
  //         .post("http://localhost:5000/api/users/login", {
  //           email: action.payload.email,
  //           password: action.payload.password,
  //         })
  //         .then((res) => {
  //           if (res.data.success) {
  //             localStorage.setItem("token", res.data.token);
  //             return {
  
  const reducer = (state, action) => {
    console.log(action.type);
    // console.log(state.userdata[0]);
    console.log(action.usermessage);
    switch (action.type) {
      case "ADD_TO_TWEET":
        console.log({...state.userdata.push(action.usermessage)})
        
        // console.log({
          
        // })
      case "FILTER_TWEET":
        return {
          ...state,
          userdata: state.userdata.filter(
            (item) => item.id != action.usertweet
          ),
        };
      case "CANCEL_TWEET":
      return {
        ...state,
        editing:action.editing
      }
  
      // // user: state.user.find((item) => item === action.EachUser),
  
      // case "CURRENT_DASHBOARD":
      //   return {
      //     TaskList: state.TaskList.filter(
      //       (item) => item.EachUser === action.EachUser
      //     ),
      //   };
      // case "FILTER_CURRENTPROFILE":
      //   const newprofile = {
      //     ...state,
      //     userprofile: state.userprofile.filter(
      //       (item) => item.email === action.userprofile
      //     ),
      //   };
      //   return {
      //     userprofile: newprofile,
      //   };
      default:
        return state;
    }
  };
  export default reducer;
  