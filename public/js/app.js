const cardBody =
'<div class=\'img\'>'+
		'<img id="profileImg" src="#"/>'+
'</div>'+
'<div class=\'nameEmailLocation\'>'+
		'<div id="name" class=\'name\'>'+
				// NAME+
		'</div>'+
		'<div id="email" class=\'subtle\'>'+
				// EMAIL
		'</div>'+
		'<div id="location" class=\'subtle\'>'+
				//LOCATION
		'</div>'+
'</div>';
let contactContainer = document.querySelector('.contactContainer');
let modal = document.querySelector('.modal');


loadContacts();

window.onload = ()=>{
  //handle all clicks outside modal
  modal.onclick = ()=>{
    modal.style.display = 'none';
  }
  document.querySelector('.close').onclick = ()=>{
    modal.style.display = 'none';
  }

}


function loadContacts(){
  fetch('https://randomuser.me/api/?results=12&inc=picture,email,name,login,location,nat,dob')
    .then(resp => resp.json())
    .then(json => {
      let results = json.results;

      results.forEach(item=>{
        console.log(item);
        let element = document.createElement('div');
        element.classList.add('card');
        element.innerHTML = cardBody;
        let profileImage = element.querySelector('#profileImg');
            profileImage.src = item.picture.large;
        let name = element.querySelector('#name');
            name.innerHTML = item.name.first+' '+item.name.last
        let email = element.querySelector('#email');
            email.innerHTML = item.email;
        let location = element.querySelector('#location');
            location.innerHTML = item.location.city;

        element.onclick = ()=>{
          document.querySelector('.modal .img img').src = item.picture.large;
          document.querySelector('.modal .name').innerHTML = item.name.first+' '+item.name.last;
          document.querySelector('.modal .email').innerHTML = item.email;
          document.querySelector('.modal .location').innerHTML = item.location.city;
          modal.style.display = 'flex';
        }
        console.log(element);
        contactContainer.append(element);

      });


    });
}
