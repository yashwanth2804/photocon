import moment from 'moment';

const initalState = {

    instas: []
    
}

const Insta = (state = initalState, action) => {

    const newState = { ...state };
    if (action.type === "LOAD_TWEETS") {

        //console.log(action.newInstas.data);
        const newData = action.newInstas.data;
            const y  =newData.map( (s) => {
                s['comments'] =[] 
                    return s;
        });
            console.log(y)
        console.log("****************************loaded data")
       // console.log({ ...state, instas: action.newInstas.data })
        return { ...state, instas: newData }
    }

    if (action.type === "LIKE") {

        //console.log(action.newInstas.data);
        const incLikefor = action.timestamp;

        const ipdated = newState.instas.map( (p) => {

           // console.log(p.timestamp)

            if(p.timestamp == incLikefor){
                
                return { ...p, likes: p.likes + 1 };
            }
               
                return p; 
            }) 
 
        return { ...state ,instas: ipdated }
    }

    if (action.type === "COMMENT") {

        //console.log(action.newInstas.data);
        const { timestamp , cmtTxt } = action.payload;
        const updated = newState.instas.map( (p) => {

            console.log(p.timestamp == timestamp)
            console.log(p.timestamp + "                "+timestamp);
 
             if(p.timestamp == timestamp){
                 
                 return { ...p ,
                
                comments:[
                    ...p.comments,
                    cmtTxt
                ]

                };
             }
                
                 return p; 
             }) 


         
             console.log({ ...state ,instas:updated  });
        return { ...state ,instas:updated  }
    }

    ///IMAGE_UPLOAD
    if (action.type === "IMAGE_UPLOAD") {
        const  url  = action.url;
        console.log(url);
        const timestamp = moment().format('YYYY-MM-DD h:mm:ss');
        const Image = url;
        const likes = 0;
        const comments =[];

        /*
{
    "Image": "https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_3d151734.jpg",
    "likes": 380,
    "timestamp": "2017-04-14 14:23:45"
  }
    updatedPosts = [{ ...updatedPost, likes: 0 }, ...updatedPosts]
        */
        const newInsta = { Image, likes,timestamp,comments }
        // const updated = {  ...state , instas:newInsta };
      
//let AddedInsta  ={...state, instas : [ ...state.instas , newInsta] }
let AddedInsta  ={...state, instas : [ newInsta , ...state.instas  ] }
console.log( typeof(AddedInsta));
//AddedInsta = AddedInsta.reverse();

        //   const updatedPosts = [{ ...newInsta} , ...newState]

       // console.log(updatedPosts)
      // const y = Object.assign({}, AddedInsta);

     

        return AddedInsta;

    }



     

    return newState;
}

export default Insta;