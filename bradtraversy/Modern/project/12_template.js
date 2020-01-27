const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li> ' + job + '</li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>City: ' + city + '</li>';

function hello() {
  return 'hello'
}
// With template string (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over' : 'Under 30'}</li>
`

document.body.innerHTML = html;
