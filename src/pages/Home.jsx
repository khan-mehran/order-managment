import React, { useState} from 'react'

const Home = () => {
    const [subDomain, setSubDomain] = useState([{id:1, domain: 'daraz.com', logo: 'daraz-logo'}, {id:2, domain:'azamon.com', logo:'amazone-logo'}, {id:3, domain:'test.com', logo:'test-logo'}]);
    const [checkDomain, setChecKDomain] = useState('');
    const [newDomain, setNewDomain] = useState('');

    const checkingDomain = (domain) =>{
        
        if(checkDomain === domain.domain){
            return(
                <div>
                    <span>The logo is {domain.logo}</span>
                    <h2>The Domain is {domain.domain}</h2>
                </div>
            )
        }
    }

    const AddDomain = (addSubDomain) =>{
        setSubDomain([...subDomain, {domain:addSubDomain}]);
        console.log('new Domain',newDomain)
    }
    
  return (
    <div className='container'>
        <label>Search Domain here</label>
        <div>
            <input type="text" onChange={(e)=>setChecKDomain(e.target.value)} />
        </div>
        {
          subDomain.map((domain)=>{
            return(
                checkingDomain(domain)
            )
            
          })
        }

        <div>
            <label> Add Domain here</label>
            <div>
                <input type="text" onChange={(e)=>setNewDomain(e.target.value)} />
                <button onClick={()=>AddDomain()}>Add Domain</button>
            </div>
        </div>
    </div>
  )
}

export default Home
