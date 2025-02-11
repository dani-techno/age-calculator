/**
* Made by: Dani Technology (Full Stack Engineer)
* Created on: January 10, 2024
* Contact developer:
* - WhatsApp: +62 838-3499-4479 or +62 823-2066-7363
* - Email: dani.technology.id@gmail.com
* - GitHub: https://github.com/dani-techno
*/

const yearNow = new Date().getFullYear();

document.getElementById('formAge').addEventListener('submit', function (event) {
  event.preventDefault();

  const yearBirthInput = document.getElementById('yearBirth').value;
  const resultDiv = document.getElementById('result');

  if (yearBirthInput == yearNow) {
    resultDiv.innerHTML = '<p class="text-red-500 text-lg font-medium">Mohon masukkan tahun lahir dengan benar.</p>';
  } else {
    const result = yearNow - yearBirthInput;
    resultDiv.innerHTML = `<p class="text-green-500 text-xl font-bold">Umur Anda adalah ${result} tahun.</p>`;
  }
});