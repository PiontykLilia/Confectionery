document.querySelector('.inner_contact').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.inner_contact'))
    })
        .then( response => response.text() )
        .then( html => document.querySelector('.server-response')
.innerHTML = html );
}
  
