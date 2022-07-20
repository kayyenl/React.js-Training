import React from 'react';
import ContactCard from './ContactCard';

const PetShop = () => {
    return (
        <div>
            <ContactCard 
            contact = {{
              name : "Mr. Whiskerson",
              imgUrl : "https://placekitten.com/300/200",
              phone : "(212) 555-1234",
              email : "mr-whiskaz@capnap.meow",
            }} />
            <ContactCard 
            contact = {{
              name : "Fluffykins",
              imgUrl : "https://placekitten.com/400/400",
              phone : "(212) 555-2345",
              email : "fluff@me.com",
            }} />
            <ContactCard 
            contact = {{
              name : "Destroyer" ,
              imgUrl : "https://placekitten.com/400/300" ,
              phone : "(212) 555-3456",
              email : "ofworlds@yahoo.meow",
            }} />
            <ContactCard 
            contact = {{
              name : "Felix" ,
              imgUrl : "https://placekitten.com/400/350" ,
              phone : "(212) 555-4567",
              email : "thecat@hotmail.meow",
            }} />
        </div>
    );
}

export default PetShop;
