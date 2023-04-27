const newFormHandler = async (event) => {
  event.preventDefault();

  const BlogTitle = document.querySelector('#blogtitle').value.trim();
  const description = document.querySelector('#description').value.trim();

console.log(BlogTitle, description)
  if (BlogTitle && description) {
    const response = await fetch(`/api/discussion`, {
      method: 'POST',
      body: JSON.stringify({ BlogTitle, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create discussion');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/discussion/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete discussion');
    }
  }
};

document
  .querySelector('.new-blog-post')
  .addEventListener('submit', newFormHandler);

//document
  //.querySelector('.project-list')
  //.addEventListener('click', delButtonHandler);
