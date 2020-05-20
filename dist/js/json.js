$('form').on('submit', (e) => {
  e.preventDefault();

  const name = $('#name').val().trim();
  const lastName = $('#lastname').val().trim();
  const email = $('#email').val().trim();
  const text = $('#text').val().trim();

    const data = {
      name,
      lastName,
      email,
      text
    };

    $.post('/email', data, function() {
      console.log('Server received our data');
    });
});