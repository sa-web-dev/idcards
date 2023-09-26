import IDcard from './Idcard'
import Data from '../Data.json'


function IDCards(){


    //console.log(Data.data);


    return(<>
        <h1>Test</h1>
            {Data.data.map(elm => {
              return <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
            })}

    </>
    );


}

export default IDCards