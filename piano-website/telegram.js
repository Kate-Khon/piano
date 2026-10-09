const TOKEN = "8271024865:AAEoeK22ILmdAvRnhxmQsUxDvSqjf3eMIWM";
const CHAT_ID = "-1004439067384";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', (element) => {
  element.preventDefault();

  const tgName = document.getElementById('tg-name').value;
  const tgNumber = document.getElementById('tg-number').value;
  const tgMessage = document.getElementById('tg-message').value;
  const tgEmail = document.getElementById('tg-email').value;

    let message = `<b>New student request :)</b>\n\n`;
    message += `<b>Name:</b> ${tgName}\n`;
    message += `<b>Phone:</b> ${tgNumber}\n\n`;
    message += `<b>Email:</b> ${tgEmail}\n`;
    message += `<b>Experience and goals:</b> ${tgMessage}`;
  
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    });
});
